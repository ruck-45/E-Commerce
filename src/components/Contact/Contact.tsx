// Dependencies
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";

// Local Files
import EmailForm from "./suComponents/EmailForm";
import Map from "./suComponents/Map";
import ImageRow from "../Home/SubComponents/ImageRow";

import { scrollTop } from "../../utils/controllers";
import { updateTab } from "../../Redux/Slices/curTabSlice";
import { FaHome } from "react-icons/fa";
import EmailContact from "../Home/SubComponents/EmailContact";

const Contact = () => {
  const dispatch = useDispatch();
  dispatch(updateTab("Contact"));

  const location = useLocation();
  const { offset } = location.state || {};
  scrollTop(offset);

  return (
    <>
      <div className="w-full flex flex-col justify-center items-center px-[5rem] py-[1.5rem] text-black bg-[#f4f4f4]">
        <h1 className="text-lg font-bold">CONTACT US</h1>
        <p className="text-sm">Home / Contact Us</p>
      </div>
      <div className="flex flex-row gap-x-[0.7rem] px-[3rem] lg:px-[8rem] mt-[2rem]">
        <Link className="font-bold cursor-pointer flex gap-2" to="/Home">
          <FaHome className="mt-[0.3rem]" />
          <p>Home</p>
        </Link>
        <p> {"»"} </p>
        <p>Contact</p>
      </div>
      <EmailForm />
      <Map />
    </>
  );
};

export default Contact;
