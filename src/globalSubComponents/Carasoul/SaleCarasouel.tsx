import React, { useEffect, useState } from 'react'
import p1 from "./photos/sale/1.png"
import p2 from "./photos/sale/2.png";
import p3 from "./photos/sale/3.png";

const slides = [p1,p2,p3]
const SaleCarasouel = () => {
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((currentIndex) => (currentIndex + 1) % slides.length);
      }, 3000); // Change slide every 5 seconds

      return () => clearInterval(interval);
    }, []);
    
    const handleNextSlide = () => {
      console.log("hello");
      setCurrentIndex((currentIndex + 1) % slides.length);
    };

    const handlePrevSlide = () => {
      if (currentIndex === 0) {
        setCurrentIndex(slides.length - 1);
      } else {
        setCurrentIndex(currentIndex - 1);
      }
    };

  return (
    <div className="relative ">
      <div className="lg:h-[20rem] h-auto w-full ">
        {slides.map((url: any, i: any) => (
          <img
            src={url}
            className={"object-contain lg:h-[300px]  w-full " + (currentIndex === i ? "block" : "hidden")}
          />
        ))}
      </div>

      <div className=" flex justify-between w-full transform -translate-y-1/2  absolute top-1/2 ">
        <a className="btn btn-circle lg:ml-[-3rem] bg-black text-white" onClick={handlePrevSlide}>
          ❮
        </a>
        <a className="btn btn-circle lg:mr-[-3rem] bg-black text-white" onClick={handleNextSlide}>
          ❯
        </a>
      </div>
    </div>
  );
}

export default SaleCarasouel