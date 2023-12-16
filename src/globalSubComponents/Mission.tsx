// Dependencies
import { Card, CardBody, Divider, Button } from "@nextui-org/react";
import { FaUsersGear, FaSquareXTwitter } from "react-icons/fa6";
import { RiFocus3Fill } from "react-icons/ri";
import { FaArrowCircleRight } from "react-icons/fa";
import { SiFacebook } from "react-icons/si";
import { TbBrandYoutubeFilled } from "react-icons/tb";

// Local Files
import "./Mission.css";
import MissionChip from "../components/Home/subComponents/MissionChip";

const missionChips = [
  {
    logo: <FaUsersGear className="text-[2rem]" />,
    heading: "Expert Strategies",
    caption: "Unlock Your Trading and Investing Potential",
  },
  {
    logo: <RiFocus3Fill className="text-[2rem]" />,
    heading: "Focusing On Revenue",
    caption: "Focusing On Revenue",
  },
];

const Mission = () => {
  return (
    <div className="flex justify-center items-center p-[3rem] py-[5rem] bg-[white]">
      <Card isBlurred className="border-none bg-transparent max-w-[80rem]">
        <CardBody>
          <div className="grid grid-cols-6 lg:grid-cols-12 gap-6 lg:gap-4 items-center justify-center">
            <div className="relative col-span-6 lg:col-span-4">
              <div className="missionImg rounded-xl"></div>
            </div>

            <div className="flex flex-col col-span-6 lg:col-span-8 p-[1rem] md:p-[2rem] lg:p-[3rem] gap-[2rem]">
              <div className="flex flex-col gap-[1.5rem]">
                <h1 className="font-['Kalnia'] font-bold text-[2.7rem] lg:text-[3rem] text-[#191f22] leading-[3.7rem] text-center lg:text-left">
                  Improving The World Through Charl Solutions.
                </h1>
                <p className="text-justify text-default-500">
                  Empowering communities and protecting our environment to fostering understanding and harnessing
                  technology ethically, each action, big or small, contributes to a brighter future.
                </p>
              </div>

              <div className="flex flex-col gap-[1rem]">
                {missionChips.map((data, index) => (
                  <MissionChip key={index} logo={data.logo} heading={data.heading} caption={data.caption} />
                ))}
              </div>

              <Divider />

              <div className="flex justify-between">
                <Button
                  variant="ghost"
                  color="danger"
                  radius="full"
                  endContent={<FaArrowCircleRight className="mt-[0.2rem]" />}
                >
                  Learn More
                </Button>
                <div className="flex text-[1.8rem] gap-[1rem]">
                  <SiFacebook className="mt-[0.4rem] cursor-pointer hover:scale-105" />
                  <FaSquareXTwitter className="mt-[0.4rem] cursor-pointer hover:scale-105" />
                  <TbBrandYoutubeFilled className="mt-[0.4rem] cursor-pointer hover:scale-105" />
                </div>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default Mission;
