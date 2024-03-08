// Dependencies
import { useDispatch } from "react-redux";

// Local Files

import { scrollTop } from "../../utils/controllers";
import { updateTab } from "../../Redux/Slices/curTabSlice";

const Services = () => {
  const dispatch = useDispatch();
  dispatch(updateTab("Services"));
  scrollTop();

  return <div>Services</div>;
};

export default Services;
