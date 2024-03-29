import { useNavigate } from "react-router-dom";
import CartItem from "../Cart/CartItem";
import AddressCard from "./subComponents/AdreessCard";
import { Button } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/store";

const OrderSummary = () => {
  const navigate = useNavigate();

  const { cart, totalPrice, totalQuantity, totalDiscountPrice } = useSelector((state: RootState) => state.allCart);

  const getDiscountPercent = () => {
    if (totalPrice > 0) {
      return (((totalPrice - totalDiscountPrice) / totalPrice) * 100).toFixed(0);
    } else {
      return 0;
    }
  };

  return (
    <div className="space-y-5">
      <div className="p-5 shadow-lg rounded-md border ">
        <AddressCard />
      </div>
      <div className="lg:grid grid-cols-3 relative justify-between">
        <div className="lg:col-span-2 lg:pr-5 bg-white">
          <div className=" space-y-3">
            {cart.map((data: any) => (
              <CartItem {...data} />
            ))}
          </div>
        </div>
        <div className="sticky top-0 lg:h-[100vh] mt-5 lg:mt-0 ">
          <div className="border p-5 bg-white shadow-lg rounded-md">
            <p className="font-bold opacity-60 pb-4">PRICE DETAILS</p>
            <hr />

            <div className="space-y-3 font-semibold">
              <div className="flex justify-between pt-3 text-black ">
                <span>Total Price</span>
                <span className="opacity-30 line-through">${totalPrice}</span>
              </div>
              <div className="flex justify-between text-black ">
                <span>Discount Price</span>
                <span>${totalDiscountPrice}</span>
              </div>
              <div className="flex justify-between text-black ">
                <span>Total Quantity</span>
                <span>{totalQuantity}</span>
              </div>
              <div className="flex justify-between">
                <span>Discount</span>
                <span className="text-green-700">- {getDiscountPercent()}%</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Charges</span>
                <span className="text-green-700">Free</span>
              </div>
              <hr />
              <div className="flex justify-between font-bold text-lg">
                <span>Total Amount</span>
                <span className="text-green-700">${totalDiscountPrice}</span>
              </div>
            </div>

            <Button variant="contained" sx={{ padding: ".8rem 2rem", marginTop: "2rem", width: "100%" }}>
              Make Payment
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
