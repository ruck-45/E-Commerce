import { Card, CardBody, CardFooter, CardHeader, Image } from "@nextui-org/react";

const OurServices = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center p-[5rem] gap-[1rem]">
      <h1 className="font-bold text-5xl">Our Services</h1>
      <p className="text-default-400 text-md">
        Details to details is what makes ShopNest different from the other themes.
      </p>
      <div className="flex flex-wrap mt-[1rem] gap-[2rem] justify-center items-center">
        <Card className="flex flex-col px-[2rem] py-[1rem] max-w-[25rem] h-[26rem]" radius="none">
          <CardHeader className=" justify-center text-center font-bold text-2xl">REFUND POLICY</CardHeader>
          <CardBody className="flex text-center">
            Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.
          </CardBody>
          <CardFooter className="">
            <Image
              width={400}
              radius="none"
              src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </CardFooter>
        </Card>
        <Card className="flex flex-col px-[2rem] py-[1rem] max-w-[25rem] h-[26rem]" radius="none">
          <CardHeader className="flex justify-center text-center font-bold text-2xl">PREMIUM PACKAGING</CardHeader>
          <CardBody className="flex text-center">
            Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.
          </CardBody>
          <CardFooter className="">
            <Image
              width={400}
              radius="none"
              src="https://images.unsplash.com/photo-1595246135406-803418233494?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </CardFooter>
        </Card>
        <Card className="flex flex-col px-[2rem] py-[1rem] max-w-[25rem] h-[26rem]" radius="none">
          <CardHeader className="flex justify-center text-center font-bold text-2xl">SUPERIOR QUALITY</CardHeader>
          <CardBody className="flex text-center">
            Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.
          </CardBody>
          <CardFooter className="">
            <Image
              width={400}
              radius="none"
              src="https://images.unsplash.com/photo-1415604934674-561df9abf539?q=80&w=1980&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default OurServices;
