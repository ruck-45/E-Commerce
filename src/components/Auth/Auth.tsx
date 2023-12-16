// Dependencies
import { useDispatch } from "react-redux";

// Local Files
import { updateTab } from "../../store/curTabSlice";
import UserAuth from "./subComponents/UserAuth";

const Auth = () => {
  const dispatch = useDispatch();
  dispatch(updateTab("Auth"));

  return (
    <div className="flex h-screen justify-center UserAuth py-[3rem]">
      <UserAuth />
    </div>
  );
};

export default Auth;
