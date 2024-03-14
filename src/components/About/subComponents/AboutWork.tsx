// Dependencies
import { Image } from "@nextui-org/react";

const AboutWork = () => {
  return (
    <div className="bg-[#e9ecef] flex flex-col items-center lg:flex-row justify-evenly px-[3rem] md:px-[5rem] lg:px-[8rem] py-[5rem] gap-[5rem]">
      <Image
        width={350}
        src="https://images.unsplash.com/photo-1577926866949-c1ed2147d862?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className="m-5 order-last"
        isBlurred
      />
      <div className="flex flex-col gap-[1rem] order-first lg:order-last">
        <h1 className="font-['DM_Serif_Display'] text-[2.5rem] font-semibold">Our Misson</h1>
        <p className="italic text-md text-default-800">" “Where Ideas Transform into Solutions” "</p>
        <p className="text-justify text-default-500 text-[0.95rem] sm:text-md lg:max-w-[30rem]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum eveniet aliquid ad officiis assumenda eum ab ea
          doloribus atque sunt officia sed maiores, fugiat sapiente nisi nesciunt, similique delectus enim?
        </p>
        <p className="text-justify text-default-500 text-[0.95rem] sm:text-md lg:max-w-[30rem]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum eveniet aliquid ad officiis assumenda eum ab ea
          doloribus atque sunt officia sed maiores, fugiat sapiente nisi nesciunt, similique delectus enim?
        </p>
      </div>
    </div>
  );
};

export default AboutWork;
