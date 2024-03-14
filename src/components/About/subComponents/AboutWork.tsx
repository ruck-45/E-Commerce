// Dependencies
import { Image } from "@nextui-org/react";

const AboutWork = () => {
  return (
    <div className="flex flex-col items-center lg:flex-row justify-evenly px-[3rem] md:px-[5rem] lg:px-[8rem] py-[5rem] gap-[5rem] pt-0">
      <Image
        width={300}
        src="https://images.unsplash.com/photo-1617251137884-f135eccf6942?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className="m-5 order-last"
        isBlurred
      />
      <div className="flex flex-col gap-[1rem] order-first lg:order-last">
        <h1 className="font-['DM_Serif_Display'] text-[2.5rem] font-semibold">Our Misson</h1>
        <p className="italic text-md text-default-800">“Discover Heritage and Define Home”</p>
        <p className="text-justify text-default-500 text-[0.95rem] sm:text-md lg:max-w-[30rem]">
          At ShopNest, our mission is to curate timeless treasures for your home, blending culture and craftsmanship. We
          aspire to be the go-to destination for discerning individuals seeking exquisite carpets and antiques that
          enrich spaces and stories. With a commitment to authenticity and excellence, we aim to foster a community
          where every purchase contributes to preserving heritage and inspiring a legacy of appreciation for fine
          craftsmanship.
        </p>
      </div>
    </div>
  );
};

export default AboutWork;
