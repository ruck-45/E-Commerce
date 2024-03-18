import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: process.env.NODE_ENV === "development" ? "http://localhost:5000/api" : "https://cerebrum.ecommerce.com/api",
};

const apiConfigSlice = createSlice({
  name: "apiConfig",
  initialState: initialState,
  reducers: {},
});

export default apiConfigSlice.reducer;