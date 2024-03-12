import React from "react";
import { FaShippingFast } from "react-icons/fa";
import { FaMoneyBills } from "react-icons/fa6";
import { SiFsecure } from "react-icons/si";
import { GrSupport } from "react-icons/gr";

const content = [
  {
    title: "Free Shipping",
    des: "For all order above $99",
    icon: FaShippingFast,
  },
  {
    title: "Money Back Guarantee",
    des: "If good have Problems",
    icon: FaMoneyBills,
  },
  {
    title: "Online Support 24/7",
    des: "Dedicated support",
    icon: GrSupport,
  },
  {
    title: "Payment Secure",
    des: "100% secure payment",
    icon: SiFsecure,
  },
];

const Services = () => {
  return (
    <div className="flex lg:flex-row flex-wrap gap-[2rem] items-center justify-evenly bg-white h-auto p-[2rem] md:p-[4rem]">
      {content.map((data, index) => (
        <div key={index} className="flex flex-row items-end justify-center gap-[1rem]">
          <div className="text-4xl">
            {<data.icon />}
          </div>
          <div className="flex-col items-start justify-between ">
            <h1 className="text-1xl font-semibold py-[0.3rem]">{data.title}</h1>
            <p className="opacity-50">{data.des}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;
