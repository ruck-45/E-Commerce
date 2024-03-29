import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  address: "",
  zip: "",
  phoneNumber: "",
  city: "",
  state: "",
  dataFetched: false,
};

const shippingInfoSlice = createSlice({
  name: "shippingInfo",
  initialState,
  reducers: {
    editShippingAddress: (state, action) => {
      state.address = action.payload.address;
      state.zip = action.payload.zip;
      state.phoneNumber = action.payload.phoneNumber;
      state.city = action.payload.city;
      state.state = action.payload.state;
    },
    updateInfoFetched: (state, action) => {
      state.dataFetched = action.payload;
    },
    resetShippingInfo: (state) => {
      state.address = "";
      state.zip = "";
      state.phoneNumber = "";
      state.city = "";
      state.state = "";
      state.dataFetched = false;
    },
  },
});

export const { editShippingAddress, updateInfoFetched, resetShippingInfo } = shippingInfoSlice.actions;

export default shippingInfoSlice.reducer;
