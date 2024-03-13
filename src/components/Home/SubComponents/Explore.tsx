import { Button } from "@nextui-org/react";
import React from "react";

const Explore = () => {
  return (
    <div className="flex flex-col xl:flex-row items-center justify-between md:p-[3rem] p-[1rem]">
      {/* content */}
      <div className="flex flex-col items-start justify-between px-[2rem] max-w-[40rem]">
        <h1 className="text-4xl font-bold py-[1rem]">Explore Our Products</h1>
        <p className="text-gray-600 py-[0.5rem] text-justify">
          Step into a world of refined sophistication with our curated selection of carpets, rugs, and decorative
          antiques. At our store, we offer a diverse range of exquisite pieces that redefine luxury living.
        </p>
        <p className="text-gray-600 py-[0.5rem] text-justify">
          From intricately woven rugs to ornate decorative antiques, each item tells a story of craftsmanship and
          elegance. Explore our collection and immerse yourself in a realm of timeless beauty and charm.
        </p>
        <p className="text-gray-600 py-[0.5rem] text-justify">
          Whether you're looking to add warmth to your living space with a plush carpet or seeking a statement piece to
          elevate your decor, we have something for every style and taste. Uncover new trends and elevate your home with
          our exclusive offerings.
        </p>

        <div className="py-[1rem]">
          <Button radius="none" className="px-[2.5rem]  text-1xl font-semibold py-[2rem] ">
            Explore
          </Button>
        </div>
      </div>

      {/* image */}
      <div className="grid-cols-2 gap-[1rem] shrink-0 hidden md:grid">
        <div className="bg-slate-100 flex flex-col justify-center items-center hover:scale-105 transition-all cursor-pointer">
          <h1 className="text-2xl font-bold text-center">Carpets</h1>
          <p className="text-center opacity-30">Latest Collection</p>
        </div>
        <div
          className=" w-[18rem] h-[15rem] bg-cover bg-center bg-no-repeat hover:scale-105 transition-all cursor-pointer"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1546550879-3b71f2427ae0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
          }}
        ></div>
        <div
          className=" w-[18rem] h-[15rem] bg-cover bg-center bg-no-repeat hover:scale-105 transition-all cursor-pointer"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1575886672692-34cb9b65a074?q=80&w=1791&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
          }}
        ></div>
        <div className="bg-slate-100 flex flex-col justify-center items-center hover:scale-105 transition-all cursor-pointer">
          <h1 className="text-2xl font-bold text-center">Antiques</h1>
          <p className="text-center opacity-30">Over 304 Products</p>
        </div>
      </div>
    </div>
  );
};

export default Explore;
