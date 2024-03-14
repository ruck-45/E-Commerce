import HomeProductCard from "./HomeProductCard";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useState } from "react";
import { Button } from "@mui/material";
import AliceCarousel from "react-alice-carousel";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import "react-alice-carousel/lib/alice-carousel.css";

type Data = {
  imageUrl: string;
  brand: string;
  title: string;
};

type HomeProductSectionProps = {
  section: string;
  data: Data[];
};

const HomeProductSection = (props: HomeProductSectionProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slidePrev = () => setActiveIndex(activeIndex - 1);
  const slideNext = () => setActiveIndex(activeIndex + 1);
  const syncActiveIndex = (item: any) => setActiveIndex(item);
  const responsive = {
    0: {
      items: 1.3,
      itemsFit: "contain",
    },
    420: {
      items: 1.6,
      itemsFit: "contain",
    },
    550: {
      items: 1.9,
      itemsFit: "contain",
    },
    700: {
      items: 2.5,
      itemsFit: "contain",
    },
    850: {
      items: 2.9,
      itemsFit: "contain",
    },
    1024: {
      items: 3.5,
      itemsFit: "contain",
    },
    1060: {
      items: 3.9,
      itemsFit: "contain",
    },
    1170: {
      items: 4.5,
      itemsFit: "contain",
    },
    1300: {
      items: 5,
      itemsFit: "contain",
    },
  };
  const items = props.data.slice(0, 10).map((item) => (
    <div className="">
      <HomeProductCard {...item} />
    </div>
  ));

  return (
    <div className="relative px-4 sm:px-6 lg:px-8 bg-white my-[3rem]">
      <div className="flex justify-between">
        <h2 className="text-2xl font-extrabold text-gray-900 py-5">{props.section}</h2>
        <Link
          to="/Shop"
          className="flex flex-row justify-start items-center text-[1rem] font-medium py-[1rem] gap-[0.5rem] hover:gap-[1rem] transition-all"
        >
          <p>Shop Now</p>
          <FaArrowRight className="" />
        </Link>
      </div>
      <div className="relative border p-5">
        <AliceCarousel
          disableButtonsControls
          disableDotsControls
          items={items}
          responsive={responsive}
          activeIndex={activeIndex}
          onSlideChanged={syncActiveIndex}
          animationType="fadeout"
          animationDuration={2000}
        />
        {activeIndex !== items.length - 5 && (
          <Button
            onClick={slideNext}
            variant="contained"
            className="z-50 "
            color="inherit"
            sx={{
              position: "absolute",
              top: "8rem",
              right: "0rem",
              transform: "translateX(50%) rotate(90deg)",
              bgcolor: "white",
            }}
            aria-label="next"
          >
            <ArrowForwardIosIcon className="" sx={{ transform: "rotate(-90deg)", color: "black" }} />
          </Button>
        )}

        {activeIndex !== 0 && (
          <Button
            onClick={slidePrev}
            variant="contained"
            color="inherit"
            className="z-50 bg-[]"
            sx={{
              position: "absolute",
              top: "8rem",
              left: "0rem",
              transform: "translateX(-50%)  rotate(90deg)",
              bgcolor: "white",
            }}
            aria-label="next"
          >
            <ArrowForwardIosIcon className="" sx={{ transform: " rotate(90deg)", color: "black" }} />
          </Button>
        )}
      </div>
    </div>
  );
};

export default HomeProductSection;
