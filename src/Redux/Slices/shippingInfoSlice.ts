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
      state.zip = action.payload.address_code;
      state.phoneNumber = action.payload.phone;
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
    },
  },
});

export const { editShippingAddress, updateInfoFetched, resetShippingInfo } = shippingInfoSlice.actions;

export default shippingInfoSlice.reducer;
