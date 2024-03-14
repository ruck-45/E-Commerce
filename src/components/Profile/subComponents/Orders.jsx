import HomeProductCard from "../../Home/SubComponents/HomeProductCard";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useState } from "react";
import "react-alice-carousel/lib/alice-carousel.css";
import { Button } from "@mui/material";
import AliceCarousel from "react-alice-carousel";

const Orders = ({ section, data }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slidePrev = () => setActiveIndex(activeIndex - 1);
  const slideNext = () => setActiveIndex(activeIndex + 1);
  const syncActiveIndex = ({ item }) => setActiveIndex(item);

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
      items: 3,
      itemsFit: "contain",
    },
  };
  const items = data?.slice(0, 10).map((item) => (
    <div className="">
      <HomeProductCard product={item} />
    </div>
  ));

  return (
    <div className="relative sm:px-6 lg:px-8 bg-white ">
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

export default Orders;
