// Dependencies
import { useDispatch } from "react-redux";

// Local Files

import { scrollTop } from "../../utils/controllers";
import { updateTab } from "../../Redux/Slices/curTabSlice";

const Pricing = () => {
  const dispatch = useDispatch();
  dispatch(updateTab("Pricing"));
  scrollTop();

  return <div>Pricing</div>;
};

export default Pricing;
