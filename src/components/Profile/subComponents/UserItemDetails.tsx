import { divider, Divider, Skeleton } from "@nextui-org/react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import ProfileProductSection from "./ProfileProductSection";
import { antiqueData } from "../../../Data/antiques";
import { getCookie } from "../../../utils/cookies";
import { useLayoutEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "../../../Redux/store";
import toast, { Toaster, ToastPosition } from "react-hot-toast";

const toastSetting: {
  position: ToastPosition;
} = { position: "top-center" };

const successToast = (message: string): void => {
  toast.success(message, toastSetting);
};
const errorToast = (message: string): void => {
  toast.error(message, toastSetting);
};

const UserItemDetails = () => {
  const token = getCookie("token");
  const apiUrl = useSelector((state: RootState) => state.apiConfig.value);

  const username = getCookie("username");
  const email = getCookie("email");
  const [userDetail, setUserDetail] = useState({ address: "", address_code: "", phone: "", state: "" });
  const [receivedUserDetail, setReceivedUserDetail] = useState(-1);

  const getProfileData = async () => {
    try {
      const profileResponse = await axios.get(`${apiUrl}/users/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!profileResponse.data.success) {
        console.log(profileResponse.data);
        setReceivedUserDetail(0);
        errorToast("Failed To get Personal Information");
      } else {
        setReceivedUserDetail(1);
        setUserDetail((prev) => profileResponse.data.payload);
      }
    } catch (error) {
      console.log(error);
      setReceivedUserDetail(0);
      errorToast("Failed To get Personal Information");
    }
  };

  useLayoutEffect(() => {
    getProfileData();
  }, [apiUrl]);

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
      value: userDetail.phone ? userDetail.phone : "-----",
    },
    {
      name: "Address",
      value: userDetail.address ? userDetail.address : "-----",
    },
    {
      name: "State",
      value: userDetail.state ? userDetail.state : "-----",
    },
    {
      name: "Zip / Postal Code",
      value: userDetail.address_code ? userDetail.address_code : "-----",
    },
  ];

  return (
    <div className="flex flex-col gap-y-[2rem] grow lg:px-0 w-[95%] lg:w-[82%]">
      <div className="flex flex-col gap-1">
        <h1 className="font-bold  text-2xl">PERSONAL INFORMATION</h1>
        <Divider />
      </div>
      <div className="flex flex-row flex-wrap flex-grow gap-x-[2rem] gap-y-[1rem]">
        {receivedUserDetail === 1 ? (
          userData.map((data, index) => (
            <div className="flex flex-col" key={index}>
              <h1 className="font-bold text-xl">{data.name}</h1>
              <p className="text-default-500 text-md">{data.value}</p>
            </div>
          ))
        ) : receivedUserDetail === -1 ? (
          <div className="flex grow gap-[1.5rem] flex-wrap">
            {[1, 2, 3, 4].map((data) => (
              <div className="min-w-[10rem] flex flex-col grow gap-[0.5rem]">
                <Skeleton className="rounded-lg h-[2rem]" />
                <Skeleton className="rounded-lg h-[3rem]" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grow h-[10rem] flex justify-center items-center">
            <p className="text-default-500 font-bold text-2xl">Information Not Found</p>
          </div>
        )}
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
      <Toaster />
    </div>
  );
};

export default UserItemDetails;
