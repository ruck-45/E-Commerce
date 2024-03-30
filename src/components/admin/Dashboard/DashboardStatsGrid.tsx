import React, { ReactNode } from "react";
import { IoBagHandle, IoPieChart, IoPeople, IoCart } from "react-icons/io5";

interface BoxWrapperProps {
  children: ReactNode;
}

const BoxWrapper: React.FC<BoxWrapperProps> = ({ children }) => {
  return <div className="flex items-center p-4 bg-white rounded-lg shadow-md">{children}</div>;
};

const Dashboard: React.FC = () => {
  return (
    <>
      <div className="text-center mt-6 font-normal text-xl sm:text-2xl lg:text-3xl md:text-3xl xl:text-3xl">
        <h6>Dashboard</h6>
      </div>

      <div className="flex flex-wrap py-6 justify-center gap-3 md:gap-6  lg:gap-10  xl:gap-14  ">
        <BoxWrapper>
          <div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-500">
            <IoBagHandle className="text-2xl text-white" />
          </div>
          <div className="pl-4">
            <span className="text-sm text-gray-500 font-light">Total Sales</span>
            <div className="flex items-center">
              <strong className="text-xl text-gray-700 font-semibold">$54232</strong>
              <span className="text-sm text-green-500 pl-2">+343</span>
            </div>
          </div>
        </BoxWrapper>
        <BoxWrapper>
          <div className="rounded-full h-12 w-12 flex items-center justify-center bg-orange-600">
            <IoPieChart className="text-2xl text-white" />
          </div>
          <div className="pl-4">
            <span className="text-sm text-gray-500 font-light">Total Products</span>
            <div className="flex items-center">
              <strong className="text-xl text-gray-700 font-semibold">$3423</strong>
              <span className="text-sm text-green-500 pl-2">-343</span>
            </div>
          </div>
        </BoxWrapper>
        <BoxWrapper>
          <div className="rounded-full h-12 w-12 flex items-center justify-center bg-yellow-400">
            <IoPeople className="text-2xl text-white" />
          </div>
          <div className="pl-4">
            <span className="text-sm text-gray-500 font-light">Total Customers</span>
            <div className="flex items-center">
              <strong className="text-xl text-gray-700 font-semibold">12313</strong>
              <span className="text-sm text-red-500 pl-2">-30</span>
            </div>
          </div>
        </BoxWrapper>
        <BoxWrapper>
          <div className="rounded-full h-12 w-12 flex items-center justify-center bg-green-600">
            <IoCart className="text-2xl text-white" />
          </div>
          <div className="pl-4">
            <span className="text-sm text-gray-500 font-light">Total Orders</span>
            <div className="flex items-center">
              <strong className="text-xl text-gray-700 font-semibold">16432</strong>
              <span className="text-sm text-red-500 pl-2">-43</span>
            </div>
          </div>
        </BoxWrapper>
      </div>
    </>
  );
};

export default Dashboard;
