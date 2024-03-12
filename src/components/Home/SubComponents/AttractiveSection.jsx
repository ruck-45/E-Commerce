import { Button } from "@nextui-org/react";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const AttractiveSection = () => {
  return (
    <div className="bg-white h-auto ">
      <div className="flex flex-row items-center justify-center gap-[1rem]">
        <div className="flex flex-col items-start justify-center border-2 border-black h-[35rem] w-1/2">
          <div className="py-[1rem]">
            <h3 className="text-start text-[1.2rem] opacity-50 font-thin">CASUAL COLLECTION</h3>
          </div>
          <div className="py-[1rem]">
            <h1 className="text-start text-5xl font-bold ">
              Street <br />
              Wear
            </h1>
          </div>
          <div className=" opacity-50 py-[0.5rem] ">
            <p className="text-start">Lorem ipsum dolor sit amet <br />consectetur adipisicing elit <br /> Deserunt, nostrum.</p>
          </div>
          <Link className="flex flex-row justify-center items-center text-[1rem] font-medium py-[1rem]">
            Shop Collection
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AttractiveSection;
