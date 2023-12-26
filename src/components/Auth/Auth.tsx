// Dependencies
import { useDispatch } from "react-redux";

// Local Files
import { updateTab } from "../../store/curTabSlice";
import UserAuth from "./subComponents/UserAuth";
import loginBg from "./assets/loginBg.jpg";

const Auth = () => {
  const dispatch = useDispatch();
  dispatch(updateTab("Auth"));

  return (
    <div
      className="flex h-screen justify-end p-[3rem]"
      style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3) 20%,rgba(0,0,0,0.3)),url(${loginBg})` }}
    >
      <UserAuth />
    </div>
  );
};

export default Auth;
