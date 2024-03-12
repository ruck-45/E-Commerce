import { Button, Input } from "@nextui-org/react";
import React from "react";
import { GrSend } from "react-icons/gr";

const EmailContact = () => {
  return (
    <div className="bg-white h-auto">
      <div className="flex md:flex-row flex-col items-center justify-evenly p-[3rem] gap-[2rem]">
        <div className="flex flex-col items-start justify-between p-[1rem]">
          <div>
            <h1 className="text-3xl font-bold">
              By Subscribing To Our Newsletter You <br /> Can Get 30% Off
            </h1>
            <p className="text-gray-600 py-[0.5rem]">
              Details to details is what makes Hexashop different from the other themes.
            </p>
            <div className="flex sm:flex-row flex-col items-center justify-between py-[1rem] gap-[1rem]">
              <Input variant="bordered" radius="none" isRequired type="" label="Your Name" className="max-w-xs " />
              <Input variant="bordered" radius="none" isRequired type="" label="Your Email" className="max-w-xs" />
              <Button size="lg" color="secondary">
                <GrSend className="text-3xl" />
              </Button>
            </div>
          </div>
        </div>
        <div className="flex sm:flex-row flex-col items-start p-[1rem] gap-[2rem]">
          <div className="flex flex-col items-start justify-center gap-4">
            <div>
              <h3 className="text-1xl font-bold">Store Location:</h3>
              <p>Sunny Isles Beach, FL 33160, United States</p>
            </div>
            <div className="text-1xl font-bold">
              <h3>Work Hours:</h3>
              <p>07:30 AM - 9:30 PM Daily</p>
            </div>

            <div>
              <h3 className="text-1xl font-bold">Phone:</h3>
              <p>010-020-0340</p>
            </div>
          </div>
          <div className="flex flex-col items-start justify-center gap-4">
            <div>
              <h3 className="text-1xl font-bold">Email:</h3>
              <p>info@company.com</p>
            </div>

            <div>
              <h3 className="text-1xl font-bold">Office Location:</h3>
              <p>North Miami Beachs</p>
            </div>
            <div>
              <h3 className="text-1xl font-bold">Social Media:</h3>
              <p>Facebook, Instagram, Behance, Linkedin</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailContact;
