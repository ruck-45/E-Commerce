import { Card, CardBody, CardFooter, CardHeader, Image } from "@nextui-org/react";

const serviceData = [
  {
    name: "REFUND POLICY",
    description:
      "Clear guidelines for product returns and reimbursements, ensuring customer satisfaction and transparency.",
    image:
      "https://images.unsplash.com/photo-1594392175511-30eca83d51c8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "PREMIUM PACKAGING",
    description:
      "Exquisite, carefully curated packaging elevating the presentation and perceived value of our products.",
    image:
      "https://images.unsplash.com/photo-1595246135406-803418233494?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "SUPERIOR QUALITY",
    description:
      "Uncompromising commitment to excellence, offering products crafted with the finest materials and highest standards.",
    image:
      "https://images.unsplash.com/photo-1639311330925-9934c9931032?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const OurServices = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center px-[3rem] md:px-[5rem] py-[5rem] gap-[1rem] bg-[#e9ecef]">
      <h1 className="font-bold text-5xl">Our Services</h1>
      <p className="text-default-400 text-md">
        Details to details is what makes ShopNest different from the other themes.
      </p>
      <div className="flex flex-wrap mt-[1rem] gap-[2rem] justify-center items-center">
        {serviceData.map((data, index) => (
          <Card className="flex flex-col max-w-[25rem] h-[26rem]" key={index} isPressable isHoverable>
            <CardHeader className=" justify-center text-center font-bold text-2xl">{data.name}</CardHeader>
            <CardBody className="flex text-center">{data.description}</CardBody>
            <CardFooter className="">
              <Image src={data.image} />
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
