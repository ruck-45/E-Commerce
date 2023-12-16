// Dependencies
import { Image, Button, Progress } from "@nextui-org/react";
import { FaArrowCircleRight } from "react-icons/fa";

const progressData = [
  {
    label: "Growth",
    value: 85,
  },
  {
    label: "Business Guidance",
    value: 97,
  },
  {
    label: "Industry Building",
    value: 90,
  },
];

const Specialization = () => {
  return (
    <div className="bg-[black] flex items-center justify-between text-white px-[1rem] lg:px-[5rem] py-[5rem] gap-[3rem]">
      <div className="flex items-center w-full lg:w-[50%]">
        <div className="w-full flex flex-col items-center lg:items-start gap-[3rem] ms-[3rem] lg:ms-[0]">
          <div>
            <h1 className="font-['Kalnia'] font-bold text-[2rem] lg:text-[3rem] leading-[2rem] lg:leading-[3.7rem] text-center lg:text-left">
              Getting the Best Terms
            </h1>
            <h1 className="font-['Kalnia'] font-bold text-[2rem] lg:text-[3rem] leading-[2rem] lg:leading-[3.7rem] text-center lg:text-left">
              On Your Investment
            </h1>
          </div>
          <p>We specialize in securing optimal terms for your investment ventures.</p>

          <div className="w-full flex flex-col gap-[1rem] items-center lg:items-start">
            {progressData.map((data, indx) => (
              <Progress
                label={data.label}
                size="sm"
                value={data.value}
                color="success"
                showValueLabel={true}
                className="max-w-md italic"
              />
            ))}
          </div>

          <Button
            variant="shadow"
            color="danger"
            radius="full"
            endContent={<FaArrowCircleRight className="mt-[0.2rem]" />}
          >
            Learn More
          </Button>
        </div>
      </div>
      <Image
        isBlurred
        src="https://images.unsplash.com/photo-1573167036629-fd1d76448ddf?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Help"
        width={500}
        radius="none"
        className="border border-[1rem] hidden lg:block rotate-3 hover:rotate-1"
      />
    </div>
  );
};

export default Specialization;
