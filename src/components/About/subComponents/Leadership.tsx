// Dependencies
import { Avatar } from "@nextui-org/react";

// Local Files
import Emilie from "../assets/Emilie.jpg"
import John from "../assets/John.jpg"

const Leaders = [
  {
    name: "Emilie Harper",
    designation: "Co-Founder & MD",
    bio: "Emilie Harper, co-founder and MD of Kreative Machinez, is a visionary leader with a background in digital innovation. With a decade of experience in digital marketing, she spearheaded transformative campaigns for global brands. Her strategic acumen and passion for creative solutions define Kreative Machinez. Emilie's achievements include steering the company to multiple industry awards and a 30% growth in client engagement within the first year.",
    thumbnail: Emilie,
  },
  {
    name: "John Edwards",
    designation: "Co-Founder & CEO",
    bio: "John Edwards, Co-founder, and CEO of Kreative Machinez, is a visionary leader with a background in digital innovation. With a degree in Computer Science and a successful stint at a top-tier tech firm, John leveraged his expertise to establish Kreative Machinez. Under his leadership, the company has achieved accolades for pioneering website creation, SEO, web analytics, and graphic design solutions, transforming businesses across diverse industries.",
    thumbnail: John,
  },
];

const Leadership = () => {
  return (
    <div className="flex justify-center items-center bg-[#e9ecef] lg:px-[6rem] gap-[4rem] lg:gap-[6rem] xl:px-[8rem] xl:gap-[8rem] flex-col lg:flex-row px-[3rem] py-[5rem] lg:p-0 ">
      <h1 className="lg:py-[5rem] font-['lilita_one'] text-[3rem] lg:text-[4rem] lg:max-w-[25rem] leading-[4rem] text-center">
        Meet Our <span className="text-[#F31260]">Leadership</span>
      </h1>
      <div className="grow flex lg:py-[5rem] xl:py-0 gap-[3rem] xl:gap-[5rem] flex-col xl:flex-row">
        {Leaders.map((data, index) => (
          <div key={index} className="xl:w-[50%] xl:py-[5rem] flex flex-col gap-[1rem]">
            <div className="flex flex-col items-center text-center">
              <Avatar src={data.thumbnail} className="w-[10rem] h-[10rem]" />
              <h1 className="font-['DM_Serif_Display'] text-[2rem] font-semibold">{data.name}</h1>
              <p className="italic text-md text-default-800">{data.designation}</p>
            </div>
            <p className="text-justify text-default-500 text-[0.9rem] sm:text-md max-w-[35rem] lg:max-w-[100%]">{data.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leadership;
