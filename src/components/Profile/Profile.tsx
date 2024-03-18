import { Avatar, Button, Divider, Image } from "@nextui-org/react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import UserItemDetails from "./subComponents/UserItemDetails";
import { updateTab } from "../../Redux/Slices/curTabSlice";
import { useDispatch } from "react-redux";

const Profile = () => {
  const dispatch = useDispatch();
  dispatch(updateTab("Profile"));
  return (
    <div className="flex flex-col bg-white">
      <div className="h-[3rem] bg-[#130F40] px-[3rem] sm:px-[5rem] lg:px-[11rem] flex justify-start items-center text-white gap-x-[0.7rem]">
        <Link className="font-bold flex gap-2 cursor-pointer" to="/Home">
          <FaHome className="mt-[0.3rem]" />
          <p>Home</p>
        </Link>
        <p> {"»"} </p>
        <p>Profile</p>
      </div>
      <div
        className="flex h-[10rem] relative text-center justify-center items-center bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1495321308589-43affb814eee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <h1 className="text-4xl font-bold">Welcome !!</h1>
        <div className="absolute left-50 top-[11rem] lg:left-20 lg:top-20 flex">
          <Avatar
            className="w-[7rem] h-[7rem] lg:w-[10rem] lg:h-[10rem] grow"
            isBordered
            showFallback
            src="https://images.unsplash.com/photo-1502323777036-f29e3972d82f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
      </div>
      <div className="bg-white h-auto py-[2rem] px-[3rem] lg:px-[6.7rem] flex flex-col lg:flex-row lg:gap-x-[8rem] gap-y-[2rem] mt-[2rem] lg:mt-0 items-center lg:items-start">
        <Button className="mt-[5rem] font-bold text-default-500" variant="ghost" radius="none">
          Edit Profile
        </Button>
        <UserItemDetails />
      </div>
    </div>
  );
};

export default Profile;
