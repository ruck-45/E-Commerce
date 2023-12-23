// Dependencies
import { useDispatch } from "react-redux";

// Local Files
import { updateTab } from "../../store/curTabSlice";
import { scrollTop } from "../../utils/scrollTop";

const Services = () => {
  const dispatch = useDispatch();
  dispatch(updateTab("Services"));
  scrollTop();

  return <div>Services</div>;
};

export default Services;
