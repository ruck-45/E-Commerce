import { createSlice } from "@reduxjs/toolkit";
import { productsType } from "../../utils/types";

type CartState = {
  cart: productsType[];
  totalQuantity: number;
  totalPrice: number;
  totalDiscountPrice: number;
  dataFetched: boolean;
};

const initialState: CartState = {
  cart: [],
  totalQuantity: 0,
  totalPrice: 0,
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
    resetCart: (state) => {
      state.cart = [];
      state.dataFetched = false;
      state.totalPrice = 0;
      state.totalQuantity = 0;
      state.totalDiscountPrice = 0;
    },
  },
});

export const { addToCart, removeItem, increaseItem, decreaseItem, updateDataFetched, resetCart } = cartSlice.actions;

export default cartSlice.reducer;
