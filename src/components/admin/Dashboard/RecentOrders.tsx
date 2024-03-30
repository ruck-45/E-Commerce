import React from "react";
import RecentOrdersCard from "./RecentOrdersCard";
import { OrderData } from "./Orders";

const RecentOrders = () => {
  const orders = OrderData;

  return (
    <div className="sticky top-0 bg-white">
      <div className="bg-white px-4 pt-3 pb-4 h-full rounded-sm border border-gray-200 flex-1 overflow-auto">
        <h1 className="font-bold pb-2 p-4 text-2xl text-left xl:text-center">Recent Orders</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-3 md:flex-shrink-0 md:flex-wrap lg:flex-shrink-0 lg:flex-wrap xl:flex-shrink-0 xl:flex-wrap mx-2">
          {orders.map((order) => (
            <RecentOrdersCard key={order.sr_no} order={order} />
          ))}
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default RecentOrders;
