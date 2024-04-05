import { Image } from "@nextui-org/react";

type card = {
  pic: any;
  title: string;
};

const ExclusiveCard = (props: card) => {
  return (
    <div
      className="w-[17rem] bg-no-repeat bg-cover bg-center flex flex-col justify-center items-center gap-[1rem] p-[1rem] shadow-xl"
      style={{
        backgroundImage:
          "url(https://assets-global.website-files.com/5a9423a3f702750001758d4f/64ddbec01951138700617251_%20-%202.png)",
      }}
    >
      <Image radius="none" src={props.pic} className="w-[16rem] object-cover cursor-pointer" isBlurred isZoomed />
      <h1 className="text-white text-xl font-bold uppercase">{props.title}</h1>
    </div>
  );
};

export default ExclusiveCard;
