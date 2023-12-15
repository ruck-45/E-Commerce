// Dependencies
import { useDispatch } from "react-redux";

// Local Files
import { updateTab } from "../../store/curTabSlice";

const Crypto = () => {
  const dispatch = useDispatch();
  dispatch(updateTab("Services"));

  return <div>Crypto</div>;
};

export default Crypto;
