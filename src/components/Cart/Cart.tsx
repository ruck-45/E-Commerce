import CartItem from "./CartItem";
import { Button } from "@mui/material";
// import { Badge, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
// import { getCart } from "../../../Redux/Customers/Cart/Action";

const Cart = () => {
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  // const jwt = localStorage.getItem("jwt");
  // const {cart}=useSelector(store=>store);
  // console.log("cart ",cart)

  // useEffect(() => {
  //   dispatch(getCart(jwt));
  // }, [jwt]);
  return (
    <div className="p-[3rem]">
      <div className="lg:grid grid-cols-3 lg:px-16 relative">
        <div className="lg:col-span-2 lg:px-5 bg-white">
          <div className=" space-y-3">
            <CartItem />
            <CartItem />
          </div>
        </div>
        <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0 ">
          <div className="border p-5 bg-white shadow-lg rounded-md">
            <p className="font-bold opacity-60 pb-4">PRICE DETAILS</p>
            <hr />

            <div className="space-y-3 font-semibold">
              <div className="flex justify-between pt-3 text-black ">
                <span>Price (10 item)</span>
                <span>₹999</span>
              </div>
              <div className="flex justify-between">
                <span>Discount</span>
                <span className="text-green-700">-₹20%</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Charges</span>
                <span className="text-green-700">Free</span>
              </div>
              <hr />
              <div className="flex justify-between font-bold text-lg">
                <span>Total Amount</span>
                <span className="text-green-700">₹200</span>
              </div>
            </div>

            <Button
              onClick={() => navigate("/Checkout?step=2")}
              variant="contained"
              type="submit"
              sx={{ padding: ".8rem 2rem", marginTop: "2rem", width: "100%" }}
            >
              Check Out
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
