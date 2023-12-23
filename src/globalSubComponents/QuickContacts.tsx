// Dependencies
import { Button } from "@nextui-org/react";
import { RiWhatsappFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { FaPhoneFlip } from "react-icons/fa6";

const QuickContacts = () => {
  return (
    <div className="fixed top-[50%] right-[1rem] z-[100] flex flex-col gap-[0.5rem] ">
      <Button isIconOnly color="danger">
        <FaPhoneFlip className="text-5xl text-white p-2 rounded-xl" />
      </Button>
      <Button isIconOnly color="success">
        <RiWhatsappFill className="text-5xl text-white p-2 rounded-xl" />
      </Button>
      <Button isIconOnly color="secondary">
        <MdEmail className="text-5xl text-white p-2 rounded-xl" />
      </Button>
    </div>
  );
};

export default QuickContacts;
