import React from "react";
import p1 from "../assets/carpet.jpg"

type card ={
  pic:any;
  title:string;
}

const ExclusiveCard = (props:card) => {
  return (
    <div
      className="w-[17rem] h-[28rem] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-800 
  rounded-xl"
    >
      <div className="flex justify-center items-center p-[1rem]">
        <img src={props.pic} className="w-[16rem]" alt="" />
      </div>
      <div className=" flex items-center justify-center text-2xl font-['Rubik] text-white">
        <h1>{props.title}</h1>
      </div>
    </div>
  );
};

export default ExclusiveCard;
