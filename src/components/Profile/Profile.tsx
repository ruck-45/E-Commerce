import { Button, Divider, Image } from "@nextui-org/react";
import Orders from "./subComponents/Orders";

const Profile = () => {
  return (
    <div className="flex flex-col bg-white">
      <div className="flex h-[10rem] bg-black/80 relative text-center justify-center items-center">
        <h1 className="text-4xl font-bold text-white">Welcome</h1>
        <div className="absolute left-20 top-20">
          <Image
            width={250}
            radius="full"
            src="https://images.unsplash.com/photo-1463453091185-61582044d556?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
      </div>
      <div className="bg-white h-auto py-[2rem] px-[8rem] flex flex-row gap-x-[8rem]">
        <div className="flex flex-col gap-2 mt-[6rem]">
          <Button className="mt-[2rem]" variant="ghost" radius="none">
            Edit Profile
          </Button>
        </div>
        <div className="flex flex-col gap-y-[2rem] grow">
          <div className="flex flex-col gap-1">
            <h1 className="font-bold text-black text-2xl">PERSONAL INFORMATION</h1>
            <Divider />
          </div>
          <div className="flex flex-row flex-wrap justify-evenly flex-grow gap-x-[2rem]">
            <div className="flex flex-col">
              <h1 className="text-black font-bold text-xl">NAME</h1>
              <p className="text-default-500 text-md">username</p>
            </div>
            <div className="flex flex-col">
              <h1 className="text-black font-bold text-xl">EMAIL</h1>
              <p className="text-default-500 text-md">user@gmail.com</p>
            </div>
            <div className="flex flex-col">
              <h1 className="text-black font-bold text-xl">CONTACT</h1>
              <p className="text-default-500 text-md">778238729873</p>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="font-bold text-black text-2xl">ORDERS</h1>
            <Divider />
            <div className="mt-5">
              <Orders />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="font-bold text-black text-2xl">YOUR SHOPPING LIST</h1>
            <Divider />
            <div className="mt-5">
              <Orders />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="font-bold text-black text-2xl">FREQUENTLY PURCHASED</h1>
            <Divider />
            <div className="mt-5">
              <Orders />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
