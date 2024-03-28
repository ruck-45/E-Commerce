import { Grid, TextField, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { RootState } from "../../Redux/store";
import { editShippingAddress } from "../../Redux/Slices/shippingInfoSlice";
import axios from "axios";
import { getCookie } from "../../utils/cookies";

export default function AddDeliveryAddressForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const shippingInfo = useSelector((state: RootState) => state.shippingInfo);
  const apiUrl = useSelector((state: RootState) => state.apiConfig.value);
  const token = getCookie("token");

  const [input, setInput] = useState({
    address: shippingInfo.address,
    zip: shippingInfo.zip,
    phoneNumber: shippingInfo.phoneNumber,
    city: shippingInfo.city,
    state: shippingInfo.state,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const shippingInfoChange = () => {
    return (
      input.address === shippingInfo.address &&
      input.zip === shippingInfo.zip &&
      input.phoneNumber === shippingInfo.phoneNumber &&
      input.city === shippingInfo.city &&
      input.state === shippingInfo.state
    );
  };

  const updateShippingInfo = async () => {
    const data = {
      phone: input.phoneNumber,
      address: input.address,
      state: input.state,
      addressCode: input.zip,
      city: input.city,
    };

    try {
      const response = await axios.put(`${apiUrl}/users/profile`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.data.success) {
        console.log("Shipping Info Updation Successful");
      } else {
        console.log("Shipping Info Updation Failed", response.data);
      }
    } catch (error) {
      console.log("Shipping Info Updation Failed", error);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!shippingInfoChange()) {
      dispatch(editShippingAddress(input));
      updateShippingInfo();
    }
    navigate("/Checkout", { state: { step: 3 } });
  };

  return (
    <div>
      <Grid container spacing={4} className="p-[3rem]">
        <Grid item xs={12} lg={5} className="lg:inline-block hidden">
          <Box className="border rounded-md shadow-md h-[25.35rem] overflow-y-scroll ">
            <img
              src="https://images.unsplash.com/photo-1601656125693-aac12521664f?q=80&w=1438&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <div className="flex flex-col items-start justify-between px-[2rem] pb-[1rem]">
              <h1 className="font-bold py-[1rem] text-[1.2rem]">Importance Of Delivery Address:</h1>
              <p className="text-gray-600 ">
                Providing the correct delivery address ensures that the package or service reaches the intended
                recipient without delay or error.
              </p>
            </div>
          </Box>
        </Grid>
        <Grid item xs={12} lg={7}>
          <Box className="border rounded-md shadow-md p-5">
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextField
                    required
                    value={input.address}
                    onChange={handleInputChange}
                    id="address"
                    name="address"
                    label="Address"
                    fullWidth
                    autoComplete="shipping address"
                    multiline
                    rows={4}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    value={input.city}
                    onChange={handleInputChange}
                    id="city"
                    name="city"
                    label="City"
                    fullWidth
                    autoComplete="shipping address-level2"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="state"
                    name="state"
                    label="State / Province"
                    fullWidth
                    value={input.state}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="zip"
                    name="zip"
                    label="Zip / Postal code"
                    fullWidth
                    autoComplete="shipping postal-code"
                    value={input.zip}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="phoneNumber"
                    name="phoneNumber"
                    label="Phone Number"
                    value={input.phoneNumber}
                    onChange={handleInputChange}
                    fullWidth
                    autoComplete="tel"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    sx={{ padding: ".9rem 1.5rem" }}
                    size="large"
                    type="submit"
                    variant="contained"
                    color="primary"
                  >
                    Deliver Here
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
