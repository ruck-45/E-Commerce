import React from "react";
import ExclusiveCard from "./SubComponent/ExclusiveCard";
import carpet from "./assets/Capture6666.jpg"
import ant from "./assets/antique.jpg"
import deco from "./assets/deco.jpg"
import pop from "./assets/popular.jpg"

const imgData = [
  {
    pic: carpet,
    title: "Carpet Special",
  },
  {
    pic: ant,
    title: "Antiques Special",
  },
  {
    pic: deco,
    title: "Decorative Special",
  },
  {
    pic: pop,
    title: "Popular Section",
  },
];
const Exclusive = () => {
  return (
    <>
    <div className="p-[2rem] flex justify-center mt-[2rem] mb-[-1rem]">
        <h1 className="lg:text-3xl text-1xl  font-['Rye'] text-[#F31260] font-bold">
          <span className="text-default-800 ">ONLINE </span>
          EXCLUSIVE
        </h1>
      </div>
    <div className="lg:p-[4rem] p-[1rem] flex flex-wrap gap-4 lg:flex-row items-center justify-center lg:gap-8 ">
      {imgData.map((img, i) => (
        <ExclusiveCard key={i} {...img} />
      ))}
    </div>
    </>
  );
};

export default Exclusive;
