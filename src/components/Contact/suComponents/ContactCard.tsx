import { Card, CardFooter, CardHeader } from "@nextui-org/react";
type CardProps = {
  icon: React.ReactNode;
  heading: string;
  value: string;
};
const ContactCard = (props: CardProps) => {
  return (
    <>
      <div className="flex flex-col gap-1 ">
        <div className="flex gap-x-2">
          <div className="mt-1 text-default-500">{props.icon}</div>
          <p className="font-bold text-default-500">{props.heading}</p>
        </div>
        <p>{props.value}</p>
      </div>
    </>
  );
};

export default ContactCard;
