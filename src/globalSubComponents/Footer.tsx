// Dependencies
import { Divider, Image, Button, Listbox, ListboxItem } from "@nextui-org/react";
import { Link } from "react-router-dom";
import { SiFacebook } from "react-icons/si";
import { TbBrandYoutubeFilled } from "react-icons/tb";
import { FaSquareXTwitter, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";

// Local Files
import logo from "../globalAssets/logo.svg";

const contactInfo = [
  {
    name: "Phone",
    value: "+1 (844) 671-7473",
    icon: <FaPhone />,
  },
  {
    name: "Email",
    value: "support@charlsolutions.com",
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
      { key: "about", value: "About" },
      { key: "contact", value: "Contact" },
      { key: "faq", value: "FAQ" },
    ],
  },
  {
    type: "Quick Links",
    data: [
      { key: "investment", value: "Investment" },
      { key: "crypto", value: "Crypto" },
      { key: "options", value: "Options" },
      { key: "retirement", value: "Retirement" },
    ],
  },
];

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center p-[5rem] bg-[rgba(0,0,0,0.5)] gap-[2rem] text-white">
      <div className="flex gap-[4rem]">
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

        <div className="flex flex-col items-center justify-center gap-[1.2rem]">
          <div className="flex gap-[2rem]">
            {contactInfo.map((data, index) => (
              <div className="flex items-center  gap-[1rem]">
                <Button isIconOnly variant="solid" radius="full" className="w-[3rem] h-[3rem] text-[1.5rem]">
                  {data.icon}
                </Button>
                <div className="font-['poppins']">
                  <h1 className="text-[#F31260] font-bold text-[1.2rem]">{data.name}</h1>
                  <p className="text-sm">{data.value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="w-[100%]">
            <Divider className="dark" />
            <Divider className="dark" />
          </div>

          <div className="flex justify-between w-full">
            {footerLinks.map((ele, index) => (
              <div className="flex flex-col gap-[1rem]">
                <p className="font-['poppins'] text-[#F31260] font-bold text-[1.1rem]">{ele.type}</p>
                <Listbox items={ele.data} aria-label="navigation" className="dark">
                  {(item) => (
                    <ListboxItem key={item.key}>
                      <Link to={`../${item.value}`}>{item.value}</Link>
                    </ListboxItem>
                  )}
                </Listbox>
              </div>
            ))}

            <div className="flex flex-col gap-[1rem] max-w-[13rem]">
              <p className="font-['poppins'] text-[#F31260] font-bold text-[1.1rem]">Work Hours</p>
              <p className="text-justify">
                Trade and invest anytime, anywhere. Our platform is available 24/7 for seamless access to opportunities
                and trading services.
              </p>
            </div>
          </div>
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
