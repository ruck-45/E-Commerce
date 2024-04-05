import { Divider } from "@nextui-org/react";
import { FaShippingFast } from "react-icons/fa";
import { FaMoneyBills } from "react-icons/fa6";
import { SiFsecure } from "react-icons/si";
import { GrSupport } from "react-icons/gr";

const serviceData = [
  {
    name: "Free Shipping",
    description:
      "Enjoy free shipping on all orders above $99, because getting quality products to your doorstep shouldn't cost extra.",
    icon: FaShippingFast,
  },
  {
    name: "Money Back Guarantee",
    description:
      "Rest easy knowing that if there are any problems with your product, we offer a money-back guarantee. Your satisfaction is our priority.",
    icon: FaMoneyBills,
  },
  {
    name: "Online Support 24/7",
    description:
      "Need assistance? Our dedicated support team is here for you around the clock, ready to help with any questions or concerns you may have.",
    icon: GrSupport,
  },
  {
    name: "Secure Payment",
    description:
      "Shop with confidence knowing that your payments are 100% secure. Your privacy and security are of utmost importance to us.",
    icon: SiFsecure,
  },
];

const OurServices = () => {
  return (
    <div className="px-[3rem] md:px-[5rem] py-[5rem]">
      <div className="flex justify-center items-center flex-col">
        <h1 className="text-2xl font-bold">WE BELIEVE IN OUR SERVICE ...</h1>
        <Divider className="max-w-[22rem] mt-[0.5rem]" />
        <p className="text-center max-w-[40rem] text-xs mt-[0.5rem]">
          Whether you're searching for the perfect statement piece to elevate your home decor or a cherished antique to
          add character to your space, Shopnest is your destination for quality, authenticity, and timeless elegance.
        </p>
      </div>
      <div className="flex flex-wrap mt-[3rem] gap-[2rem] justify-center">
        {serviceData.map((data) => (
          <div className="max-w-[19rem] flex flex-col items-center">
            <data.icon className="text-4xl text-default-700" />
            <h1 className="text-center font-semibold">{data.name}</h1>
            <p className="text-xs text-center">{data.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
