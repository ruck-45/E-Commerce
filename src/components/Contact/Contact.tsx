// Dependencies
import { useDispatch } from "react-redux";

// Local Files
import { updateTab } from "../../store/curTabSlice";

const Contact = () => {
  const dispatch = useDispatch();
  dispatch(updateTab("Contact"));

  return <div>Contact</div>;
};

export default Contact;
