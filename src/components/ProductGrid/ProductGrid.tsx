import React from "react";
import GridCard from "./GridCard";
import p1 from "./assets/ant1.jpg";
import p2 from "./assets/ant2.jpg";
import p3 from "./assets/ant3.jpg";
import p4 from "./assets/ant4.jpg";
import p5 from "./assets/pexels-andreea-ch-1040893.jpg";
import p6 from "./assets/pexels-atul-mohan-18266462.jpg";
import p7 from "./assets/pexels-lina-kivaka-1841143.jpg";
import p8 from "./assets/pexels-vincent-rivaud-2227855.jpg";


const data = [
  {
    img: p1,
    title: "ANTIQUES",
    head: "UPTO 50% OFF",
  },
  {
    img: p2,
    title: "ANTIQUES",
    head: "START AT $199",
  },
  {
    img: p3,
    title: "ANTIQUES",
    head: "UPTO 60% OFF",
  },
  {
    img: p4,
    title: "ANTIQUES",
    head: "START AT $499",
  },
  {
    img: p5,
    title: "CARPETS",
    head: "UPTO 60% OFF",
  },
  {
    img: p6,
    title: "CARPETS",
    head: "START AT $399",
  },
  {
    img: p7,
    title: "CARPETS",
    head: "UPTO 40% OFF",
  },
  {
    img: p8,
    title: "CARPETS",
    head: "START AT $299",
  },
];
const ProductGrid = () => {
  return (
    <>
      <div className="p-[4rem] flex justify-center items-center mt-[2rem] mb-[0rem]">
        <h1 className="lg:text-3xl text-1xl  font-['Rye'] text-[#F31260] font-bold text-center">
          <span className="text-default-800 ">TOP RATED {" "}</span>
          CATEGORIES
        </h1>
      </div>
      <div className="lg:p-[2rem] p-[1rem] flex flex-wrap  lg:flex-row items-center justify-center gap-10 gap-y-[4rem]">
        {data.map((img: any, i: any) => (
          <GridCard key={i} {...img} />
        ))}
      </div>
    </>
  );
};

export default ProductGrid;
