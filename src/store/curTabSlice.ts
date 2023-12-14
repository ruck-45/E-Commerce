import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: "" };

const curTabSlice = createSlice({
  name: "curTab",
  initialState: initialState,
  reducers: {
    updateTab: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { updateTab } = curTabSlice.actions;

export default curTabSlice.reducer;
