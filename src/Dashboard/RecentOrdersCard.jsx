import React from "react";

interface RecentOrdersCardProps {
  order: {
    id: string,
    product_id: string,
    customer_id: string,
    customer_name: string,
    order_date: string,
    order_total: string,
    current_order_status: string,
    shipment_address: string,
  };
}

const RecentOrdersCard: React.FC<RecentOrdersCardProps> = ({ order }) => {
  return (
    <div className="bg-gray-100  rounded-lg border border-gray-200 shadow-md my-4 w-full md:w-full">
      <div className="p-4 md:p-6 lg:p-8">
        <div className="text-lg md:text-xl lg:text-2xl text-left font-semibold mb-4">Sr-no: {order.id}</div>
        <div className="text-lg md:text-xl lg:text-2xl text-left font-semibold mb-6">
          Customer Name: {order.customer_name}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="text-lg font-semibold mb-2">Order Date:</div>
            <div>{order.order_date}</div>
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
            <div>{order.current_order_status}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentOrdersCard;
