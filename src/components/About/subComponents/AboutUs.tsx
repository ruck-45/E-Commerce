// Dependencies
import { Image } from "@nextui-org/react";

const AboutUs = () => {
  return (
    <div className="flex flex-col items-center lg:flex-row justify-evenly px-[3rem] md:px-[5rem] lg:px-[8rem] py-[5rem] gap-[3rem] pb-0">
      <div className="flex flex-col gap-[1rem]">
        <h1 className="font-['DM_Serif_Display'] text-[2.5rem] font-semibold">Our Story</h1>
        <p className="italic text-md text-default-800">“The Carpets & Antiques Whisperer”</p>
        <p className="text-justify text-default-500 text-[0.95rem] sm:text-md lg:max-w-[30rem]">
          At ShopNest, our story began with a passion for preserving heritage and adding warmth to homes. Inspired by
          the intricate beauty of carpets and antiques, we embarked on a journey to curate a collection that celebrates
          craftsmanship and culture. Each piece tells a tale of tradition and artistry, inviting you to weave history
          into your home. Explore our carefully selected treasures and bring timeless elegance to your space with
          ShopNest.
        </p>
      </div>
      <Image
        width={300}
        src="https://images.unsplash.com/photo-1601924349924-e2da825ad42a?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className="m-5"
        isBlurred
      />
    </div>
  );
};

export default AboutUs;
