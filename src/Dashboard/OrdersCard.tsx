import React from "react";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import { getOrderStatus } from "./lib/constants/Helper";

interface Order {
  sr_no: string;
  customer_name: string;
  order_date: string;
  order_total: string;
  current_order_status: string;
  shipment_address: string;
}

interface OrdersCardProps {
  order: Order;
}

const OrdersCard: React.FC<OrdersCardProps> = ({ order }) => {
  return (
    <div className="bg-gray-100 rounded-lg border border-gray-200 shadow-md my-4 w-full md:w-full">
      <div className="p-4 md:p-6 lg:p-8">
        <div className="text-lg md:text-xl lg:text-2xl text-left font-semibold mb-4">Sr-no: {order.sr_no}</div>
        <div className="text-lg md:text-xl lg:text-2xl text-left font-semibold mb-6">
          Customer Name: {order.customer_name}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="text-lg font-semibold mb-2">Order Date:</div>
            <div>{format(new Date(order.order_date), "dd MMM yyyy")}</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="text-lg font-semibold mb-2">Order Total:</div>
            <div>{order.order_total}</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="text-lg font-semibold mb-2">Shipping Address:</div>
            <div>{order.shipment_address}</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="text-lg font-semibold mb-2">Order Status:</div>
            <div>
              <span className="inline-block text-white px-2 py-1 rounded-md">
                {getOrderStatus(order.current_order_status)}
              </span>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md col-span-2">
            <Link to={`/customer/${order.customer_name}`} className=" hover:underline">
              View Customer
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrdersCard;
