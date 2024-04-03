import React, { useEffect, useState } from "react";

type Card ={
  homeImage:any
}

const Carousel = (props:Card) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides =props.homeImage

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((currentSlide) => (currentSlide + 1) % slides.length);
    }, 3000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    console.log("hello");
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(slides.length - 1);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center relative">
      {/* <div className="p-[2rem]">
        <h1 className="lg:text-3xl text-1xl font-bold font-serif border-b-2 border-black">
          <span className="text-blue-600">SHOPNEST </span>SALES LIVE
        </h1>
      </div> */}
      <div className="lg:h-[25rem] h-auto w-full">
        {slides.map((url: any, i: any) => (
          <img
            src={url}
            className={"object-contain lg:h-[400px] w-full " + (currentSlide === i ? "block" : "hidden")}
          />
        ))}
      </div>

      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 lg:top-1/2 ">
        <a className="btn btn-circle" onClick={prevSlide}>
          ❮
        </a>
        <a className="btn btn-circle" onClick={nextSlide}>
          ❯
        </a>
      </div>
    </div>
  );
};

export default Carousel;
