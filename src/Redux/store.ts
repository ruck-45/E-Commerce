// Dependencies
import { configureStore } from "@reduxjs/toolkit";

// Local Files
import curTabSlice from "./Slices/curTabSlice";
import navOpenStatusSlice from "./Slices/navOpenStatusSlice";
import toLoginSlice from "./Slices/toLoginSlice";
import cartReducer from "./Slices/CartSlice";
import apiConfigReducer from "./Slices/apiConfigSlice";

const store = configureStore({
  reducer: {
    curTab: curTabSlice,
    navOpenStatus: navOpenStatusSlice,
    toLogin: toLoginSlice,
    allCart: cartReducer,
    apiConfig: apiConfigReducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
