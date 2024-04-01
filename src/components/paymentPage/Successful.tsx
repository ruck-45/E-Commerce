import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const Successful = () => {
  return (
    <div className="h-[90vh] flex items-center justify-center text-white bg-white ">
      <div className="w-80 h-[26rem] flex flex-col justify-center items-center shadow-[0_0_10px_black] relative rounded-lg ">
        <h1 className="bg-green-500 absolute top-0 w-full py-4 text-2xl text-center font-bold rounded-lg">
          Payment Successful
        </h1>
        <div className=" px-4 flex flex-col items-center justify-center space-y-2 text-black">
          <div className="text-center space-y-2  ">
            <h2 className="text-lg font-semibold">Welcome to the ShopNest</h2>
            <p className="text-left">Thanks For Shopping! Visit Again</p>
          </div>
          <AiFillCheckCircle className="text-green-500 text-5xl " />
          <div  className="py-[1rem] font-semibold">Your Order Id: 67hdfcfcs6548987</div>
        </div>
        <Link
          to="/"
          className="bg-green-500 hover:bg-green-600 transition-all ease-in-out duration-150 absolute bottom-0 w-full py-2 text-xl font-bold text-center rounded-bl-lg rounded-br-lg"
        >
          <button>Go to dashboard</button>
        </Link>
      </div>
    </div>
  );
};

export default Successful;
