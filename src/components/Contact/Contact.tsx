// Dependencies
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

// Local Files
import EmailForm from "./suComponents/EmailForm";
import Map from "./suComponents/Map";
import ImageRow from "../Home/SubComponents/ImageRow";

import { scrollTop } from "../../utils/controllers";
import { updateTab } from "../../Redux/Slices/curTabSlice";
import { FaHome } from "react-icons/fa";

const Contact = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  dispatch(updateTab("Contact"));

  const location = useLocation();
  const { offset } = location.state || {};
  scrollTop(offset);

  return (
    <>
      <div className="flex flex-row gap-x-[1rem] px-[3rem] md:px-[8rem] mt-[2rem]">
        <FaHome className="mt-1" />
        <p className="cursor-pointer font-bold" onClick={() => navigate("/Home")}>Home</p>
        <p> {">"} Contact</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-start">
        <EmailForm />
        <Map />
      </div>
      <ImageRow />
    </>
  );
};

export default Contact;
