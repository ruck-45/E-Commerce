import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

const OurTeam = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center p-[5rem] gap-[1rem] bg-[#e9ecef]">
      <h1 className="font-bold text-5xl">Our Amazing Team</h1>
      <p className="text-default-400 text-md">What makes ShopNest different from Others.</p>
      <div className="flex flex-wrap mt-[1rem] gap-[2rem] justify-center items-center">
        <Card isPressable isHoverable>
          <CardBody>
            <Image
              width={400}
              src="https://images.unsplash.com/photo-1562788869-4ed32648eb72?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </CardBody>
          <CardFooter className="flex flex-col items-center justify-center">
            <h1 className="font-bold text-2xl">Ragnar Bennett</h1>
            <p className="text-default-400">Chief Marketing Officer</p>
          </CardFooter>
        </Card>
        <Card isPressable isHoverable>
          <CardBody>
            <Image
              width={400}
              src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </CardBody>
          <CardFooter className="flex flex-col items-center justify-center">
            <h1 className="font-bold text-2xl">Alex Darwin</h1>
            <p className="text-default-400">Head of Operations</p>
          </CardFooter>
        </Card>
        <Card isPressable isHoverable>
          <CardBody>
            <Image
              width={400}
              src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </CardBody>
          <CardFooter className="flex flex-col items-center justify-center">
            <h1 className="font-bold text-2xl">Rachel Faux</h1>
            <p className="text-default-400">Director of Product Management</p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default OurTeam;
