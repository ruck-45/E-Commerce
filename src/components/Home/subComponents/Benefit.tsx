// Dependencies
import { Card, CardHeader, CardBody, CardFooter, Button } from "@nextui-org/react";
import { FaArrowCircleRight } from "react-icons/fa";
import { IoRocketSharp } from "react-icons/io5";
import { FaThumbsUp } from "react-icons/fa";
import { TbBulbFilled } from "react-icons/tb";

// Local Files
import './Benefit.css'
import BenefitSmallCard from "./BenefitSmallCard";

const smallCardData = [
  {
    heading: "Fast Process",
    caption: "Dedicated to providing a fast and efficient service.",
    logo: <IoRocketSharp className="text-[2.2rem]" />,
  },
  {
    heading: "Best Quality",
    caption: "Elevating Your Financial Experience.",
    logo: <FaThumbsUp className="text-[2.2rem]" />,
  },
  {
    heading: "Solution",
    caption: "Your Pathway to Financial Growth.",
    logo: <TbBulbFilled className="text-[2.2rem]" />,
  },
];

const Benefit = () => {
  return (
    <div className="p-[5rem] flex justify-between items-center benefit">
      <Card className="max-w-[400px] p-[2rem] dark bg-[#F31260]" isPressable>
        <CardHeader className="font-['Concert_One'] text-[3rem]">Our Benefit</CardHeader>
        <CardBody className="text-justify">
          Navigate the exciting world of trading and investing with confidence. Whether you’re a seasoned investor or
          just starting out, we offer the tools, resources, and expertise you need to achieve your financial goals.
        </CardBody>
        <CardFooter>
          <Button variant="light" radius="full" endContent={<FaArrowCircleRight className="mt-[0.2rem]" />}>
            Learn More
          </Button>
        </CardFooter>
      </Card>

      {smallCardData.map((data, index) => (
        <BenefitSmallCard key={index} heading={data.heading} caption={data.caption} logo={data.logo} />
      ))}
    </div>
  );
};

export default Benefit;
