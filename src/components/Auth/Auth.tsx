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
    <div className="h-screen flex flex-row items-center justify-between bg-white">
      <div
        className="lg:inline-block hidden bg-no-repeat bg-cover bg-center w-[60%] h-[100%]"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1551371669-99df523c8850?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        }}
      ></div>
      <div className="flex justify-center items-center grow">
        <UserAuth />
      </div>
    </div>
  );
};

export default Auth;
