// Dependencies
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// Local Files
import curTabSlice from "./Slices/curTabSlice";
import navOpenStatusSlice from "./Slices/navOpenStatusSlice";
import toLoginSlice from "./Slices/toLoginSlice";
import cartReducer from "./Slices/CartSlice";
import apiConfigReducer from "./Slices/apiConfigSlice";

const persistConfig = {
  key: "root",
  storage,
  version:1,
};

// Wrap your root reducer with persistReducer
const persistedReducer = persistReducer(persistConfig, combineReducers({
  curTab: curTabSlice,
  navOpenStatus: navOpenStatusSlice,
  toLogin: toLoginSlice,
  allCart: cartReducer,
  apiConfig: apiConfigReducer,
}));

const store = configureStore({
  reducer: persistedReducer,
  middleware:(getDefaultMiddleware) =>getDefaultMiddleware({
    serializableCheck:false,
  }),
  devTools: true,
});


// Create a persistor
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export default store;