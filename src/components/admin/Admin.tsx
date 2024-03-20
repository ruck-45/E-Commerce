import React from "react";
import { Avatar, Button, Popover, PopoverContent, PopoverTrigger } from "@nextui-org/react";
import { Link } from "react-router-dom";
import { FaCloudUploadAlt, FaHome } from "react-icons/fa";
import { updateTab } from "../../Redux/Slices/curTabSlice";
import { getCookie } from "../../utils/cookies";
import { RootState } from "../../Redux/store";
import { TiTick } from "react-icons/ti";
import Create from "./SubComponent/Create";
import Allorders from "./SubComponent/Allorders";

const link = ["Create Item", "All Orders", "All Inventory"];

const Admin = () => {
  return (
    <div className="flex flex-col bg-white">
      <div className="h-[3rem] bg-[#130F40] px-[3rem] sm:px-[5rem] lg:px-[11rem] flex justify-start items-center text-white gap-x-[0.7rem]">
        <Link className="font-bold flex gap-2 cursor-pointer" to="/Home">
          <FaHome className="mt-[0.3rem]" />
          <p>Home</p>
        </Link>
        <p> {"»"} </p>
        <p>Admin</p>
      </div>

      <div className="bg-white h-auto py-[2rem] px-[3rem] lg:px-[5rem] flex flex-col lg:flex-row lg:gap-x-[8rem] gap-y-[2rem] mt-[2rem] lg:mt-0 items-center lg:items-start ">
        <div className="flex lg:flex-col flex-wrap justify-between items-start lg:gap-2 gap-[1rem] lg:p-[2rem]  ">
          {link.map((data) => (
            <button className="text-1xl font-semibold text-gray-800 border-b-2 py-[0.3rem] ">{data}</button>
          ))}
        </div>

        <Create/>
        {/* <Allorders /> */}
      </div>
    </div>
  );
};

export default Admin;
