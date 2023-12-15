// Dependencies
import { useDispatch } from "react-redux";

// Local Files
import { updateTab } from "../../store/curTabSlice";

const Retirement = () => {
  const dispatch = useDispatch();
  dispatch(updateTab("Services"));
  
  return <div>Retirement</div>;
};

export default Retirement;
