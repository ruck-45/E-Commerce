// Dependencies
import { Chip, Button } from "@nextui-org/react";

type MissionChipProps = {
  logo: JSX.Element;
  heading: string;
  caption: string;
  innerWrapperClass?: string;
  headingClass?: string;
  captionClass?: string;
  chipvarient: "dot" | "flat" | "solid" | "bordered" | "light" | "faded" | "shadow" | undefined;
  chipcolor: "secondary" | "default" | "primary" | "success" | "warning" | "danger" | undefined;
  buttonvarient: "flat" | "solid" | "bordered" | "light" | "faded" | "shadow" | "ghost" | undefined;
  buttoncolor: "secondary" | "default" | "primary" | "success" | "warning" | "danger" | undefined;
};

const MissionChip = (props: MissionChipProps) => {
  return (
    <Chip
      startContent={
        <Button
          isIconOnly
          color={props.buttoncolor}
          variant={props.buttonvarient}
          radius="full"
          className="w-[4rem] h-[4rem]"
        >
          {props.logo}
        </Button>
      }
      variant={props.chipvarient}
      color={props.chipcolor}
      className="min-w-[15rem] min-h-[3rem] text-center py-[2rem] px-[0] "
    >
      <div className={"ml-[1rem] mr-[1.5rem] " + props.innerWrapperClass}>
        <h1 className={"text-left text-[1rem] " + props.headingClass}>{props.heading}</h1>
        <p className={"text-left text-xs " + props.captionClass}>{props.caption}</p>
      </div>
    </Chip>
  );
};

export default MissionChip;
