import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { carpetData } from "../../Data/carpets";
import {antiqueData} from "../../Data/antiques"
import axios from "axios";
import toast from "react-hot-toast";
 let apiUrl = process.env.REACT_APP_API_URL;
 if (process.env.NODE_ENV === "development") {
   apiUrl = process.env.REACT_APP_DEV_API_URL;
 }

const initialState = {
  cart: [],
  count:0,
  items: [],
  antiques:antiqueData,
  totalQuantity: 0,
  totalPrice: 0,
};

export const getAllitems = createAsyncThunk("/items", async () => {
  try {
    const response = axios.get(`${apiUrl}/items/all`);
    console.log("resonse is", response)
    toast.promise(response, {
      loading: "fetching items",
      success: "fecthed succesfully",
      error: "failed to load ",
    });
    return (await response).data.carpet.carpetData;
  } catch (error) {
    console.log("error is define",error)
    toast.error(error?.response?.data?.message);
  }
});


const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      let find = state.cart.findIndex((item) => item.id === action.payload.id);
      console.log("find", find);
      if (find >= 0) {
        state.cart[find].orderQuantity += 1;
      } else {
        state.cart.push(action.payload);
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    getCartTotal: (state) => {
      let { totalPrice, totalQuantity } = state.cart.reduce(
        (cartTotal, cartItem) => {
          console.log("cartTotal", cartTotal);
          console.log("cartItem", cartItem);
          const { price, orderQuantity } = cartItem;
          console.log(price, orderQuantity);
          const itemTotal = price * orderQuantity;
          cartTotal.totalPrice += itemTotal;
          cartTotal.totalQuantity += orderQuantity;
          return cartTotal;
        },
        {
          totalPrice: 0,
          totalQuantity: 0,
        }
      );
      state.totalPrice = parseInt(totalPrice.toFixed(2));
      state.totalQuantity = totalQuantity;
    },
    removeItem: (state, action) => {
      console.log("hdjhdskjh", action.payload);
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    increaseItem: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload) {
          return { ...item, orderQuantity: item.orderQuantity + 1 };
        }

        return item;
      });
    },
    decreaseItem: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload) {
          return { ...item, orderQuantity: item.orderQuantity - 1 };
        }

        return item;
      });
    },
    increaseCount: (state) => {
      state.count += 1;
    },
    decreaseCount: (state) => {
      state.count -= 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllitems.fulfilled, (state, action) => {
      if (action.payload) {
        console.log("hhghjh",action.payload);
        state.items = [...action.payload];
      }
    });
  }
});

export const { addToCart, getCartTotal, removeItem, increaseItem ,decreaseItem,increaseCount,decreaseCount} = cartSlice.actions;
export default cartSlice.reducer;
