import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const HomeCard = () => {
  return (
    <div className="px-[3rem] md:px-[5rem] py-[3rem]">
      <div
        className="rounded-xl md:px-[5rem] py-[5rem] flex justify-center md:justify-end bg-no-repeat bg-top bg-cover"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1594040226829-7f251ab46d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        }}
      >
        <div className="md:mr-[5rem] p-[2rem] bg-[rgba(0,0,0,0.5)] rounded-xl text-white">
          <div className="py-[1rem]">
            <h3 className="text-start text-[1.2rem]  font-thin">BEST QUALITY</h3>
          </div>
          <div className="py-[1rem]">
            <h1 className="text-start text-5xl font-bold ">
              Exquisite <br />
              Selection
            </h1>
          </div>
          <div className="  py-[0.5rem] ">
            <p className="text-start">
              Curated Collection of <br />
              Rare Antiques & Carpets for <br /> Discerning Collectors.
            </p>
          </div>
          <Link
            to="/Shop"
            className="flex flex-row justify-start items-center text-[1rem] font-medium py-[1rem] gap-[0.5rem] hover:gap-[1rem] transition-all"
          >
            <p>Shop Now</p>
            <FaArrowRight className="" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
