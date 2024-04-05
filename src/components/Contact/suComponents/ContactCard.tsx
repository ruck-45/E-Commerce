type CardProps = {
  icon: React.ReactNode;
  heading: string;
  value: string;
};
const ContactCard = (props: CardProps) => {
  return (
    <div className="flex flex-col gap-1 lg:max-w-[20rem] ">
      <div className="flex gap-x-2">
        <div className="mt-1 text-default-700">{props.icon}</div>
        <p className="font-bold text-default-500 italic">{props.heading}</p>
      </div>
      <p className="ms-[2rem] italic">{props.value}</p>
    </div>
  );
};

export default ContactCard;
