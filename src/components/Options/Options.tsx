// Dependencies
import { useDispatch } from "react-redux";

// Local Files
import { updateTab } from "../../store/curTabSlice";

const Options = () => {
  const dispatch = useDispatch();
  dispatch(updateTab("Services"));

  return <div>Options</div>;
};

export default Options;
