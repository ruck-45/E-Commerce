import { Button } from "@nextui-org/react";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Attractive.css";

const AttractiveSection = () => {
  return (
    <div className="bg-white h-auto ">
      <div className="flex flex-row items-center justify-center gap-[1rem] p-[3rem]">
        <div className=" firstSection  firstSection flex flex-col items-end justify-center rounded-2xl h-[33rem] w-[50rem] ">
          <div className="mr-[5rem]">
            <div className="py-[1rem]">
              <h3 className="text-start text-[1.2rem]  font-thin">CASUAL COLLECTION</h3>
            </div>
            <div className="py-[1rem]">
              <h1 className="text-start text-5xl font-bold ">
                Street <br />
                Wear
              </h1>
            </div>
            <div className="  py-[0.5rem] ">
              <p className="text-start">
                Lorem ipsum dolor sit amet <br />
                consectetur adipisicing elit <br /> Deserunt, nostrum.
              </p>
            </div>
            <Link className="flex flex-row justify-start items-start text-[1rem] font-medium py-[1rem]">
              Shop Collection
              <FaArrowRight />
            </Link>
          </div>
        </div>
        <div className="flex flex-col justify-center items-start gap-4">
          <div className=" secondSection flex flex-col justify-between items-start h-[16rem] w-[30rem] rounded-2xl ">
            <div className="ml-[3rem] p-[1rem]">
              <div className="py-[0.5rem]">
                <h3 className="text-start text-[1.2rem]  font-thin">CASUAL COLLECTION</h3>
              </div>
              <div className="py-[0.5rem]">
                <h1 className="text-start text-5xl font-bold ">
                  Street <br />
                  Wear
                </h1>
              </div>
              <Link className="flex flex-row justify-start items-start text-[1rem] font-medium py-[0.5rem]">
                Shop Collection
                <FaArrowRight />
              </Link>
            </div>
          </div>
          <div className="thirdSection flex flex-col justify-between items-start h-[16rem] w-[30rem]  rounded-2xl">
            <div className="ml-[3rem] p-[1rem]">
              <div className="py-[0.5rem]">
                <h3 className="text-start text-[1.2rem] font-thin">CASUAL COLLECTION</h3>
              </div>
              <div className="py-[0.5rem]">
                <h1 className="text-start text-5xl font-bold ">
                  Street <br />
                  Wear
                </h1>
              </div>
              <Link className="flex flex-row justify-start items-start text-[1rem] font-medium py-[0.5rem]">
                Shop Collection
                <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttractiveSection;
