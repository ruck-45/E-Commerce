import React from "react";
import { getOrderStatus } from "./lib/constants/Helper";

interface Order {
  sr_no: string;
  customer_name: string;
  order_date: string;
  order_total: string;
  current_order_status: string;
  shipment_address: string;
  phone_number: string;
  product_name: string;
  product_image_url: string;
  quantity: number;
}

interface OrdersCardProps {
  order: Order;
}

const OrdersCard: React.FC<OrdersCardProps> = ({ order }) => {
  return (
    <div className="bg-gray-100 rounded-lg border flex-wrap shrink-0 border-gray-200 shadow-md my-4 w-full md:w-full relative">
      <div className="bg-gray-100 rounded-t-lg p-4 border-b border-gray-200 shadow-md">
        <div className="font-bold text-lg mb-2">{order.customer_name}</div>
        <div className="text-gray-600 text-lg mb-2">
          <strong>Order ID:</strong> {order.sr_no}
        </div>
        <div className="text-gray-600 text-lg  mb-2">
          <strong>Order Date:</strong> {order.order_date}
        </div>
        <div className="text-gray-600 text-lg  mb-2">
          <strong>Address:</strong> {order.shipment_address}
        </div>
        <div className="text-gray-600 text-lg  mb-2">
          <strong>Phone Number:</strong> {order.phone_number}
        </div>
        <div className="text-gray-600 text-lg  mb-2">
          <strong>Total Price:</strong> {order.order_total}
        </div>
      </div>
      <span className="absolute top-0 right-0 text-white  rounded-tr-lg rounded-bl-lg">
        {getOrderStatus(order.current_order_status)}
      </span>
      <div className="flex items-center mb-2">
        <img className="w-20 h-20 m-4 " src={order.product_image_url} alt="Product" />
        <div>
          <h1 className="text-xl font-bold mb-1">Product Name: {order.product_name}</h1>
          <h1 className="text-lg">Quantity: {order.quantity}</h1>
        </div>
      </div>
      <div className="flex items-center mb-2">
        <img className="w-20 h-20 m-4 " src={order.product_image_url} alt="Product" />
        <div>
          <h1 className="text-xl font-bold mb-1">Product Name: {order.product_name}</h1>
          <h1 className="text-lg">Quantity: {order.quantity}</h1>
        </div>
      </div>
    </div>
  );
};

export default OrdersCard;
