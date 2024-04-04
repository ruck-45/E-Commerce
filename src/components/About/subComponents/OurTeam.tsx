import { Avatar, Divider } from "@nextui-org/react";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitterSquare } from "react-icons/fa";
import { SiFacebook } from "react-icons/si";
import { TbBrandYoutubeFilled } from "react-icons/tb";

const leaders = [
  {
    name: "MAX MONTI",
    desc: "OPERATIONS MANAGER",
    image:
      "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "SARAI CIANCIO",
    desc: "CEO",
    image:
      "https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "SONNY SELDON",
    desc: "DEVELOPER",
    image: "https://images.pexels.com/photos/5486199/pexels-photo-5486199.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "KAY HIGLEY",
    desc: "SALES EXECUTIVE",
    image:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

const OurTeam = () => {
  return (
    <div className="px-[3rem] md:px-[5rem] py-[5rem]">
      <div className="flex justify-center items-center flex-col">
        <h1 className="text-2xl font-bold">MEET OUR LEADERSHIP !!</h1>
        <Divider className="max-w-[22rem] mt-[0.5rem]" />
        <p className="text-center max-w-[40rem] text-xs mt-[0.5rem]">
          Our Passion leads to design, design leads to performance, performance leads to success. We believe that apps
          and websites should not only be eye catching but actually provide a great user experience that users will
          remember.
        </p>
      </div>
      <div className="flex flex-wrap mt-[3rem] gap-[2rem] justify-center">
        {leaders.map((data) => (
          <div className="flex flex-col justify-center items-center">
            <Avatar className="w-[8rem] h-[8rem]" src={data.image} isBordered />
            <div className="mt-[1rem] flex flex-col justify-center items-center border px-2 py-1">
              <p className="font-bold">{data.name}</p>
              <p className="font-semibold text-sm text-default-500">{data.desc}</p>
              <div className="flex flex-row items-center justify-center gap-[1rem] text-default-800 px-[1rem] pt-[1rem] pb-[0.5rem] text-xl">
                <SiFacebook className="cursor-pointer hover:scale-110" />
                <TbBrandYoutubeFilled className="cursor-pointer hover:scale-110" />
                <FaTwitterSquare className="cursor-pointer hover:scale-110" />
                <AiFillInstagram className="cursor-pointer hover:scale-110" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
