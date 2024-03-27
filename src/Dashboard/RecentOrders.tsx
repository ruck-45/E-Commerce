import React from "react";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import { getOrderStatus } from "./lib/constants/Helper";
import RecentOrdersCard from "./RecentOrdersCard";

interface Order {
  id: string;
  product_id: string;
  customer_id: string;
  customer_name: string;
  order_date: string;
  order_total: string;
  current_order_status: string;
  shipment_address: string;
}

const RecentOrders: React.FC = () => {
  const recentOrderData: Order[] = [
    {
      id: "1",
      product_id: "4324",
      customer_id: "23143",
      customer_name: "Shirley A. Lape",
      order_date: "2022-05-17T03:24:00",
      order_total: "$435.50",
      current_order_status: "PLACED",
      shipment_address: "Cottage Grove, OR 97424",
    },
    {
      id: "2",
      product_id: "7453",
      customer_id: "96453",
      customer_name: "Ryan Carroll",
      order_date: "2022-05-14T05:24:00",
      order_total: "$96.35",
      current_order_status: "SHIPPED",
      shipment_address: "Los Angeles, CA 90017",
    },
    {
      id: "3",
      product_id: "5434",
      customer_id: "65345",
      customer_name: "Mason Nash",
      order_date: "2022-05-17T07:14:00",
      order_total: "$836.44",
      current_order_status: "SHIPPED",
      shipment_address: "Westminster, CA 92683",
    },
    {
      id: "4",
      product_id: "9854",
      customer_id: "87832",
      customer_name: "Luke Parkin",
      order_date: "2022-05-16T12:40:00",
      order_total: "$334.50",
      current_order_status: "SHIPPED",
      shipment_address: "San Mateo, CA 94403",
    },
    {
      id: "5",
      product_id: "8763",
      customer_id: "09832",
      customer_name: "Anthony Fry",
      order_date: "2022-05-14T03:24:00",
      order_total: "$876.00",
      current_order_status: "OUT_FOR_DELIVERY",
      shipment_address: "San Mateo, CA 94403",
    },
    {
      id: "6",
      product_id: "5627",
      customer_id: "97632",
      customer_name: "Ryan Carroll",
      order_date: "2022-05-14T05:24:00",
      order_total: "$96.35",
      current_order_status: "DELIVERED",
      shipment_address: "Los Angeles, CA 90017",
    },
  ];

  return (
    <div className="bg-white  rounded-lg border border-gray-200 shadow-md lg:my-5 w-full md:w-full">
      <div className="p-4 md:p-6 lg:p-8">
        <div className="text-gray-700 text-2xl font-medium md:text-center">Recent Orders</div>
        {recentOrderData.map((order) => (
          <RecentOrdersCard key={order.id} order={order} />
        ))}
      </div>
    </div>
  );
};

export default RecentOrders;
