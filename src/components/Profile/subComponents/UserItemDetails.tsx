import { Divider } from "@nextui-org/react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import ProfileProductSection from "./ProfileProductSection";
import { getCookie } from "../../../utils/cookies";
import { useSelector } from "react-redux";
import { RootState } from "../../../Redux/store";
import { useLayoutEffect, useState } from "react";
import axios from "axios";
import ProfileProductSkeleton from "./ProfileProductSkeleton";

const UserItemDetails = () => {
  const username = getCookie("username");
  const email = getCookie("email");
  const shippingInfo = useSelector((state: RootState) => state.shippingInfo);
  const apiUrl = useSelector((state: RootState) => state.apiConfig.value);
  const [receivedRecommendedData, setReceivedRecommendedData] = useState(-1);
  const [recommendedData, setRecommendedData] = useState([]);

  const userData = [
    {
      name: "Username",
      value: username,
    },
    {
      name: "Email",
      value: email,
    },
    {
      name: "Contact",
      value: shippingInfo.phoneNumber !== "" ? shippingInfo.phoneNumber : "-----",
    },
    {
      name: "Address",
      value: shippingInfo.address !== "" ? shippingInfo.address : "-----",
    },
    {
      name: "City",
      value: shippingInfo.city !== "" ? shippingInfo.city : "-----",
    },
    {
      name: "State",
      value: shippingInfo.state !== "" ? shippingInfo.state : "-----",
    },
    {
      name: "Zip / Postal Code",
      value: shippingInfo.zip !== "" ? shippingInfo.zip : "-----",
    },
  ];

  const getRecommendedData = async () => {
    try {
      const response = await axios.get(`${apiUrl}/items/getItems?start=0&end=10&filter=popular`);

      if (!response.data.success) {
        console.log(response.data);
        setReceivedRecommendedData(0);
      } else {
        setRecommendedData(response.data.payload.result);
        if (response.data.payload.result.length > 0) {
          setReceivedRecommendedData(1);
        } else {
          setReceivedRecommendedData(0);
        }
      }
    } catch (error) {
      console.log(error);
      setReceivedRecommendedData(0);
    }
  };

  useLayoutEffect(() => {
    getRecommendedData();
  }, [apiUrl]);

  return (
    <div className="flex flex-col gap-y-[2rem] grow lg:px-0 w-[95%] lg:w-[82%] ">
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
        {/* <ProfileProductSection data={antiqueData} /> */}
        <div className="relative border p-5 h-[17rem] flex justify-center items-center">
          <p className="font-bold text-default-500 text-xl">No Items Found</p>
        </div>
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
        {/* <ProfileProductSection data={antiqueData} /> */}
        <div className="relative border p-5 h-[17rem] flex justify-center items-center">
          <p className="font-bold text-default-500 text-xl">No Items Found</p>
        </div>
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
        {receivedRecommendedData === 1 ? (
          <ProfileProductSection data={recommendedData} />
        ) : receivedRecommendedData === -1 ? (
          <ProfileProductSkeleton data={[1, 2, 3, 4]} />
        ) : (
          <div className="relative border p-5 h-[20rem] flex justify-center items-center">
            <p className="font-bold text-default-500 text-xl">No Items Found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserItemDetails;
