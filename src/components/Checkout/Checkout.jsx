import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AddDeliveryAddressForm from "./AddAddress";
import { useLocation, useNavigate } from "react-router-dom";
import OrderSummary from "./OrderSummary";
import Cart from "../Cart/Cart";
import { StepButton } from "@mui/material";

const steps = ["Cart", "Delivery Adress", "Order Summary", "Payment"];

export default function Checkout() {
  const [activeStep, setActiveStep] = React.useState(1);
  const [skipped, setSkipped] = React.useState(new Set());
  const [completed, setCompleted] = React.useState({});
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const step = queryParams.get("step");
  const navigate = useNavigate();

   const totalSteps = () => {
     return steps.length;
   };

   const completedSteps = () => {
     return Object.keys(completed).length;
   };

  

   const isLastStep = () => {
     return activeStep === totalSteps() - 1;
   };

   const allStepsCompleted = () => {
     return completedSteps() === totalSteps();
   };

  

  const handleNext = () => {
   const newActiveStep =
     isLastStep() && !allStepsCompleted()
       ? // It's the last step, but not all steps have been completed,
         // find the first step that has been completed
         steps.findIndex((step, i) => !(i in completed))
       : activeStep + 1;
   setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    navigate(`/Checkout?step=${step - 1}`);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };
   const handleComplete = () => {
     const newCompleted = completed;
     newCompleted[activeStep] = true;
     setCompleted(newCompleted);
     handleNext();
   };

   const handleReset = () => {
     setActiveStep(0);
     setCompleted({});
   };


  
 

  // const handleReset = () => {
  //   setActiveStep(0);
  // };

  const handlePayment = () => {
    console.log("handle payment");
  };

  return (
    <Box className="px-5 lg:px-32 " sx={{ width: "100%" }}>
      <Stepper activeStep={step}>
        {steps.map((label, index) => (
          <Step key={label} completed={completed[index]}>
            <StepButton color="inherit" onClick={handleStep(index)}>
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
      {allStepsCompleted() ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>All steps completed - you&apos;re finished</Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button color="inherit" disabled={step <= 1} onClick={handleBack} sx={{ mr: 1 }}>
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />
            {/* <Button onClick={handleNext} sx={{ mr: 1 }}>
              Next
            </Button> */}
          </Box>
          {/* <Typography sx={{ my: 6 }}>Title</Typography> */}

          <div className="my-5">
            {step == 1 ? <Cart /> : (step == 2 ? <AddDeliveryAddressForm handleNext={handleNext} /> :(step == 3 ? <OrderSummary/> : null ))}
           
            </div>

          {/* <AddDeliveryAddressForm handleNext={handleNext} /> */}
        </React.Fragment>
      )}
    </Box>
  );
}
