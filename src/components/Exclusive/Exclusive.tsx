import React from "react";
import ExclusiveCard from "./SubComponent/ExclusiveCard";
import carpet from "./assets/Capture6666.jpg";
import ant from "./assets/antique.jpg";
import deco from "./assets/deco.jpg";
import pop from "./assets/popular.jpg";

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
    <div className="px-[3rem] md:px-[5rem] pb-[3rem] flex flex-wrap gap-4 items-center justify-center lg:gap-8 ">
      {imgData.map((img, i) => (
        <ExclusiveCard key={i} {...img} />
      ))}
    </div>
  );
};

export default Exclusive;
