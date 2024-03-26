import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = { value: "/Shop" };

const loginRedirectSlice = createSlice({
  name: "loginRedirect",
  initialState,
  reducers: {
    updateRedirect: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { updateRedirect } = loginRedirectSlice.actions;

export default loginRedirectSlice.reducer;
