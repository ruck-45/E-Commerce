// Dependencies
import { Image } from "@nextui-org/react";

type StrategyCardProps = {
  className?: string;
  heading: string;
  caption: string;
  isBlack: Boolean;
  thumbnail: string;
};

const StrategyCard = (props: StrategyCardProps) => {
  let className = "flex flex-col items-center gap-[2rem] p-[5rem] md:w-[50%] " + props.className;
  if (props.isBlack) {
    className += " bg-black text-white";
  } else {
    className += " bg-white";
  }

  return (
    <div className={className}>
      <div>
        <h1 className="font-['lilita_one'] text-[2rem]">{props.heading}</h1>
        <p>{props.caption}</p>
      </div>
      <Image width={600} alt="thumbnail" src={props.thumbnail} isBlurred/>
    </div>
  );
};

export default StrategyCard;
