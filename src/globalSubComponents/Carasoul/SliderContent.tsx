import { Button } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

type index = {
  activeIndex: number;
  sliderData: any;
};

function SliderContent(props: index) {
  const navigate = useNavigate();
  return (
    <section>
      {props.sliderData.map((slide: any, index: any) => (
        <div key={index} className={index === props.activeIndex ? "slides active" : "inactive"}>
          <img className="slide-image" src={slide.urls} alt="" />
          <div className="">
            <h2 className="slide-title font-['Inter'] text-[2rem] md:text-[3rem] leading-[2rem] flex justify-center">
              <p className="w-[75%] md:w-full">{slide.title}</p>
            </h2>
            <h3 className="slide-text text-lg flex justify-center">
              <p className="max-w-[40rem] w-[80%] text-center leading-[1.5rem]">❝ {slide.description} ❞</p>
            </h3>
          </div>
          <div className="slide-text1">
            <Button
              className="bg-black text-[#F5A524] py-[0.8rem] px-[1.5rem] md:mt-[18rem] mt-[25rem]"
              variant="ghost"
              color="warning"
              size="lg"
              onClick={() => navigate("/Shop")}
            >
              Shop Now
            </Button>
          </div>
        </div>
      ))}
    </section>
  );
}

export default SliderContent;
