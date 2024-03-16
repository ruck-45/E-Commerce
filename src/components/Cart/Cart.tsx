import CartItem from "./CartItem";
import { Button } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCartTotal } from "../../Redux/Slices/CartSlice";


const Cart = () => {
  
  const navigate = useNavigate();
  const { cart, totalPrice, totalQuantity } = useSelector((state: any) => state?.allCart);
  console.log(cart)

  const dispatch = useDispatch()

  useEffect(() => {
   dispatch(getCartTotal())
  },[cart])
 
  return (
    <div className="p-[3rem]">
      <div className="lg:grid grid-cols-3 lg:px-16 relative">
        <div className="lg:col-span-2 lg:px-5 bg-white">
          <div className=" space-y-3">
            {cart.map((data: any) => (
              <CartItem {...data} />
            ))}
          </div>
        </div>
        <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0 ">
          <div className="border p-5 bg-white shadow-lg rounded-md">
            <p className="font-bold opacity-60 pb-4">PRICE DETAILS</p>
            <hr />

            <div className="space-y-3 font-semibold">
              <div className="flex justify-between pt-3 text-black ">
                <span>Total Price</span>
                <span>{totalPrice}</span>
              </div>
              <div className="flex justify-between pt-3 text-black ">
                <span>Total Quantity</span>
                <span>{totalQuantity}</span>
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
