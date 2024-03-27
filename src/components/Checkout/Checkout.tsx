import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import Button from "@mui/material/Button";
import AddDeliveryAddressForm from "./AddAddress";
import { useLocation, useNavigate } from "react-router-dom";
import OrderSummary from "./OrderSummary";
import Cart from "../Cart/Cart";
import { StepButton } from "@mui/material";
import { useDispatch } from "react-redux";
import { updateTab } from "../../Redux/Slices/curTabSlice";

const steps = ["Cart", "Delivery Adress", "Order Summary", "Payment"];

export default function Checkout() {
  const dispatch = useDispatch();
  dispatch(updateTab("Checkout"));

  const navigate = useNavigate();
  const location = useLocation();
  const step = location.state ? location.state.step : 1;

  return (
    <div className="py-[3rem]">
      <Box className="px-5 lg:px-32 " sx={{ width: "100%" }}>
        <Stepper activeStep={step - 1} className="flex flex-wrap gap-y-3">
          {steps.map((label, index) => (
            <Step key={label} completed={index < step - 1}>
              <StepButton color="inherit">{label}</StepButton>
            </Step>
          ))}
        </Stepper>
        <React.Fragment>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="error"
              disabled={step <= 1}
              onClick={() => navigate("/Checkout", { state: { step: step - 1 } })}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />
          </Box>

          <div className="my-5">
            {step === 1 ? (
              <Cart />
            ) : step === 2 ? (
              <AddDeliveryAddressForm />
            ) : step === 3 ? (
              <OrderSummary />
            ) : null}
          </div>
        </React.Fragment>
      </Box>
    </div>
  );
}
