// Dependencies
import { Image, Divider } from "@nextui-org/react";

const AboutUs = () => {
  return (
    <div className="bg-[#e9ecef] flex flex-col">
      <div className="bg-[#e9ecef] flex flex-col items-center lg:flex-row justify-evenly px-[3rem] md:px-[5rem] lg:px-[8rem] py-[5rem] gap-[3rem]">
        <div className="flex flex-col gap-[1rem]">
          <h1 className="font-['DM_Serif_Display'] text-[2.5rem] font-semibold">Our Story</h1>
          <p className="italic text-md text-default-800">“Innovators in the Digital World”</p>
          <p className="text-justify text-default-500 text-[0.95rem] sm:text-md lg:max-w-[30rem]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam reprehenderit cum ullam animi nesciunt
            explicabo. Excepturi ad necessitatibus, repudiandae, consequatur culpa ipsum maxime sequi, tempora nostrum
            eaque quas quasi voluptate!
          </p>
          <p className="text-justify text-default-500 text-[0.95rem] sm:text-md lg:max-w-[30rem]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam reprehenderit cum ullam animi nesciunt
            explicabo. Excepturi ad necessitatibus, repudiandae, consequatur culpa ipsum maxime sequi, tempora nostrum
            eaque quas quasi voluptate!
          </p>
        </div>
        <Image
          width={350}
          src="https://images.unsplash.com/photo-1600166898405-da9535204843?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="m-5"
          isBlurred
        />
      </div>
      <Divider className="max-w-[28rem] sm:max-w-[36rem] md:max-w-[47rem] lg:max-w-[55rem] self-center" />
    </div>
  );
};

export default AboutUs;
