import { createSlice } from "@reduxjs/toolkit";
import { productsType } from "../../utils/types";
import { shippingType } from "../../utils/types";

type CartState = {
  cart: productsType[];
  totalQuantity: number;
  totalPrice: number;
  shippingInfo: shippingType;
  totalDiscountPrice: number;
  dataFetched: boolean;
};

const initialShippingInfo = {
  firstName: "",
  lastName: "",
  address: "",
  country: "",
  zip: "",
  phoneNumber: "",
  city: "",
  state: "",
};

const initialState: CartState = {
  cart: [],
  totalQuantity: 0,
  totalPrice: 0,
  shippingInfo: initialShippingInfo,
  totalDiscountPrice: 0,
  dataFetched: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItemIndex = state.cart.findIndex((item) => item.item_id === action.payload.item_id);
      if (existingItemIndex === -1) {
        state.cart.push({ ...action.payload, count: action.payload.minimumOrder });
        state.totalQuantity += action.payload.minimumOrder;
        state.totalPrice += action.payload.price * action.payload.minimumOrder;
        state.totalDiscountPrice += action.payload.discountedPrice * action.payload.minimumOrder;
      }
    },
    removeItem: (state, action) => {
      const cartItem = state.cart.filter((item) => item.item_id === action.payload)[0];
      state.totalQuantity -= cartItem.count;
      state.totalPrice -= cartItem.price * cartItem.count;
      state.totalDiscountPrice -= cartItem.discountedPrice * cartItem.count;

      state.cart = state.cart.filter((item) => item.item_id !== action.payload);
    },
    increaseItem: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.item_id === action.payload) {
          state.totalQuantity += 1;
          state.totalPrice += item.price;
          state.totalDiscountPrice += item.discountedPrice;
          return { ...item, count: item.count + 1 };
        }
        return item;
      });
    },
    decreaseItem: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.item_id === action.payload) {
          state.totalQuantity -= 1;
          state.totalPrice -= item.price;
          state.totalDiscountPrice -= item.discountedPrice;
          return { ...item, count: item.count - 1 };
        }
        return item;
      });
    },
    updateDataFetched: (state, action) => {
      state.dataFetched = action.payload;
    },

    deleteShippingInfo: (state) => {
      state.shippingInfo = initialShippingInfo;
    },
    saveShippingInfo: (state, action) => {
      console.log(action.payload);
      localStorage.setItem("shippingInfo", JSON.stringify(action?.payload));
      state.shippingInfo = action?.payload;
    },
  },
});

export const {
  addToCart,
  removeItem,
  increaseItem,
  decreaseItem,
  saveShippingInfo,
  deleteShippingInfo,
  updateDataFetched,
} = cartSlice.actions;

export default cartSlice.reducer;
