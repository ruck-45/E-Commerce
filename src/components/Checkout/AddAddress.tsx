import * as React from "react";
import { Grid, TextField, Button, Box } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { saveShippingInfo } from "../../Redux/Slices/CartSlice";
import EditAddressCard from "../adreess/EditAddressCard";

type Cardsprops = {
  handleNext: any;
};

export default function AddDeliveryAddressForm(props: Cardsprops) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { state } = useLocation();

  console.log("state is",state)

  const {shippingInfo} = useSelector((state:any) => state?.allCart)
  console.log("shipoing",shippingInfo)

  function isObjectEmpty(obj:any) {
    return Object.keys(obj).length === 0;
  }

  const [shipping, setShipping] = React.useState(shippingInfo);

  const [input, setInput] = React.useState({
    firstName: "",
    lastName: "",
    address: "",
    country: "",
    zip: "",
    phoneNumber: "",
    city: "",
    state: "",
  });

  function handleInputChange(e: any) {
    e.preventDefault();
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  }

  async function ShippingInfosave(event: any) {
    event.preventDefault();

    //  if(!input.fullName ||!input.address ||!input.country ||!input.state|| !input.phoneNo|| !input.pincode ||!input.city ){
    //   toast.error('all field are neccesary ')
    //   return
    //  }

    const res = await dispatch(saveShippingInfo(input));
    console.log("this is a data", res);

    if (res?.payload) navigate("/Checkout/?step=3", { state: { ...state } });

    setInput({
      firstName: "",
      lastName: "",
      address: "",
      country: "",
      zip: "",
      phoneNumber: "",
      city: "",
      state: "",
    });
  }

  return (
    <div>
      {isObjectEmpty(shippingInfo) === true ? (
        <Grid container spacing={4} className="p-[3rem]">
          <Grid item xs={12} lg={5} className="lg:inline-block hidden">
            <Box className="border rounded-md shadow-md h-[30.5rem] overflow-y-scroll ">
              <img
                src="https://images.unsplash.com/photo-1601656125693-aac12521664f?q=80&w=1438&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
              <div className="flex flex-col items-start justify-between p-[2rem]">
                <h1 className="font-bold py-[1rem] text-[1.2rem]">Importance Of Delivery Address:</h1>
                <p className="text-gray-600 py-[0.5rem] ">
                  Providing the correct delivery address ensures that the package or service reaches the intended
                  recipient without delay or error. Accuracy in the address minimizes the risk of misdelivery or lost
                  packages.
                </p>
              </div>
            </Box>
          </Grid>
          <Grid item xs={12} lg={7}>
            <Box className="border rounded-md shadow-md p-5">
              <form onSubmit={ShippingInfosave}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      id="firstName"
                      name="firstName"
                      label="First Name"
                      fullWidth
                      autoComplete="given-name"
                      value={input.firstName}
                      onChange={handleInputChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      id="lastName"
                      name="lastName"
                      value={input.lastName}
                      onChange={handleInputChange}
                      label="Last Name"
                      fullWidth
                      autoComplete="given-name"
                    />
                  </Grid>
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
                      label="State/Province/Region"
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
                      // onClick={() => navigate("/Checkout/?step=3")}
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
      ) : (
        <EditAddressCard {...shippingInfo}   />
      )}
    </div>
  );
}
