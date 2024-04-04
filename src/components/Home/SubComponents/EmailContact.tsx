import { Button, Input } from "@nextui-org/react";
import { GrSend } from "react-icons/gr";
import { SiFacebook } from "react-icons/si";
import { TbBrandYoutubeFilled } from "react-icons/tb";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitterSquare } from "react-icons/fa";

const EmailContact = () => {
  return (
    <div className="bg-white h-auto">
      <div className="flex md:flex-row flex-col items-center justify-evenly px-[2rem] lg:px-[3rem] py-[3rem] gap-[2rem]">
        <div className="flex flex-col items-start justify-between p-[1rem]">
          <div>
            <h1 className="text-3xl font-bold">Subscribe To Our Newsletter</h1>
            <p className="text-gray-600 py-[0.5rem] max-w-[32rem]">
              Stay informed and inspired! Subscribe to our newsletter for exclusive updates, special offers, and the
              latest trends in market
            </p>
            <div className="flex sm:flex-row flex-col items-center justify-between py-[1rem] gap-[1rem]">
              <Input
                variant="underlined"
                radius="none"
                size="sm"
                isRequired
                type="text"
                label="Name"
                className="max-w-xs "
              />
              <Input
                variant="underlined"
                radius="none"
                size="sm"
                isRequired
                type="email"
                label="Email"
                className="max-w-xs"
              />
              <Button size="lg" color="secondary" isIconOnly radius="none" variant="flat">
                <GrSend className="text-xl" />
              </Button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-[1rem] min-w-[22rem]">
          <div>
            <h3 className="font-bold text-lg">Office Location:</h3>
            <p className="text-md max-w-[15rem]">Sunny Isles Beach, FL 33160, United States</p>
          </div>

          <div>
            <h3 className="font-bold text-lg">Phone:</h3>
            <p className="text-md max-w-[15rem]">+1-888-678-1234</p>
          </div>
          <div>
            <h3 className="font-bold text-lg">Email:</h3>
            <p className="text-md max-w-[15rem]">support@shopnest.com</p>
          </div>

          <div>
            <h3 className="font-bold text-lg">Social Media:</h3>
            <p className=" max-w-[15rem] flex gap-[0.5rem] text-default-500 text-lg">
              <SiFacebook className="cursor-pointer hover:scale-110" />
              <TbBrandYoutubeFilled className="cursor-pointer hover:scale-110" />
              <AiFillInstagram className="cursor-pointer hover:scale-110" />
              <FaTwitterSquare className="cursor-pointer hover:scale-110" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailContact;
