import React from "react";
import RecentOrdersCard from "./RecentOrdersCard";
import { OrderData } from "./Orders";

const RecentOrders = () => {
  const orders = OrderData;

  return (
    <div className="flex flex-col justify-center items-center w-[85rem] h-screen">
      <div className="text-3xl font-bold text-green-700 p-[0.5rem] border-b-1 border-green-700">Recent Orders</div>
      <div className="w-full p-[1rem]">
        <RecentOrdersCard />
      </div>
    </div>
  );
};

export default RecentOrders;
