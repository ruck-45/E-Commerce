import React from "react";
import { FiMenu } from "react-icons/fi";
import { AiFillCloseCircle } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

type MyComponentProps = {
  children: any;
};

const HomeLayout = (props: MyComponentProps) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function changeWidth() {
    const drawerSide = document.getElementsByClassName("drawer-side") as HTMLCollectionOf<HTMLElement>;
    drawerSide[0].style.width = "auto";
  }

  function hideDrawer() {
    const element = document.getElementsByClassName("drawer-toggle") as HTMLCollectionOf<HTMLInputElement>;
    element[0].checked = false;

    changeWidth();
  }

  return (
    <div className="min-h-[90vh] ">
      <div className="drawer absolute left-0 z-50 w-fit">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <label htmlFor="my-drawer" className="cursor-pointer relative">
            <FiMenu onClick={changeWidth} size={"32px"} className="font-bold text-black m-4" />
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-48 h-[100%] sm:w-80 bg-base-300 text-base-content relative text-[1rem] font-bold">
            {/* Sidebar content here */}
            <li className="w-fit absolute right-2 z-50">
              <button onClick={hideDrawer}>
                <AiFillCloseCircle size={24} />
              </button>
            </li>
            <li>
              <Link to="/">Dashboard</Link>
            </li>

            <li>
              <Link to="/contact">Customers</Link>
            </li>
            <li>
              <Link to="/about">All Orders</Link>
            </li>

            <li className="absolute bottom-4 w-[90%] flex flex-row  ">
              <div className="w-full bottom-4 flex items-center justify-center">
                <button className="bg-blue-600 px-[1rem] text-white py-[0.8rem] text-1xl rounded-md w-full ">
                  <Link to="/login">Login</Link>
                </button>
                <button className="bg-orange-600 px-[1rem] text-white py-[0.8rem] text-1xl rounded-md w-full">
                  <Link to="/signup">SignUp</Link>
                </button>
              </div>

              {/* <div className="w-full bottom-4 flex items-center justify-center">
                  <button className="btn-primary px-4 font-semibold rounded-md w-full">
                    <Link to="/layout" >Profile</Link>
                  </button>
                  <button className="btn-secondary px-4 font-semibold rounded-md w-full">
                    <Link to="/layout">Logout</Link>
                  </button>
                </div> */}
            </li>
          </ul>
        </div>
      </div>

      {props.children}
    </div>
  );
};

export default HomeLayout;
