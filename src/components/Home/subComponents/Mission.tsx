// Dependencies
import { Card, CardBody, Image, Divider, Button } from "@nextui-org/react";
import { FaUsersGear, FaSquareXTwitter } from "react-icons/fa6";
import { RiFocus3Fill } from "react-icons/ri";
import { FaArrowCircleRight } from "react-icons/fa";
import { SiFacebook } from "react-icons/si";
import { TbBrandYoutubeFilled } from "react-icons/tb";

// Local Files
import MissionChip from "./MissionChip";

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
      <Card isBlurred className="border-none bg-transparent max-w-[80%]">
        <CardBody>
          <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
            <div className="relative col-span-6 md:col-span-4">
              <Image
                alt="Mission cover"
                className="object-cover"
                src="https://images.unsplash.com/photo-1541535881962-3bb380b08458?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
            </div>

            <div className="flex flex-col col-span-6 md:col-span-8 p-[3rem] gap-[2rem]">
              <div className="flex flex-col gap-[1.5rem]">
                <h1 className="font-['Kalnia'] font-bold text-[3rem] text-[#191f22] leading-[3.7rem]">
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
