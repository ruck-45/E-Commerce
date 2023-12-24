// Dependencies
import { Divider, Image, Button, Listbox, ListboxItem } from "@nextui-org/react";
import { Link } from "react-router-dom";
import { SiFacebook } from "react-icons/si";
import { TbBrandYoutubeFilled } from "react-icons/tb";
import { FaSquareXTwitter, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";

// Local Files
import "./Footer.css";
import logo from "../globalAssets/logo.svg";

const contactInfo = [
  {
    name: "Phone",
    value: "+1 (xxx) xxx-xxxx",
    icon: <FaPhone />,
  },
  {
    name: "Email",
    value: "support@kmachinez.com",
    icon: <MdEmail />,
  },
  {
    name: "Address",
    value: "London Eye, UK",
    icon: <IoLocation />,
  },
];

const footerLinks = [
  {
    type: "Navigation",
    data: [
      { key: "home", value: "Home" },
      { key: "services", value: "Services" },
      { key: "about", value: "About" },
      { key: "contact", value: "Contact" },
      { key: "faq", value: "FAQ" },
    ],
  },
  {
    type: "Quick Links",
    data: [
      { key: "investment", value: "Digital Marketing" },
      { key: "crypto", value: "Search Engine Optimization" },
      { key: "options", value: "Web Design & Development" },
      { key: "retirement", value: "Paid Advertising" },
      { key: "retirement", value: "Social Media Optimization" },
    ],
  },
];

const Footer = () => {
  return (
    <>
      <Button color="warning" className="w-full p-[3rem] font-['DM_Serif_Display'] text-[1rem] sm:text-[1.5rem]" radius="none">
        ❝ We Care for your Brand as Passionately as You Do. ❞
      </Button>
      <div className="flex flex-col justify-center items-center py-[6rem] gap-[2rem] text-white footer">
        <div className="flex gap-[4rem] upperFooter">
          <div className="max-w-[20rem] flex flex-col gap-[2rem] companySection">
            <Image width={170} src={logo} alt="logo" className="bg-white p-[1rem]"/>
            <p className="text-justify text-sm">
              At Kreative Machinez, we are a dynamic digital marketing agency dedicated to crafting innovative solutions
              for businesses seeking a powerful online presence. With a fusion of expertise and creativity, we
              specialize in delivering captivating digital experiences that elevate your brand. Our commitment is
              encapsulated in our motto : "Empowering Brands, Inspiring Connections"
            </p>
            <div className="flex text-[1.8rem] gap-[1rem]">
              <SiFacebook className="mt-[0.4rem] cursor-pointer hover:scale-105" />
              <FaSquareXTwitter className="mt-[0.4rem] cursor-pointer hover:scale-105" />
              <TbBrandYoutubeFilled className="mt-[0.4rem] cursor-pointer hover:scale-105" />
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-[1.2rem]">
            <div className="flex gap-[2rem] w-full justify-between contactInfo">
              {contactInfo.map((data, index) => (
                <div key={index} className="flex items-center  gap-[1rem]">
                  <Button isIconOnly variant="solid" radius="full" className="w-[3rem] h-[3rem] text-[1.5rem]">
                    {data.icon}
                  </Button>
                  <div className="font-['poppins']">
                    <h1 className="text-[#F5A524] font-bold text-[1.2rem]">{data.name}</h1>
                    <p className="text-sm">{data.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="w-[100%] upperDivider">
              <Divider className="dark" />
              <Divider className="dark" />
            </div>

            <div className="flex justify-between w-full footerLinks">
              {footerLinks.map((ele, index) => (
                <div key={index} className="flex flex-col gap-[1rem]">
                  <p className="font-['poppins'] text-[#F5A524] font-bold text-[1.1rem]">{ele.type}</p>
                  <Listbox items={ele.data} aria-label="navigation" className="dark" variant="light">
                    {(item) => (
                      <ListboxItem key={item.key} className="px-[0]">
                        <Link to={`../${item.value}`}>{item.value}</Link>
                      </ListboxItem>
                    )}
                  </Listbox>
                </div>
              ))}

              <div className="flex flex-col gap-[1rem] max-w-[13rem]">
                <p className="font-['poppins'] text-[#F5A524] font-bold text-[1.1rem]">Work Hours</p>
                <p className="text-justify text-sm">
                  Feel free to reach out to us during our working hours for all your digital marketing needs. We're here
                  to elevate your online presence and drive success for your business.
                </p>
                <ul className="text-sm">
                  <li>Mon - Fri : 09:00 - 18:00 (GMT)</li>
                  <li>Sat: 10:00 - 16:00 (GMT)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[100%]">
          <Divider className="dark" />
          <Divider className="dark" />
          <Divider className="dark" />
        </div>

        <p>© 2023 Kreative Machinez • All Rights Reserved</p>
      </div>
    </>
  );
};

export default Footer;
