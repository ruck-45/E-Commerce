import { Card, CardFooter, CardHeader } from "@nextui-org/react";
type CardProps = {
  icon: React.ReactNode;
  heading: string;
  value: string;
};
const ContactCard = (props: CardProps) => {
  return (
    <Card radius="none" className="min-w-[20rem] hover:scale-95 cursor-pointer">
      <CardHeader className="flex flex-col justify-center gap-1">
        <div className="flex flex-row text-2xl gap-4 font-bold text-[#d4a373]">
          <p className="h-5 w-4 mt-1">{props.icon}</p>
          <p>{props.heading}</p>
        </div>
        <div>
          <p className="text-center text-sm">{props.value}</p>
        </div>
      </CardHeader>
    </Card>
  );
};

export default ContactCard;
