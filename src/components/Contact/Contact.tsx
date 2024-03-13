// Dependencies
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

// Local Files
import EmailForm from "./suComponents/EmailForm";
import Map from "./suComponents/Map";

import { scrollTop } from "../../utils/controllers";
import { updateTab } from "../../Redux/Slices/curTabSlice";

const Contact = () => {
  const dispatch = useDispatch();
  dispatch(updateTab("Contact"));

  const location = useLocation();
  const { offset } = location.state || {};
  scrollTop(offset);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 justify-start">
      <EmailForm />
      <Map />
    </div>
  );
};

export default Contact;
