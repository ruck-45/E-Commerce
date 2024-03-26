import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getCookie } from "../../utils/cookies";

const initialState = { value: getCookie("token") ? true : false };

const loginStatusSlice = createSlice({
  name: "loginStatus",
  initialState,
  reducers: {
    updateLoginStatus: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload;
    },
  },
});

export const { updateLoginStatus } = loginStatusSlice.actions;

export default loginStatusSlice.reducer;
