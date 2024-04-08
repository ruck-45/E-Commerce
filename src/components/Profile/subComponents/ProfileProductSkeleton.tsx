import { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Skeleton } from "@nextui-org/react";

type ProfileProductSkeletonProps = {
  data: Number[];
};

const ProfileProductSkeleton = (props: ProfileProductSkeletonProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

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
  const items = props.data.map((item) => <Skeleton className="w-[15rem] h-[20rem]" />);
  
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
    </div>
  );
};

export default ProfileProductSkeleton;
