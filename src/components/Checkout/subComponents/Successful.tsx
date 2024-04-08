import axios from "axios";
import { useEffect } from "react";
import { getCookie } from "../../../utils/cookies";
import "./confirmation.css";
import { useSelector } from "react-redux";
import { RootState } from "../../../Redux/store";
import { TiTick } from "react-icons/ti";
import { useNavigate } from "react-router-dom";
import { Image } from "@nextui-org/react";

const Successful = () => {
  const apiUrl = useSelector((state: RootState) => state.apiConfig.value);
  const navigate = useNavigate();

  const user_id = getCookie("userId");
  const token = getCookie("token");

  useEffect(() => {
    setTimeout(() => {
      navigate("/Profile");
    },2000);
  }, []);


  return (
    <div className="min-h-screen successbg flex flex-col items-center px-[3rem]">
      <div className="bg-[#A2E9C1] rounded-full p-[2rem] translate-y-[50%] shadow-xl">
        <div className="bg-[#17C964] rounded-full p-[1rem]">
          <TiTick className="text-white text-[3rem]" />
        </div>
      </div>
      <div className="max-w-lg w-full bg-white p-8 rounded-[2rem] shadow-md">
        <p className="mt-[4rem] text-green-600">Great !</p>
        <h1 className="text-3xl text-green-700 mb-4 font-bold">Order Confirmed 👍</h1>
        <p className="text-lg text-green-600 mb-8">
          Thank you for your order. Your order has been successfully registered.
          
        </p>
        <p className="text-lg text-green-600 mb-8">
        Taking you to the My Orders page
        </p>

        {/* <button
          className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
          onClick={() => navigate("/Shop")}
        >
          Continue Shopping
        </button> */}
      </div>
      {/* <div className="max-w-lg w-full bg-white p-8 rounded-[2rem] shadow-md mb-[5rem] border-t">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl text-green-700 mb-4 font-bold">Order Summary</h1>
            <div className="italic text-green-600 text-lg grow">
              <p>
                <span className="text-green-700 font-bold">Order Id : </span> 1234567890
              </p>
              <p>
                <span className="text-green-700 font-bold">Name : </span> Albert Einstein
              </p>
              <p>
                <span className="text-green-700 font-bold">Date : </span> 12th Jan 2023
              </p>
              <p>
                <span className="text-green-700 font-bold">Total Items : </span> 12
              </p>
              <p>
                <span className="text-green-700 font-bold">Amount : </span> $212
              </p>
            </div>
          </div>
          <Image
            width={150}
            isBlurred
            src="https://images.pexels.com/photos/4841372/pexels-photo-4841372.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </div>
      </div> */}
    </div>
  );
};

export default Successful;
