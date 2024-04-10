import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: process.env.NODE_ENV === "development" ? process.env.REACT_APP_DEV_API_URL : process.env.REACT_APP_API_URL,
};

const apiConfigSlice = createSlice({
  name: "apiConfig",
  initialState: initialState,
  reducers: {},
});

export default apiConfigSlice.reducer;