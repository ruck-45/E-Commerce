// Dependencies
import { SiFacebook } from "react-icons/si";
import { TbBrandYoutubeFilled } from "react-icons/tb";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitterSquare, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Image } from "@nextui-org/react";
import logo from "../globalAssets/logo.svg";

// Local Files
import "./Footer.css";

const Footer = () => {
  return (
    <div className="bg-black flex flex-col sm:items-center justify-between">
      <div className="lg:p-[5rem] px-[2rem] py-[5rem] flex md:flex-row flex-col items-start justify-between lg:gap-[6rem] gap-[3rem] text-white border-b-1 border-white ">
        <div className="flex flex-col items-start gap-[0.5rem]">
          <Image width={150} src={logo} alt="logo" className="bg-white p-[1rem]" />
          <div>
            <h1 className="font-bold text-[1.5rem] ">SHOPNEST</h1>
            <p>ONLINE SHOPPING</p>
          </div>
          <p className="flex gap-[0.5rem] justify-center items-center">
            <MdEmail />
            <p>support@shopnest.com</p>
          </p>
          <p className="flex gap-[0.5rem] justify-center items-center">
            <FaPhoneAlt />
            <p>+1-888-678-1234</p>
          </p>
        </div>

        <div className="flex flex-col items-start gap-[1rem]">
          <h1 className="font-bold text-[1.2rem] ">Carpet Shoping</h1>

          <ul>
            <li className="list-disc list-inside cursor-pointer hover:translate-x-1 transition">Artisan's Rugs</li>
            <li className="list-disc list-inside cursor-pointer hover:translate-x-1 transition">Heritage Carpets</li>
            <li className="list-disc list-inside cursor-pointer hover:translate-x-1 transition">Modern Living Rugs</li>
            <li className="list-disc list-inside cursor-pointer hover:translate-x-1 transition">Rustic Charm Rugs</li>
            <li className="list-disc list-inside cursor-pointer hover:translate-x-1 transition">Costal Living Rugs</li>
            <li className="list-disc list-inside cursor-pointer hover:translate-x-1 transition">Elegant Living Rugs</li>
          </ul>
        </div>

        <div className="flex flex-col items-start gap-[1rem]">
          <h1 className="font-bold text-[1.2rem] ">Antique Shoping</h1>

          <ul>
            <li className="list-disc list-inside cursor-pointer hover:translate-x-1 transition">Vintage Elegance</li>
            <li className="list-disc list-inside cursor-pointer hover:translate-x-1 transition">Vintage Charm</li>
            <li className="list-disc list-inside cursor-pointer hover:translate-x-1 transition">Rustic Treasures</li>
            <li className="list-disc list-inside cursor-pointer hover:translate-x-1 transition">Artisanal Crafts</li>
            <li className="list-disc list-inside cursor-pointer hover:translate-x-1 transition">Antique Finds</li>
            <li className="list-disc list-inside cursor-pointer hover:translate-x-1 transition">Victorian Splendor</li>
            <li className="list-disc list-inside cursor-pointer hover:translate-x-1 transition">Rustic Artistry</li>
          </ul>
        </div>

        <div className="flex flex-col items-start gap-[1rem]">
          <h1 className="font-bold text-[1.2rem] ">Useful Links</h1>

          <ul>
            <li className="list-disc list-inside cursor-pointer hover:translate-x-1 transition">Home Page</li>
            <li className="list-disc list-inside cursor-pointer hover:translate-x-1 transition">About Us</li>
            <li className="list-disc list-inside cursor-pointer hover:translate-x-1 transition">Contact Us</li>
            <li className="list-disc list-inside cursor-pointer hover:translate-x-1 transition">Privacy Policy</li>
            <li className="list-disc list-inside cursor-pointer hover:translate-x-1 transition">Terms & Conditions</li>
            <li className="list-disc list-inside cursor-pointer hover:translate-x-1 transition">
              Refund & Cancellation
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center text-white p-[2rem]">
        <div className="flex gap-[0.5rem]">
          <p className="text-center">Copyright © 2024 ShopNest Co. Ltd. </p>
          <p>/</p>
          <p className="text-center"> All Right Reserved</p>
          <p>/</p>
          <p className="text-center">Designed By TMIS</p>
        </div>
        <div className="flex flex-row items-center justify-center gap-[1rem] text-white p-[1rem] text-2xl">
          <SiFacebook className="cursor-pointer hover:scale-110" />
          <TbBrandYoutubeFilled className="cursor-pointer hover:scale-110" />
          <FaTwitterSquare className="cursor-pointer hover:scale-110" />
          <AiFillInstagram className="cursor-pointer hover:scale-110" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
