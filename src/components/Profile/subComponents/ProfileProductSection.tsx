import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useState } from "react";
import { Button } from "@mui/material";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

type Data = {
  imageUrl: string;
  brand: string;
  title: string;
  // item_id: string;
};

type ProfileProductSectionProps = {
  data: Data[];
};

const ProfileProductSection = (props: ProfileProductSectionProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slidePrev = () => setActiveIndex(activeIndex - 1);
  const slideNext = () => setActiveIndex(activeIndex + 1);
  const syncActiveIndex = (item: any) => setActiveIndex(item);
  const responsive = {
    0: {
      items: 1,
      itemsFit: "contain",
    },
    500: {
      items: 1.5,
      itemsFit: "contain",
    },
    625: {
      items: 2,
      itemsFit: "contain",
    },
    770: {
      items: 2.5,
      itemsFit: "contain",
    },
    885: {
      items: 3,
      itemsFit: "contain",
    },
    1024: {
      items: 2.5,
      itemsFit: "contain",
    },
    1125: {
      items: 3,
      itemsFit: "contain",
    },
    1285: {
      items: 3.5,
      itemsFit: "contain",
    },
    1430: {
      items: 4,
      itemsFit: "contain",
    },
  };
  const items = props.data.slice(0, 10).map((item) => (
    <div className="">
      {/* <HomeProductCard {...item} /> */}
    </div>
  ));

  return (
    <div className="relative border p-1">
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
  );
};

export default ProfileProductSection;
