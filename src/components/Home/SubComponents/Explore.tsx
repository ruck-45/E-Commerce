import { Button } from "@nextui-org/react";
import React from "react";

const Explore = () => {
  return (
    <div className="bg-white h-auto">
      <div className="flex flex-row items-center justify-between md:p-[3rem] p-[1rem]">
        {/* content */}
        <div className="flex flex-col items-start justify-between px-[2rem]">
          <h1 className="text-4xl font-bold py-[1rem]">Explore Our Products</h1>
          <p className="text-gray-600 py-[0.5rem]">
            You are allowed to use this HexaShop HTML CSS template. You can feel free to modify or edit this layout. You
            can convert this template as any kind of ecommerce CMS theme as you wish.
          </p>
          <p className="text-gray-600 py-[0.5rem]">
            There are 5 pages included in this HexaShop Template and we are providing it to you for absolutely free of
            charge at our TemplateMo website. There are web development costs for us.
          </p>
          <p className="text-gray-600 py-[0.5rem]">
            If this template is beneficial for your website or business, please kindly support us a little via PayPal.
            Please also tell your friends about our great website. Thank you.
          </p>

          <div className="py-[1rem]">
            <Button
            radius="none"
            className="px-[2.5rem]  text-1xl font-semibold py-[2rem] ">Explore</Button>
          </div>
        </div>

        {/* image */}
        <div className="md:flex flex-col justify-center items-center gap-4 p-[4rem] lg:inline-block hidden">
          <div className="flex flex-row items-center justify-center gap-2 p-[1rem]">
            <div className="bg-slate-100 w-[15rem] h-[15rem] flex flex-col justify-center items-center ">
              <h1 className="text-2xl font-bold text-center">Carpets</h1>
              <p className="text-center opacity-30">Latest Collection</p>
            </div>
            <div className=" w-[18rem] h-[15rem] p-[1rem] flex justify-center items-center">
              <img
                className="w-[15rem] h-[15rem]"
                src="https://img.freepik.com/free-photo/multiple-carpets-grand-bazaar-istanbul-turkey_1268-21687.jpg?w=360&t=st=1710156440~exp=1710157040~hmac=29cc1d9a61bd3646a6a69847ae86630b0ed71d75d7eafa685040b93aef087f58"
                alt=""
              />
            </div>
          </div>
          <div className="flex flex-row items-center justify-center gap-2 p-[1rem]">
            <div className=" w-[18rem] h-[15rem] p-[1rem] flex justify-center items-center">
              <img
                className="w-[15rem] h-[15rem]"
                src="https://img.freepik.com/premium-photo/filigree-bottle-full-amber-liquid-photorealistic_777271-4904.jpg?w=360"
                alt=""
              />
            </div>
            <div className="bg-slate-100 w-[18rem] h-[15rem] flex flex-col justify-center items-center ">
              <h1 className="text-2xl font-bold text-center">Different Types</h1>
              <p className="text-center opacity-30">Over 304 Products</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
