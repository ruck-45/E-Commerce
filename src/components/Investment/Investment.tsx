// Dependencies
import { useDispatch } from "react-redux";

// Local Files
import { updateTab } from "../../store/curTabSlice";

const Investment = () => {
  const dispatch = useDispatch();
  dispatch(updateTab("Services"));

  return <div>Investment</div>;
};

export default Investment;
