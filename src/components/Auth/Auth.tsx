// Dependencies
import { useDispatch } from "react-redux";

// Local Files
import { updateTab } from "../../store/curTabSlice";

const Auth = () => {
  const dispatch = useDispatch();
  dispatch(updateTab("Auth"));

  return <div>Auth</div>;
};

export default Auth;
