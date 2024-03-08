import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: false };

const toLoginSlice = createSlice({
  name: "toLogin",
  initialState: initialState,
  reducers: {
    updateToLoginStatus: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { updateToLoginStatus } = toLoginSlice.actions;

export default toLoginSlice.reducer;
