import React from "react";
import { useDispatch } from "react-redux";
import { updateTab } from "../Redux/Slices/curTabSlice";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { Classnames } from "react-alice-carousel";

const Layout: React.FC = () => {
  const dispatch = useDispatch();
  dispatch(updateTab("Layout"));

  return (
    <div className="bg-neutral-100 h-screen w-screen overflow-hidden flex flex-row">
      < Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <div className="flex-1 p-4 min-h-0 overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
