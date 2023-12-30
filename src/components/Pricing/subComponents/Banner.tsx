// Dependencies
import { Button } from "@nextui-org/react";
import { FaArrowCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div
      className="h-[20rem] bg-no-repeat bg-bottom bg-cover flex flex-col justify-center items-center gap-[1rem]"
      style={{ background: "linear-gradient(28deg, rgba(234,140,27,1) 0%, rgba(253,187,45,1) 100%)" }}
    >
      <div className="flex flex-col items-center">
        <p className="text-white font-['lilita_one'] text-[3rem] leading-[3rem] text-center">
          . . . Building <span className="text-black">Success</span>
        </p>
        <p className="text-white font-['lilita_one'] text-[3rem] leading-[3rem] text-center">
          Nurturing <span className="text-black">Dreams . . .</span>
        </p>
      </div>
      <p>Join Kreative Machinez Today !</p>
      <Button
        variant="flat"
        radius="full"
        endContent={<FaArrowCircleRight className="mt-[0.2rem] mr-[1rem]" />}
        className="w-[9rem] p-0 gap-0 mt-[1rem]"
      >
        <Link to="../About" className="p-[8px] grow">
          Learn More
        </Link>
      </Button>
    </div>
  );
};

export default Banner;
