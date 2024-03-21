import { useDispatch } from "react-redux";
import Navbar from "./Utils/NavBar";
import React from "react";
import { updateTab } from "../../Redux/Slices/curTabSlice";
import AddProduct from "./SubComponent/AddProduct"
const link = ["Create Item", "All Orders", "All Inventory"];


const Admin = () => {
  const dispatch = useDispatch();
  dispatch(updateTab("admin"));

  const changeScreen = (data: String) => {};
  return (
    <>
      <Navbar />
      <div className="flex flex-col bg-white">
        <div className="h-[3rem] bg-[#130F40] px-[3rem] sm:px-[5rem] lg:px-[4rem] flex justify-start items-center text-white gap-x-[0.7rem]">
          
          <p>Admin DashBoard {"»"}</p>
        </div>

        <div className="bg-white h-auto py-[2rem] px-[3rem] lg:px-[5rem] flex flex-col lg:flex-row lg:gap-x-[8rem] gap-y-[2rem] mt-[2rem] lg:mt-0 items-center lg:items-start ">
          <div className="flex lg:flex-col flex-wrap justify-between items-start lg:gap-2 gap-[1rem] lg:p-[2rem]  ">
            {link.map((data) => (
              <button
                onClick={() => changeScreen(data)}
                className="text-1xl font-semibold text-gray-800 border-b-2 py-[0.3rem] "
              >
                {data}
              </button>
            ))}
          </div>
          {/* <Allorders /> */}
        </div>
        <AddProduct/>
      </div>
    </>
  );
};

export default Admin;
