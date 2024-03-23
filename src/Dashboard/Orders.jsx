import React from "react";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import { getOrderStatus } from "./lib/constants/Helper";
import Pagination from "./Pagination";
const OrderData = [
  {
    sr_no: "1",
    customer_name: "Aarav Patel",
    order_date: "2022-05-17T03:24:00",
    order_total: "₹435.50",
    current_order_status: "PLACED",
    shipment_address: "Mumbai, Maharashtra",
  },
  {
    sr_no: "2",
    customer_name: "Ananya Singh",
    order_date: "2022-05-14T05:24:00",
    order_total: "₹96.35",
    current_order_status: "SHIPPED",
    shipment_address: "New Delhi, Delhi",
  },
  {
    sr_no: "3",
    customer_name: "Aditya Rao",
    order_date: "2022-05-17T07:14:00",
    order_total: "₹836.44",
    current_order_status: "SHIPPED",
    shipment_address: "Bangalore, Karnataka",
  },
  {
    sr_no: "4",
    customer_name: "Neha Gupta",
    order_date: "2022-05-16T12:40:00",
    order_total: "₹334.50",
    current_order_status: "SHIPPED",
    shipment_address: "Chennai, Tamil Nadu",
  },
  {
    sr_no: "5",
    customer_name: "Arjun Kumar",
    order_date: "2022-05-14T03:24:00",
    order_total: "₹876.00",
    current_order_status: "OUT_FOR_DELIVERY",
    shipment_address: "Kolkata, West Bengal",
  },
  {
    sr_no: "6",
    customer_name: "Isha Sharma",
    order_date: "2022-05-14T05:24:00",
    order_total: "₹96.35",
    current_order_status: "DELIVERED",
    shipment_address: "Hyderabad, Telangana",
  },
  // Add more orders here
  {
    sr_no: "7",
    customer_name: "Rahul Gupta",
    order_date: "2022-05-16T09:00:00",
    order_total: "₹550.00",
    current_order_status: "PLACED",
    shipment_address: "Pune, Maharashtra",
  },
  {
    sr_no: "8",
    customer_name: "Priya Singh",
    order_date: "2022-05-17T11:30:00",
    order_total: "₹345.67",
    current_order_status: "SHIPPED",
    shipment_address: "Jaipur, Rajasthan",
  },
  {
    sr_no: "9",
    customer_name: "Varun Sharma",
    order_date: "2022-05-18T15:45:00",
    order_total: "₹789.99",
    current_order_status: "DELIVERED",
    shipment_address: "Ahmedabad, Gujarat",
  },
];

const Orders = () => {
  return (
    <div className="sticky top-0 bg-white">
      <h1 className="font-bold pb-10 p-5 text-2xl">Total Orders</h1>
      <div className="bg-white px-4 pt-3 pb-4 h-full rounded-sm border border-gray-200 flex-1 overflow-auto">
        <strong className="text-gray-700 pl-3 text-lg font-medium">Orders</strong>
        <div className="border-x border-gray-200 rounded-sm mt-3">
          <table className="w-full text-gray-700">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2">Sr-No</th>
                <th className="px-4 py-2">Customer Name</th>
                <th className="px-4 py-2">Order Date</th>
                <th className="px-4 py-2">Order Total</th>
                <th className="px-4 py-2">Shipping Address</th>
                <th className="px-4 py-2">Order Status</th>
              </tr>
            </thead>
            <tbody>
              {OrderData.map((order) => (
                <tr key={order.sr_no} className="border-b border-gray-200">
                  <td className="px-4 py-2">{order.sr_no}</td>
                  <td className="px-4 py-2">
                    <Link to={`/customer/${order.customer_name}`}>{order.customer_name}</Link>
                  </td>
                  <td className="px-4 py-2">{format(new Date(order.order_date), "dd MMM yyyy")}</td>
                  <td className="px-4 py-2">{order.order_total}</td>
                  <td className="px-4 py-2">{order.shipment_address}</td>
                  <td className="px-4 py-2">
                    <span className="inline-block text-white px-2 py-1 rounded-md ">
                      {getOrderStatus(order.current_order_status)}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div>
        <Pagination />
      </div>
    </div>
  );
};

export default Orders;
