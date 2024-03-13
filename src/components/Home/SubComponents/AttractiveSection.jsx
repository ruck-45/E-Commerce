import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Attractive.css";

const AttractiveSection = () => {
  return (
    <div className="bg-white h-auto text-white">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-[1rem] p-[3rem]">
        <div className=" firstSection  firstSection flex flex-col items-end justify-center rounded-2xl lg:h-[33rem] w-full lg:w-[50rem]">
          <div className="mr-[1rem] md:mr-[5rem] p-[2rem] bg-[rgba(0,0,0,0.5)] rounded-xl">
            <div className="py-[1rem]">
              <h3 className="text-start text-[1.2rem]  font-thin">NEW COLLECTION</h3>
            </div>
            <div className="py-[1rem]">
              <h1 className="text-start text-5xl font-bold ">
                Exclusive <br />
                Items
              </h1>
            </div>
            <div className="  py-[0.5rem] ">
              <p className="text-start">
                Discover rare & unique <br />
                items in our exclusive <br /> collection.
              </p>
            </div>
            <Link className="flex flex-row justify-start items-center text-[1rem] font-medium py-[1rem] gap-[0.5rem] hover:gap-[1rem] transition-all">
              <p>Shop Now</p>
              <FaArrowRight className="" />
            </Link>
          </div>
        </div>
        <div className="flex flex-col justify-center items-start gap-4 attractive-small">
          <div className=" secondSection flex flex-col justify-between items-start h-[16rem] w-full lg:w-[30rem] rounded-2xl">
            <div className="ml-[3rem] p-[1rem] h-full bg-[rgba(0,0,0,0.5)] ">
              <div className="py-[0.5rem]">
                <h3 className="text-start text-[1.2rem]  font-thin">TRENDING NOW</h3>
              </div>
              <div className="py-[0.5rem]">
                <h1 className="text-start text-5xl font-bold ">
                  Latest <br />
                  Products
                </h1>
              </div>
              <Link className="flex flex-row justify-start items-center text-[1rem] font-medium py-[1rem] gap-[0.5rem] hover:gap-[1rem] transition-all">
                <p>Shop Now</p>
                <FaArrowRight className="" />
              </Link>
            </div>
          </div>
          <div className="thirdSection flex flex-col justify-between items-start h-[16rem] w-full lg:w-[30rem]  rounded-2xl">
            <div className="ml-[3rem] p-[1rem] h-full bg-[rgba(0,0,0,0.5)] ">
              <div className="py-[0.5rem]">
                <h3 className="text-start text-[1.2rem] font-thin">BEST DEALS</h3>
              </div>
              <div className="py-[0.5rem]">
                <h1 className="text-start text-5xl font-bold ">
                  Great <br />
                  Discounts
                </h1>
              </div>
              <Link className="flex flex-row justify-start items-center text-[1rem] font-medium py-[1rem] gap-[0.5rem] hover:gap-[1rem] transition-all">
                <p>Shop Now</p>
                <FaArrowRight className="" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttractiveSection;
