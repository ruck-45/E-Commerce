// Dependencies
import { useDispatch } from "react-redux";
import { updateTab } from "../../Redux/Slices/curTabSlice";

// Local Files

import UserAuth from "./subComponents/UserAuth";
import AuthCard from "./subComponents/AuthCard";

const Auth = () => {
  const dispatch = useDispatch();
  dispatch(updateTab("Auth"));

  return (
    <div className="flex h-screen justify-center lg:justify-between items-center authcardbg">
      <UserAuth />
      <AuthCard className="hidden lg:flex grow h-full" />
    </div>
  );
};

export default Auth;
