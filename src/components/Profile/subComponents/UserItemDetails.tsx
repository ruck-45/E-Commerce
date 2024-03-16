import { Divider } from "@nextui-org/react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import ProfileProductSection from "./ProfileProductSection";
import { antiqueData } from "../../../Data/antiques";

const userData = [
  {
    name: "Username",
    value: "Sarah Troy",
  },
  {
    name: "Email",
    value: "saragtroy123@gmail.com",
  },
  {
    name: "Contact",
    value: "+1-888-123-1234",
  },
  {
    name: "Address",
    value: "Sunny Isles Beach, FL 33160, United States",
  },
];

const UserItemDetails = () => {
  return (
    <div className="flex flex-col gap-y-[2rem] grow lg:px-0 w-[95%] lg:w-[82%]">
      <div className="flex flex-col gap-1">
        <h1 className="font-bold  text-2xl">PERSONAL INFORMATION</h1>
        <Divider />
      </div>
      <div className="flex flex-row flex-wrap flex-grow gap-x-[2rem] gap-y-[1rem]">
        {userData.map((data, index) => (
          <div className="flex flex-col" key={index}>
            <h1 className="font-bold text-xl">{data.name}</h1>
            <p className="text-default-500 text-md">{data.value}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex justify-between">
          <h1 className="font-bold  text-2xl">YOUR ORDERS</h1>
          <Link
            to="/"
            className="flex flex-row justify-start items-center text-[1rem] font-medium gap-[0.5rem] hover:gap-[1rem] transition-all"
          >
            <p>View All</p>
            <FaArrowRight />
          </Link>
        </div>
        <Divider />
        <ProfileProductSection data={antiqueData} />
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex justify-between">
          <h1 className="font-bold  text-2xl">YOUR SHOPPING LIST</h1>
          <Link
            to="/"
            className="flex flex-row justify-start items-center text-[1rem] font-medium gap-[0.5rem] hover:gap-[1rem] transition-all"
          >
            <p>View All</p>
            <FaArrowRight />
          </Link>
        </div>
        <Divider />
        <ProfileProductSection data={antiqueData} />
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex justify-between">
          <h1 className="font-bold  text-2xl">FREQUENTLY PURCHASED</h1>
          <Link
            to="/"
            className="flex flex-row justify-start items-center text-[1rem] font-medium gap-[0.5rem] hover:gap-[1rem] transition-all"
          >
            <p>View All</p>
            <FaArrowRight />
          </Link>
        </div>
        <Divider />
        <ProfileProductSection data={antiqueData} />
      </div>
    </div>
  );
};

export default UserItemDetails;
