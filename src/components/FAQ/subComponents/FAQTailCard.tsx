// Dependencies
import { Button } from "@nextui-org/react";
import { FaArrowCircleRight } from "react-icons/fa";


const FAQTailCard = () => {
  return (
    <div
      className="h-[30rem] bg-no-repeat bg-bottom bg-cover flex flex-col justify-center items-center gap-[1rem]"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.5) 20%,rgba(0,0,0,0.4)),url('https://images.unsplash.com/photo-1606857521015-7f9fcf423740?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      <div className="flex flex-col items-center">
        <p className="text-white font-['lilita_one'] text-[3rem] leading-[3rem] text-center">
          Growing Your <span className="text-[#f31260]">Fortune</span>
        </p>
        <p className="text-white font-['lilita_one'] text-[3rem] leading-[3rem] text-center">
          While You Grow Your <span className="text-[#f31260]">Dreams</span>
        </p>
      </div>
      <p className="text-default-300">Join Charl Solutions Today !</p>
      <Button variant="shadow" color="danger" radius="full" endContent={<FaArrowCircleRight className="mt-[0.1rem]" />}>
        Join Now
      </Button>
    </div>
  );
};

export default FAQTailCard;
