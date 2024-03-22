import { Button } from "@mui/material";
import { deleteShippingInfo } from "../../Redux/Slices/CartSlice";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

type CardProps = {
  address: String;
  city: String;
  country: String;
  firstName: String;
  lastName: String;
  phoneNumber: number;
  state: String;
  zip: number;
};



const EditAddressCard = (props: CardProps) => {
  const dispatch = useDispatch();
   const { state } = useLocation();
   const navigate = useNavigate()

   console.log("state is after", state);
  return (
    <div>
      <h1 className="text-lg font-semibold py-4">Delivery Address</h1>
      <div className="space-y-3">
        <p className="font-semibold">
          {" "}
          Name:
          {props.firstName} {props.lastName}
        </p>

        <p>Address: {props.address}</p>

        <div className="space-y-1">
          <p className="font-semibold">Pincode:{props.zip}</p>
          <p>PhoneNumber: {props.phoneNumber}</p>
        </div>

        <div className="py-[1rem] flex flex-row items-center justify-start gap-[2rem]">
          <Button
            onClick={() => dispatch(deleteShippingInfo())}
            sx={{ padding: ".9rem 1.5rem" }}
            size="large"
            type="submit"
            variant="contained"
            color="primary"
          >
            Edit Address
          </Button>
          <Button
            onClick={() => navigate("/Checkout/?step=3", { state: { ...state } })}
            sx={{ padding: ".9rem 1.5rem" }}
            size="large"
            type="submit"
            variant="contained"
            color="primary"
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EditAddressCard;
