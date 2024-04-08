import React, { ReactNode, useEffect, useState } from "react";
import { IoBagHandle, IoPieChart, IoPeople, IoCart } from "react-icons/io5";
import { getCookie } from "../../../utils/cookies";
import { useSelector } from "react-redux";
import { RootState } from "../../../Redux/store";
import axios from "axios";

interface BoxWrapperProps {
  children: ReactNode;
}

const BoxWrapper: React.FC<BoxWrapperProps> = ({ children }) => {
  return <div className="flex items-center p-4 bg-white rounded-lg shadow-md">{children}</div>;
};

interface DashboardProps {
  orders: any[]; 
  customer: any[];
}

const Dashboard: React.FC<DashboardProps> = ({ orders,customer })=> {

  const deliveredOrders = orders.filter(order => order.status === "shipped");
  console.log(deliveredOrders);
  const totalDeliveredAmount = deliveredOrders.reduce((acc, order) => acc + (order.order_price), 0);
  const [items,setItems]=useState([]);
  const apiUrl = useSelector((state: RootState) => state.apiConfig.value);

  async function getProducts(){
    try {
      const response = await axios.get(`${apiUrl}/items/getItems`);
      const items = response.data.payload.result;
      setItems(items);
    } catch (error) {
      console.log(error);
      setItems([]);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <div className="text-center mt-6 font-normal text-xl sm:text-2xl lg:text-3xl md:text-3xl xl:text-3xl">
        <h6>Dashboard</h6>
      </div>

      <div className="flex flex-wrap py-6 justify-center  gap-md:gap-6 lg:gap-8 xl:gap-12 ">
        <BoxWrapper>
          <div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-500">
            <IoBagHandle className="text-2xl text-white" />
          </div>
          <div className="pl-4">
            <span className="text-sm text-gray-500 font-light">Total Sales</span>
            <div className="flex items-center">
              <strong className="text-xl text-gray-700 font-semibold">${totalDeliveredAmount}</strong>
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
              <strong className="text-xl text-gray-700 font-semibold">{items.length}</strong>
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
              <strong className="text-xl text-gray-700 font-semibold">{customer.length}</strong>
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
              <strong className="text-xl text-gray-700 font-semibold">{orders.length}</strong>
            </div>
          </div>
        </BoxWrapper>
      </div>
    </>
  );
};

export default Dashboard;
