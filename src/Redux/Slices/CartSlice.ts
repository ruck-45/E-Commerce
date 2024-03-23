import { createSlice } from "@reduxjs/toolkit";
import { productsType } from "../../utils/types";
import { shippingType } from "../../utils/types";

type CartState = {
  cart: productsType[];
  totalQuantity: number;
  totalPrice: number;
  shippingInfo: shippingType;
  totalDiscountPrice: number;
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
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart.push({ ...action.payload, count: action.payload.minimumOrder });
    },
    removeItem: (state, action) => {
      state.cart = state.cart.filter((item) => item.item_id !== action.payload);
    },
    increaseItem: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.item_id === action.payload) {
          return { ...item, count: item.count + 1 };
        }

        return item;
      });
    },
    decreaseItem: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.item_id === action.payload) {
          return { ...item, count: item.count - 1 };
        }

        return item;
      });
    },

    getCartTotal: (state) => {
      let { totalPrice, totalQuantity, totalDiscountPrice } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, minimumOrder, discountedPrice } = cartItem;
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
          totalDiscountPrice: 0,
        }
      );
      state.totalPrice = parseInt(totalDiscountPrice.toFixed(2));
      state.totalDiscountPrice = parseInt(totalPrice.toFixed(2));
      state.totalQuantity = totalQuantity;
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
  getCartTotal,
  removeItem,
  increaseItem,
  decreaseItem,
  saveShippingInfo,
  deleteShippingInfo,
} = cartSlice.actions;

export default cartSlice.reducer;
