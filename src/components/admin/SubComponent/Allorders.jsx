import React from "react";
const title = ["Image", "Title", "Price", "id", "Status"];

const Allorders = () => {
  return (
    <div className="flex flex-col items-center justify-center h-auto p-[1rem] lg:p-[0rem]">
      <div className="flex items-center justify-center ">
        <h1 className="text-2xl font-bold text-blue-800 border-b-1 border-blue-800">All Orders</h1>
      </div>
      <div className="flex flex-row items-end justify-evenly gap-[3rem] md:gap-[6rem] lg:gap-[10rem] h-[5rem] p-[1rem] border-b-2 border-black">
        {title.map((data) => (
          <h1 className="text-[1.2rem] font-bold">{data}</h1>
        ))}
      </div>
      {[1, 1, 1, 1].map((ele) => (
        <div className="flex flex-row items-center justify-evenly lg:gap-[5.5rem] md:gap-[2rem] gap-[1rem] h-[5rem] p-[1rem] mt-[1rem] border-b-1 border-black ">
          <img
            className="w-[4rem]"
            src="https://images-cdn.ubuy.co.in/635c56ffbd38766d0c1eacbb-sultan-medallion-red-oriental-area-rug-9.jpg"
            alt=""
          />
          <h1 className="text-gray-600">Traditional Oriental Area Rug</h1>
          <h1 className="text-gray-600">4999</h1>
          <h1 className="text-gray-600">hhhsdhh767873637</h1>
          <h1 className="text-gray-600">Completed</h1>
        </div>
      ))}
    </div>
  );
};

export default Allorders;
