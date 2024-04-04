import React from "react";
import { FaShippingFast } from "react-icons/fa";
import { FaMoneyBills } from "react-icons/fa6";
import { SiFsecure } from "react-icons/si";
import { GrSupport } from "react-icons/gr";
import { TbBrandOauth } from "react-icons/tb";

const content = [
  {
    title: "Authenticate",
    des: "Product",
    icon: TbBrandOauth,
  },

  {
    title: "Free",
    des: "Shipping*",
    icon: FaShippingFast,
  },
  {
    title: "Money",
    des: "Back Guarantee",
    icon: FaMoneyBills,
  },
  {
    title: "Online",
    des: "Support 24/7",
    icon: GrSupport,
  },
  {
    title: "Payment",
    des: "Secure",
    icon: SiFsecure,
  },
];

const Services = () => {
  return (
    <div className="flex lg:flex-row flex-wrap gap-[2rem] items-center justify-evenly bg-white h-auto p-[2rem] md:p-[4rem]">
      {content.map((data, index) => (
        <div key={index} className="flex flex-col items-center justify-center gap-[1rem]">
          <data.icon className="text-6xl" />
          <div className="flex flex-col items-center justify-center  ">
            <h1 className="text-3xl font-semibold">{data.title}</h1>
            <p className="text-3xl font-semibold">{data.des}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;
