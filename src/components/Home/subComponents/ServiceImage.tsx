// Dependencies
import { Image, Card, CardFooter } from "@nextui-org/react";
import { useState } from "react";

type ServiceImageProps = {
  heading: string;
  width: number;
  textSize: string;
  image: string;
};

const ServiceImage = (props: ServiceImageProps) => {
  let [dropClassName, setDropClassName] = useState("hidden");

  return (
    <Card
      isFooterBlurred
      radius="lg"
      className="rounded-none"
      onMouseEnter={() =>
        setDropClassName("absolute w-full bg-[rgba(0,0,0,0.5)] justify-center shadow-small z-10 h-full")
      }
      onMouseOut={() => setDropClassName("hidden")}
    >
      <Image
        className="object-cover"
        src={props.image}
        width={props.width}
        isBlurred
        radius="none"
        onMouseEnter={() =>
          setDropClassName("absolute w-full bg-[rgba(0,0,0,0.5)] justify-center shadow-small z-10 h-full")
        }
        onMouseOut={() => setDropClassName("hidden")}
      />
      <CardFooter
        className={dropClassName}
        onMouseEnter={() =>
          setDropClassName("absolute w-full bg-[rgba(0,0,0,0.5)] justify-center shadow-small z-10 h-full")
        }
        onMouseOut={() => setDropClassName("hidden")}
      >
        <p
          className={`text-white text-[${props.textSize}] font-['DM_Serif_Display'] text-center`}
          onMouseEnter={() =>
            setDropClassName("absolute w-full bg-[rgba(0,0,0,0.5)] justify-center shadow-small z-10 h-full")
          }
          onMouseOut={() => setDropClassName("hidden")}
        >
          {props.heading}
        </p>
      </CardFooter>
    </Card>
  );
};

export default ServiceImage;
