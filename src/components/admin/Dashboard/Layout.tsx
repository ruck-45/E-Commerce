import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";

import HomeLayout from "./Layout/HomeLayout";
import { updateTab } from "../../../Redux/Slices/curTabSlice";

const Layout = () => {
  const dispatch = useDispatch();
  dispatch(updateTab("Admin"));

  return (
    <div>
      <HomeLayout>
        <Outlet />
      </HomeLayout>
    </div>
  );
};

export default Layout;
