import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: process.env.REACT_APP_API_URL,
};

const apiConfigSlice = createSlice({
  name: "apiConfig",
  initialState: initialState,
  reducers: {},
});

export default apiConfigSlice.reducer;