import React from "react";

type card = {
  img: any
  off: string;
  product:string;
};

const EverydayCard = (props:card) => {
  return (
    <div className=" flex items-center justify-center h-[20rem] w-[15rem] bg-gradient-to-r from-pink-600 to-blue-300">
      <div className=" h-[24rem] w-[15rem] px-[1rem] mb-[4rem]">
        <img src={props.img} className="object-cover" alt="" />
        <h1 className="text-center text-[1.2rem] py-[0.5rem] text-white">
          <span className="text-[1.4rem] font-bold">{props.off}{" "}</span> <br />
          {props.product}
        </h1>
      </div>
    </div>
  );
};

export default EverydayCard;
