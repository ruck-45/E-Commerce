// Dependencies
import { Button, Image } from "@nextui-org/react";

const AboutWork = () => {
  return (
    <div className="bg-[#333333] flex flex-col xl:flex-row justify-center xl:justify- items-center">
      <div className="px-[3rem] md:px-[5rem] py-[5rem] text-white max-w-[45rem]">
        <h1 className="text-2xl font-bold">WE BELIEVE IN QUALITY PRODUCT</h1>
        <div className="flex flex-col gap-[1rem] mt-[1rem] text-justify text-xs">
          <p>
            At Shopnest, we understand that a home is more than just a place; it's a reflection of your style,
            personality, and most importantly, your values. That's why we curate a meticulously selected collection of
            carpets and antiques, each chosen for its exceptional craftsmanship, unique character, and enduring beauty.
            Our commitment to quality is unwavering. Every item you find on our platform is carefully sourced from
            artisans and suppliers who share our passion for excellence. From intricately woven rugs to exquisite
            antique pieces, each product undergoes rigorous inspection to ensure it meets our stringent standards.
          </p>
          <p>
            But our dedication to quality doesn't stop at the products we offer. We strive to provide you with an
            exceptional shopping experience from start to finish. Our user-friendly website is designed to make browsing
            and purchasing a breeze, and our dedicated customer support team is here to assist you every step of the
            way.
          </p>
        </div>
        <Button radius="none" color="danger" className="mt-[2rem]">
          READ MORE
        </Button>
      </div>
      <Image
        width={700}
        src="https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className="z-[5] cursor-pointer"
        isZoomed
        radius="none"
      />
    </div>
  );
};

export default AboutWork;
