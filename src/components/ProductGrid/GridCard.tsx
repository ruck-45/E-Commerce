import React from "react";
import p1 from "./assets/ant1.jpg"

type Card = {
  img: any;
  title: string;
  head: string;
};

const GridCard = (props:Card) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className=" flex items-center justify-center h-[24rem] w-[17rem] bg-gradient-to-r from-red-500 from-10% via-yellow-200 via-30% to-pink-500 to-90% ">
        <div className="h-[22rem] w-[16rem] p-[1rem] bg-center object-cover bg-white">
          <img src={props.img} className="h-full w-full object-cover" alt="" />
        </div>
      </div>
      <div className="p-[1rem] flex flex-col justify-center items-center">
        <h1 className="text-black font-bold text-1xl text-center">{props.title}</h1>
        <h1 className="text-black font-bold text-2xl">{props.head}</h1>
      </div>
    </div>
  );
};

export default GridCard;
