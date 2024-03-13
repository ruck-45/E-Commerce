import { Image } from "@nextui-org/react";
import React from "react";

const Profile = () => {
  return (
    <div className="flex flex-col bg-white">
      <div className="flex h-[10rem] bg-black/80 relative text-center justify-center items-center">
        <h1 className="text-4xl font-bold text-white">Hello User !</h1>
        <div className="absolute left-20 top-20">
          <Image
            width={250}
            radius="full"
            src="https://images.unsplash.com/photo-1463453091185-61582044d556?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
      </div>
      <div className="bg-white h-screen"></div>
    </div>
  );
};

export default Profile;
