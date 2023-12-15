// Dependencies
import { Divider, Image } from "@nextui-org/react";
import { Link } from "react-router-dom";
import { SiFacebook } from "react-icons/si";
import { TbBrandYoutubeFilled } from "react-icons/tb";
import { FaSquareXTwitter } from "react-icons/fa6";

// Local Files
import logo from "../globalAssets/logo.svg";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center p-[5rem] bg-[rgba(0,0,0,0.5)] gap-[2rem] text-white">
      <div className="flex gap-[2rem]">
        <div className="max-w-[20rem] flex flex-col gap-[2rem]">
          <Image width={170} src={logo} alt="logo" radius="none" />
          <p className="text-justify">
            Your destination for versatile investment brokerage and trading services. Our platform offers a range of
            investment options backed by expert guidance. From novice investors to seasoned traders, we provide tailored
            solutions to help you navigate financial markets confidently and achieve your investment objectives with
            ease.
          </p>
          <div className="flex text-[1.8rem] gap-[1rem]">
            <SiFacebook className="mt-[0.4rem] cursor-pointer hover:scale-105" />
            <FaSquareXTwitter className="mt-[0.4rem] cursor-pointer hover:scale-105" />
            <TbBrandYoutubeFilled className="mt-[0.4rem] cursor-pointer hover:scale-105" />
          </div>
        </div>
        <div className="flex grow bg-[red]">

        </div>
      </div>
      <div className="w-[100%]">
        <Divider className="dark" />
        <Divider className="dark" />
        <Divider className="dark" />
      </div>

      <p>© 2023 Charl Solutions • All Rights Reserved</p>
    </div>
  );
};

export default Footer;
