import * as React from "react";
import { Grid, TextField, Button, Box } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { createOrder } from "../../../Redux/Customers/Order/Action";
import userEvent from "@testing-library/user-event";
import AddressCard from "../adreess/AdreessCard";
import { useState } from "react";

type Cardsprops={
  handleNext : any
}

export default function AddDeliveryAddressForm(props:Cardsprops) {
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  // const jwt = localStorage.getItem("jwt");
  // const { auth } = useSelector((store) => store);
  // const [selectedAddress, setSelectedAdress] = useState(null);
  

  // console.log("auth", auth);

  

  // const handleSubmit = (event:any) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   // eslint-disable-next-line no-console

  //   const address = {
  //     firstName: data.get("firstName"),
  //     lastName: data.get("lastName"),
  //     streetAddress: data.get("address"),
  //     city: data.get("city"),
  //     state: data.get("state"),
  //     zipCode: data.get("zip"),
  //     mobile: data.get("phoneNumber"),
  //   };
  //    navigate('/Checkout/?step=3')
  //   // dispatch(createOrder({ address, jwt, navigate }));
  //   // after perfoming all the opration
  //   props.handleNext();
  // };

  // const handleCreateOrder = () => {
  //   // dispatch(createOrder({ address:item, jwt, navigate }));
  //   handleNext();
  // };

  return (
    <Grid container spacing={4} className="md:p-[3rem]">
      <Grid item xs={12} lg={5} className="lg:inline-block hidden">
        <Box className="border rounded-md shadow-md h-[30.5rem] overflow-y-scroll ">
          <img
            src="https://images.unsplash.com/photo-1601656125693-aac12521664f?q=80&w=1438&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <div className="flex flex-col items-start justify-between p-[2rem]">
            <h1 className="font-bold py-[1rem] text-[1.2rem]">Importance Of Delivery Address:</h1>
            <p className="text-gray-600 py-[0.5rem] ">
              Providing the correct delivery address ensures that the package or service reaches the intended recipient
              without delay or error. Accuracy in the address minimizes the risk of misdelivery or lost packages.
            </p>
          </div>
        </Box>
      </Grid>
      <Grid item xs={12} lg={7}>
        <Box className="border rounded-md shadow-md p-5">
          <form>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="firstName"
                  name="firstName"
                  label="First Name"
                  fullWidth
                  autoComplete="given-name"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="lastName"
                  name="lastName"
                  label="Last Name"
                  fullWidth
                  autoComplete="given-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
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
                  id="city"
                  name="city"
                  label="City"
                  fullWidth
                  autoComplete="shipping address-level2"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField required id="state" name="state" label="State/Province/Region" fullWidth />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="zip"
                  name="zip"
                  label="Zip / Postal code"
                  fullWidth
                  autoComplete="shipping postal-code"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="phoneNumber"
                  name="phoneNumber"
                  label="Phone Number"
                  fullWidth
                  autoComplete="tel"
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  onClick={() => navigate("/Checkout/?step=3")}
                  sx={{ padding: ".9rem 1.5rem" }}
                  size="large"
                  type="submit"
                  variant="contained"
                  color="primary"
                >
                  Deliverd Here
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Grid>
    </Grid>
  );
}
