import { Image } from "@nextui-org/react";

type card = {
  img: any;
  off: string;
  product: string;
};

const EverydayCard = (props: card) => {
  return (
    <div
      className=" flex items-center justify-center h-[20rem] w-[15rem] bg-no-repeat bg-cover bg-center shadow-xl"
      style={{
        backgroundImage:
          "url(https://assets-global.website-files.com/5a9423a3f702750001758d4f/64ddbec01951138700617251_%20-%202.png)",
      }}
    >
      <div className=" h-[24rem] w-[15rem] px-[1rem] mb-[4rem]">
        <Image src={props.img} className="object-cover cursor-pointer" isBlurred isZoomed radius="none" />
        <h1 className="text-center py-[0.5rem] text-white">
          <p className="text-2xl font-bold">{props.off} </p>
          <p className="font-semibold text-lg">{props.product}</p>
        </h1>
      </div>
    </div>
  );
};

export default EverydayCard;
