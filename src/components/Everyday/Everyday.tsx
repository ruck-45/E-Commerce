import React from "react";
import EverydayCard from "./SubComponent/EverydayCard";
import anti from "./assets/antiques.jpg";
import carpet from "./assets/carpet.jpg";
import deco from "./assets/deco.jpg";
import pop from "./assets/pexels-ksenia-chernaya-3965513.jpg";

const data = [
  {
    img: carpet,
    off: "50% off",
    product: "On Carpet",
  },
  {
    img: anti,
    off: "40% off",
    product: "On Antiques",
  },
  {
    img: deco,
    off: "45% off",
    product: "On Decorative",
  },
  {
    img: pop,
    off: "50-60% off",
    product: "On Popular Items",
  },
];
const Everyday = () => {
  return (
    <div className="lg:p-[4rem] p-[1rem] flex flex-wrap  lg:flex-row items-center justify-center gap-10 gap-y-[6rem]">
      {data.map((item: any, i: any) => (
        <EverydayCard key={i} {...item} />
      ))}
    </div>
  );
};

export default Everyday;
