// Dependencies
import { configureStore } from "@reduxjs/toolkit";

// Local Files
import curTabSlice from "./curTabSlice";

const store = configureStore({
  reducer: {
    curTab: curTabSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
