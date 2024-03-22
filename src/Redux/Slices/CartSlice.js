import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { carpetData } from "../../Data/carpets";
import {antiqueData} from "../../Data/antiques"
import { useSelector } from "react-redux";
import axios from "axios";
import toast from "react-hot-toast";



const initialState = {
  cart: [],
  count:1,
  items: carpetData,
  carpetData: {},
  antiques: antiqueData,
  totalQuantity: 0,
  totalPrice: 0,
  shippingInfo:{},
  totalDiscountPrice:0,
};


export const getAllItems = createAsyncThunk("/items/get", async (id) => {
  try {
    const response = axios.get(`http://localhost:5000/api/items/${id}`);
    console.log("gggggg", response);
    toast.promise(response, {
      loading: "loading Items",
      success: "Items loaded succefully",
      error: "Failed to get Items",
    });
    return (await response).data.payload.result;
  } catch (error) {
     console.log(error);
  }
});




const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      let find = state.cart.findIndex((item) => item.item_id === action.payload.item_id);
      console.log("find", find);
      if (find >= 0) {
        state.cart[find].minimumOrder += 1;
      } else {
        state.cart.push({ ...action.payload, minimumOrder: state.count });
      }
    },
    getCartTotal: (state) => {
      let { totalPrice, totalQuantity, totalDiscountPrice } = state.cart.reduce(
        (cartTotal, cartItem) => {
          console.log("cartTotal", cartTotal);
          console.log("cartItem", cartItem);
          const { price, minimumOrder, discountedPrice } = cartItem;
          console.log(price, minimumOrder, discountedPrice);
          const itemTotal1 = discountedPrice * minimumOrder;
          const itemTotal = price * minimumOrder;
          cartTotal.totalPrice += itemTotal;
          cartTotal.totalQuantity += minimumOrder;
          cartTotal.totalDiscountPrice += itemTotal1;
          return cartTotal;
        },
        {
          totalPrice: 0,
          totalQuantity: 0,
          totalDiscountPrice:0,
        }
      );
      state.totalPrice = parseInt(totalDiscountPrice.toFixed(2));
      state.totalDiscountPrice = parseInt(totalPrice.toFixed(2));
      state.totalQuantity = totalQuantity;
    },
    removeItem: (state, action) => {
      console.log("hdjhdskjh", action.payload);
      state.cart = state.cart.filter((item) => item.item_id !== action.payload);
    },
    increaseItem: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.item_id === action.payload) {
          return { ...item, minimumOrder: item.minimumOrder + 1 };
        }

        return item;
      });
    },
    decreaseItem: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.item_id === action.payload) {
          return { ...item, minimumOrder: item.minimumOrder - 1 };
        }

        return item;
      });
    },
    increaseCount: (state) => {
      console.log("count is", state.count)
      state.count += 1;
    },
    decreaseCount: (state) => {
       console.log("count is", state.count);
      state.count -= 1;
    },
    removeCount:(state) => {
      console.log("count is", state.count);
      state.count =0
    },
    saveShippingInfo: (state, action) => {
      console.log(action.payload);
      localStorage.setItem("shippingInfo", JSON.stringify(action?.payload));
      state.shippingInfo = action?.payload;
    },
    deleteShippingInfo:(state) => {
      state.shippingInfo = {}
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllItems.fulfilled, (state, action) => {
      if (action.payload) {
        localStorage.setItem("shippingInfo", JSON.stringify(action.payload));
        console.log(action.payload);
        state.carpetData = { ...action.payload };
        state.count =action.payload.minimumOrder;
      }
    });
  },
});

export const {
  deleteShippingInfo,
  addToCart,
  getCartTotal,
  removeItem,
  increaseItem,
  decreaseItem,
  increaseCount,
  decreaseCount,
  saveShippingInfo,
} = cartSlice.actions;
export default cartSlice.reducer;
