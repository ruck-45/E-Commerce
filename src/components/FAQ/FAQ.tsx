// Dependencies
import { useDispatch } from "react-redux";

// Local Files
import { updateTab } from "../../store/curTabSlice";

const FAQ = () => {
  const dispatch = useDispatch();
  dispatch(updateTab("FAQ"));

  return <div>FAQ</div>;
};

export default FAQ;
