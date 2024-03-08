import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: false };

const navOpenStatusSlice = createSlice({
  name: "navOpenStatus",
  initialState: initialState,
  reducers: {
    updateNavStatus: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { updateNavStatus } = navOpenStatusSlice.actions;

export default navOpenStatusSlice.reducer;
