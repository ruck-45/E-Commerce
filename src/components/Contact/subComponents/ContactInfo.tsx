// Dependencies
import { Button } from "@nextui-org/react";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const ContactInfo = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="flex flex-col p-[5rem] bg-white md:w-[50%]">
        <h1 className="font-['lilita_one'] text-[2rem]">Call Us</h1>
        <div className="flex gap-[0.5rem] items-center">
          <Button isIconOnly variant="flat" radius="full" size="sm">
            <FaPhone />
          </Button>
          <p>+1 (844) 671-7473</p>
        </div>
        <p>Call us today for expert investment guidance and personalized assistance!</p>
      </div>
      <div className="flex flex-col p-[5rem] bg-black text-white md:w-[50%]">
        <h1 className="font-['lilita_one'] text-[2rem]">Email Us</h1>
        <div className="flex gap-[0.5rem] items-center">
          <Button isIconOnly variant="solid" radius="full" size="sm">
            <MdEmail />
          </Button>
          <p>support@charlsolutions.com</p>
        </div>

        <p>Drop us an email to explore your investment opportunities with our expert team!</p>
      </div>
    </div>
  );
};

export default ContactInfo;
