import { Image } from "@nextui-org/react";

type Card = {
  img: any;
  title: string;
  head: string;
};

const GridCard = (props: Card) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div
        className=" flex items-center justify-center p-[0.6rem] bg-no-repeat bg-cover bg-center shadow-xl"
        style={{
          backgroundImage:
            "url(https://assets-global.website-files.com/5a9423a3f702750001758d4f/64ddbec01951138700617251_%20-%202.png)",
        }}
      >
        <div className="w-[16rem] p-[0.8rem] bg-center object-cover bg-white">
          <Image src={props.img} className="object-cover cursor-pointer" isBlurred radius="none" isZoomed />
        </div>
      </div>
      <div className="p-[1rem] flex flex-col justify-center items-center">
        <h1 className="text-default-600 font-bold text-md text-center">{props.title}</h1>
        <h1 className="text-default-800 font-bold text-xl">{props.head}</h1>
      </div>
    </div>
  );
};

export default GridCard;
