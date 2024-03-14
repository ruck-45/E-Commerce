import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

const OurTeam = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center p-[5rem] gap-[1rem]">
      <h1 className="font-bold text-5xl">Our Amazing Team</h1>
      <p className="text-default-400 text-md">
        Details to details is what makes Hexashop different from the other themes.
      </p>
      <div className="grid grid-cols-3 mt-[1rem] gap-[2rem]">
        <Card>
          <CardBody>
            <Image
              width={400}
              src="https://images.unsplash.com/photo-1562788869-4ed32648eb72?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </CardBody>
          <CardFooter className="flex flex-col items-center justify-center">
            <h1 className="font-bold text-2xl">Ragnar Lodbrok</h1>
            <p className="text-default-400">Product Caretaker</p>
          </CardFooter>
        </Card>
        <Card>
          <CardBody>
            <Image
              width={400}
              src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </CardBody>
          <CardFooter className="flex flex-col items-center justify-center">
            <h1 className="font-bold text-2xl">Ragnar Lodbrok</h1>
            <p className="text-default-400">Product Caretaker</p>
          </CardFooter>
        </Card>
        <Card>
          <CardBody>
            <Image
              width={400}
              src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </CardBody>
          <CardFooter className="flex flex-col items-center justify-center">
            <h1 className="font-bold text-2xl">Ragnar Lodbrok</h1>
            <p className="text-default-400">Product Caretaker</p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default OurTeam;
