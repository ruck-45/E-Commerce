// Dependencies
import { useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";

// Local Files
import EmailForm from "./suComponents/EmailForm";
import Map from "./suComponents/Map";
import ImageRow from "../Home/SubComponents/ImageRow";

import { scrollTop } from "../../utils/controllers";
import { updateTab } from "../../Redux/Slices/curTabSlice";
import { FaHome } from "react-icons/fa";
import EmailContact from "../Home/SubComponents/EmailContact";

const Contact = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  dispatch(updateTab("Contact"));

  const location = useLocation();
  const { offset } = location.state || {};
  scrollTop(offset);

  return (
    <>
      <div className="flex flex-row gap-x-[1rem] px-[3rem] lg:px-[8rem] mt-[2rem]">
        <Link className="font-bold flex gap-[1rem] cursor-pointer" to="/Home">
          <FaHome className="mt-[0.3rem]" />
          Home
        </Link>
        <p> {">"} Contact</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-start px-[3rem] lg:pl-0 lg:pr-[5rem]">
        <EmailForm />
        <Map />
      </div>
      <EmailContact />
      <ImageRow />
    </>
  );
};

export default Contact;
