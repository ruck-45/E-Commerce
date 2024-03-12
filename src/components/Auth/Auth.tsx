// Dependencies
import { useDispatch } from "react-redux";
import { Button, Input } from "@nextui-org/react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { updateTab } from "../../Redux/Slices/curTabSlice";

// Local Files

const Auth = () => {
  const dispatch = useDispatch();
  dispatch(updateTab("Auth"));

  return (
    <div className="h-screen flex flex-row items-center justify-start bg-white">
      <div className="lg:inline-block hidden">
        <img
          className="w-[40rem]"
          src="https://images.unsplash.com/photo-1534889156217-d643df14f14a?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
      <div className="flex flex-col justify-between items-center sm:w-[50rem] w-auto">
        <form action="">
          <Link
            to="../"
            className="mb-[2rem] flex items-center gap-[0.5rem] hover:gap-[1rem] duration-100 text-[#006FEE] px-[1rem]"
          >
            <FaArrowRightLong />
            <p>Home</p>
          </Link>
          <div className="flex gap-4 text-2xl font-semibold welcomeText py-[2rem] px-[1rem]">
            <h1>Welcome to ShopNest </h1>
            <p>👋</p>
          </div>
          <p className="text-1xl mb-2 py-[0.5rem] px-[1rem]">Please Login your account and start the adventure !</p>
          <div className="py-[0.5rem] w-auto p-[1rem]">
            <Input
              radius="none"
              type="text"
              label="Username"
              maxLength={50}
              labelPlacement="outside"
              placeholder="Enter your username"
              className="py-[1rem]"
            />
            <Input
              radius="none"
              type="email"
              label="Email"
              maxLength={100}
              labelPlacement="outside"
              placeholder="Enter your email"
              className="py-[1rem]"
            />
            <Button className="mt-2 mb-2 py-[1rem]" color="primary" variant="shadow" type="submit">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Auth;
