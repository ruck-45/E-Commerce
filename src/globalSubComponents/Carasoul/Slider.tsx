import { Image } from "@nextui-org/react";
import { useEffect, useState } from "react";

type Card = {
  homeImage: any;
  className: string;
  height: string;
};

const Carousel = (props: Card) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = props.homeImage;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((currentSlide) => (currentSlide + 1) % slides.length);
    }, 3000);

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
    <div className={"relative flex justify-center " + props.className}>
      {slides.map((url: any, i: any) => (
        <Image
          src={url}
          radius="none"
          className={`object-contain z-[5] lg:h-[${props.height}] ` + (currentSlide === i ? "block" : "hidden")}
        />
      ))}

      <div className="absolute justify-between transform -translate-y-1/2 top-1/2 w-full z-[9] md:flex hidden">
        <p className="btn btn-circle text-white" onClick={prevSlide}>
          ❮
        </p>
        <p className="btn btn-circle text-white" onClick={nextSlide}>
          ❯
        </p>
      </div>
    </div>
  );
};

export default Carousel;
