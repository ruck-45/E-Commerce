import { useEffect, useState } from "react";
import SliderContent from "./SliderContent";
import Dots from "./Dots";
import Arrows from "./Arrow";

import "./slider.css";
import { sliderData } from "./SliderImage";

const len = sliderData.length - 1;

function Slider() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
    }, 20000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div className="slider-container ">
      <SliderContent activeIndex={activeIndex} sliderData={sliderData} />
      <Arrows
        prevSlide={() => setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)}
        nextSlide={() => setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)}
      />
      <Dots
        activeIndex={activeIndex}
        sliderData={sliderData}
        onclick={(activeIndex: any) => setActiveIndex(activeIndex)}
      />
    </div>
  );
}

export default Slider;
