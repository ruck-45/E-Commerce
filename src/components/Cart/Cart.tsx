import "./Modal.css";
import CartItem from "./CartItem";
import { Button } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCookie } from "../../utils/cookies";
import { toast, Toaster } from "react-hot-toast";
import { RootState } from "../../Redux/store";
import { BsCartXFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import {
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import axios from "axios";

type Coupon = {
  code: string;
  coupon_id: string;
  amount: string;
  percent: string;
  minAmount: string;
};

const Cart = () => {
  const navigate = useNavigate();
  const [isApplicable, setApplicable] = useState(false);
  const [couponModalOpen, setCouponModalOpen] = useState(false);
  const { cart, totalPrice, totalQuantity, totalDiscountPrice } = useSelector(
    (state: RootState) => state.allCart
  );
  const [appliedCode, setAppliedCode] = useState('');
  const [error, setError] = useState("");
  const [cartLength, setCartLength] = useState(cart.length);
  const [coupons, setCoupons] = useState<Coupon[]>([]);
  const [totalAmount, setTotalAmount] = useState(totalDiscountPrice);
  const [code, setCode] = useState("");
  const apiUrl = useSelector((state: RootState) => state.apiConfig.value);
  const [shake, setShake] = useState(false);

  const getDiscountPercent = () => {
    if (totalPrice > 0) {
      return (((totalPrice - totalDiscountPrice) / totalPrice) * 100).toFixed(
        0
      );
    } else {
      return 0;
    }
  };

  useEffect(() => {
    getCoupons();
    setCartLength(cart.length);
  }, [cart]);

  useEffect(() => {
    if (error) {
      setShake(true);
      const shakeTimer = setTimeout(() => {
        setShake(false);
      }, 2000);
      return () => clearTimeout(shakeTimer);
    }
  }, [error]);

  const getCoupons = async () => {
    const result = await fetch(`${apiUrl}/coupan/allCoupan`);
    const data = await result.json();
    setCoupons(data?.payload?.payload);
  };

  const applyCoupon = async () => {
    const codeString = code.toLocaleUpperCase();
      console.log('code string: ' + codeString);
    const couponExists = coupons.some((coupon) => coupon.code === code || coupon.code ===codeString);

    if (!couponExists) {
      setError("Invalid coupon code");
      return;
    } else {
      toast.success("valid coupon code");
    }
    try {
      const matchedCoupon = coupons.filter((coupon) => coupon.code === code || coupon.code ===codeString);
      const response = await axios.get(`${apiUrl}/coupan/check`, {
        params: {
          coupon_id: matchedCoupon[0].coupon_id,
          user_id: getCookie("userId"),
        }
      });
      if(response.data.success){
        if(+matchedCoupon[0].minAmount < totalAmount){
          const discountAmount = Math.min(+matchedCoupon[0].amount, (totalDiscountPrice * +matchedCoupon[0].percent) / 100);
          setTotalAmount(totalDiscountPrice-discountAmount);
          setApplicable(true);
          setAppliedCode(matchedCoupon[0].code);
        }
        else{
          setCode('');
          toast.error(`The total amount should be more than ${matchedCoupon[0].minAmount}`);
          return;
        }
      }
    } catch (error: any) {
      toast.error(error.message);
    }
    setCouponModalOpen(false);
    setCode("");
  };

  useEffect(() => {
    setTotalAmount(totalDiscountPrice);
  }, [totalDiscountPrice]);

  const couponModal = () => {
    setCouponModalOpen(true);
  };

  return (
    <>
      {cartLength > 0 ? (
        <div className="text-sm float-right">
          Have a coupon?{" "}
          <span className="border cursor-pointer" onClick={couponModal}>
            Click here!!!
          </span>
        </div>
      ) : (
        ""
      )}

      <Modal
        size="sm"
        isOpen={couponModalOpen}
        onClose={() => setCouponModalOpen(false)}
        className={shake ? 'shake' : ''}
      >
        <ModalContent>
          {() => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Enter coupon code
              </ModalHeader>
              <ModalBody>
                <Input
                  placeholder="Enter coupon code"
                  value={code}
                  onChange={(e) => {
                    setCode(e.target.value);
                    setError("");
                  }}
                />
                {error && <p className="mx-8 text-sm text-red-500">*{error}</p>}
              </ModalBody>
              <ModalFooter className="text-center justify-center">
                <button
                  onClick={applyCoupon}
                  className="bg-blue-500 btn btn-sm hover:bg-green-700 text-white py-2 px-4 rounded"
                >
                  Apply Coupon
                </button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>

      <div className="px-[1rem] sm:px-[3rem] lg:px-0 py-[3rem]">
        {cart.length > 0 ? (
          <div className="lg:grid grid-cols-3 relative">
            <div className="lg:col-span-2 lg:px-5 bg-white">
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
                    <span className="opacity-30 line-through">
                      ${totalPrice}
                    </span>
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
                    <span className="text-green-700">
                      - {getDiscountPercent()}%
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Delivery Charges</span>
                    <span className="text-green-700">Free</span>
                  </div>
                  {isApplicable && (
                    <div className="flex justify-between">
                      <span>Coupon Applied : </span>
                      <span>"{appliedCode.toLocaleUpperCase()}"</span>
                    </div>
                  )}
                  <hr />
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total Amount</span>
                    <span className="text-green-700">${totalAmount}</span>
                  </div>
                </div>

                <Button
                  onClick={() => navigate("/Checkout", { state: { step: 2 } })}
                  variant="contained"
                  sx={{
                    padding: ".8rem 2rem",
                    marginTop: "2rem",
                    width: "100%",
                  }}
                >
                  Place Order
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <div className="h-[50vh] flex flex-col items-center gap-[2rem]">
            <BsCartXFill className="text-default-500 text-[10rem]" />
            <div className="text-center">
              <p className="text-default-600 text-[2rem] font-bold">
                Cart is Empty !!
              </p>
              <p className="text-default-500">
                Looks like you have no items in your shopping cart.
              </p>
              <Button
                color="primary"
                variant="contained"
                sx={{ marginTop: "2rem" }}
                onClick={() => navigate("/Shop")}
              >
                Shop now
              </Button>
            </div>
          </div>
        )}
      </div>
      <Toaster />
    </>
  );
};

export default Cart;
