// Dependencies
import { SiFacebook } from "react-icons/si";
import { TbBrandYoutubeFilled } from "react-icons/tb";
import { AiFillInstagram } from "react-icons/ai";
import {  FaTwitterSquare } from "react-icons/fa";

// Local Files
import "./Footer.css";

// const contactInfo = [
//   {
//     name: "Phone",
//     value: "+1 (845) 687-3270",
//     icon: <FaPhone />,
//   },
//   {
//     name: "Email",
//     value: "support@hmsfreedom.com",
//     icon: <MdEmail />,
//   },
//   {
//     name: "Address",
//     value: "Unit-544, McCabe Street, Port Charlotte, Florida, USA",
//     icon: <IoLocation />,
//   },
// ];

// const footerLinks = [
//   {
//     type: "Navigation",
//     data: [
//       { key: "home", value: "Home", link: "Home", state: {} },
//       { key: "services", value: "Services", link: "Services", state: {} },
//       { key: "about", value: "About", link: "About", state: {} },
//       { key: "contact", value: "Contact", link: "Contact", state: {} },
//       { key: "pricing", value: "Pricing", link: "Pricing", state: {} },
//     ],
//   },
//   {
//     type: "Quick Links",
//     data: [
//       { key: "webdev", value: "Website Development", link: "Services/Individual", state: { id: 0 } },
//       { key: "seo", value: "Search Engine Optimization", link: "Services/Individual", state: { id: 1 } },
//       { key: "socialmarketing", value: "Social Media Marketing", link: "Services/Individual", state: { id: 2 } },
//       { key: "webanalytics", value: "Web Analytics", link: "Services/Individual", state: { id: 3 } },
//       { key: "graphicdesign", value: "Graphics Design", link: "Services/Individual", state: { id: 4 } },
//     ],
//   },
// ];

const Footer = () => {
  return (
    <div className="bg-[#2A2A2A] flex flex-col items-center justify-between">
      <div className="lg:p-[5rem] p-[2rem] flex md:flex-row flex-col items-start justify-between lg:gap-[6rem] gap-[3rem] text-white border-b-1 border-white ">
        <div className="flex flex-col items-start">
          <h1 className="font-bold text-[1.5rem] ">HEXASHOP</h1>
          <h2 className="text-[1rem]">ONLINE SHOPPING</h2>
          <div className="py-[0.5rem]">
            <p>
              Lorem ipsum dolor sit amet, <br />
              consectetur adipiscing elit,{" "}
            </p>
          </div>
          <div className="py-[0.5rem]">
            <p>Hexagonal@gmail.com</p>
          </div>
          <div className="py-[0.5rem]">
            <p>010-120-4875</p>
          </div>
        </div>

        <div className="flex flex-col items-start">
          <h1 className="font-bold text-[1.2rem] ">Shoping & Categories</h1>

          <div className="py-[0.5rem]">
            <p>Kalins's Shoping</p>
          </div>
          <div className="py-[0.5rem]">
            <p>Antiques's Shoping</p>
          </div>
        </div>

        <div className="flex flex-col items-start">
          <h1 className="font-bold text-[1.2rem] ">Useful Links</h1>

          <div className="py-[0.5rem]">
            <p>Home Page</p>
          </div>
          <div className="py-[0.5rem]">
            <p>About Us</p>
          </div>
          <div className="py-[0.5rem]">
            <p>Help</p>
          </div>
          <div className="py-[0.5rem]">
            <p>Contact</p>
          </div>
        </div>

        <div className="flex flex-col items-start">
          <h1 className="font-bold text-[1.2rem] ">Help & Information</h1>

          <div className="py-[0.5rem]">
            <p>Help</p>
          </div>
          <div className="py-[0.5rem]">
            <p>FAQ'S</p>
          </div>
          <div className="py-[0.5rem]">
            <p>Shipping</p>
          </div>
          <div className="py-[0.5rem]">
            <p>Tracking ID</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center text-white p-[2rem]">
        <div>
          <p className="text-center">Copyright © 2024 HexaShop Co.Ltd. All Right Reserved.</p>
          <p className="text-center">Design:TMIS Solution</p>
          <p className="text-center">Distributed By: TMIS Solution</p>
        </div>
        <div className="flex flex-row items-center justify-center gap-[1rem] text-white p-[1rem] text-3xl">
          <SiFacebook />
          <TbBrandYoutubeFilled />
          <FaTwitterSquare />
          <AiFillInstagram />
        </div>
      </div>
    </div>
  );
};

export default Footer;
