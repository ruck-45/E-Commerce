// Dependencies
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

// Local Files

import { scrollTop } from "../../utils/controllers";
import { updateTab } from "../../Redux/Slices/curTabSlice";

const Contact = () => {
  const dispatch = useDispatch();
  dispatch(updateTab("Contact"));

  const location = useLocation();
  const { offset } = location.state || {};
  scrollTop(offset);

  return <div>Contact</div>;
};

export default Contact;
