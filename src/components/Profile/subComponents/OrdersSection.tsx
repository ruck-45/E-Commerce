import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useState } from "react";
import { Button } from "@mui/material";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Item, orderType } from "../../../utils/types";
import PendingOrdersCard from "./OrdersCard";
type OrdersSectionProps = {
  data: orderType[];
  status: boolean
};

const OrdersSection = (props: OrdersSectionProps) => {
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

  const items = props.data.map((item) => 
    JSON.parse(item.items).map((itemData: Item) => <PendingOrdersCard item={itemData} order={item} status={props.status} />)
  );

  const flattenedItems = items.flat(Infinity);

  return (
    <div className="relative border p-1">
      <AliceCarousel
        disableButtonsControls
        disableDotsControls
        items={flattenedItems}
        responsive={responsive}
        activeIndex={activeIndex}
        onSlideChanged={syncActiveIndex}
        animationType="fadeout"
        animationDuration={2000}
      />
      {activeIndex !== items.length - 4 && (
        <Button
          onClick={slideNext}
          variant="contained"
          className="z-50 "
          color="inherit"
          sx={{
            position: "absolute",
            top: "9rem",
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
            top: "9rem",
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

export default OrdersSection;
