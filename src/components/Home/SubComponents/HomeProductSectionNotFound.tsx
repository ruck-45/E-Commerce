import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import "react-alice-carousel/lib/alice-carousel.css";

type HomeProductSectionNotFoundProps = {
  section: string;
};

const HomeProductSectionNotFound = (props: HomeProductSectionNotFoundProps) => {
  return (
    <div className="relative px-4 sm:px-6 lg:px-8 bg-white my-[3rem]">
      <div className="flex justify-between">
        <h2 className="text-2xl font-extrabold text-gray-900 py-5">{props.section}</h2>
        <Link
          to="/Shop"
          className="flex flex-row justify-start items-center text-[1rem] font-medium py-[1rem] gap-[0.5rem] hover:gap-[1rem] transition-all"
        >
          <p>Shop Now</p>
          <FaArrowRight className="" />
        </Link>
      </div>
      <div className="relative border p-5 h-[17rem] flex justify-center items-center">
        <p className="font-bold text-default-500 text-xl">No Items Found</p>
      </div>
    </div>
  );
};

export default HomeProductSectionNotFound;
