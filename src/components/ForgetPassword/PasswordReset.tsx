// Dependencies
import { useDispatch } from "react-redux";

// Local Files

import AuthCard from "../Auth/subComponents/AuthCard";
import loginBg from "../Auth/assets/loginBg.jpg";
import ForgetPassword from "./subComponents/ForgetPassword";
import { updateTab } from "../../Redux/Slices/curTabSlice";

const PasswordReset = () => {
  const dispatch = useDispatch();
  dispatch(updateTab("Password Reset"));
  return (
    <div className="flex h-screen justify-center lg:justify-between items-center authcardbg">
      <AuthCard className="hidden lg:flex grow h-full" />
      <ForgetPassword />
    </div>
  );
};

export default PasswordReset;
