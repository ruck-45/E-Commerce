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
    <div
      className="flex h-screen justify-center lg:justify-between sm:px-[5rem] gap-[5rem] items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.3) 20%,rgba(0,0,0,0.3)),url(https://images.unsplash.com/photo-1551371669-99df523c8850?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "bottom",
      }}
    >
      <AuthCard className="hidden lg:flex" />
      <UserAuth />
    </div>
  );
};

export default Auth;
