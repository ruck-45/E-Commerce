import React from "react";

interface Order {
  sr_no: string;
  customer_name: string;
  order_date: string;
  order_total: string;
  current_order_status: string;
  shipment_address: {
    street: string;
    city: string;
    state: string;
    country: string;
    pincode: string;
  };
  phone_number: string;
  product_name: string;
  product_image_url: string;
  quantity: number;
  status: string;
}

interface OrdersCardProps {
  order: Order;
}

const OrderCard: React.FC<OrdersCardProps> = ({ order }) => {
  return (
    <div className="bg-gray-100 rounded-lg border border-gray-200 shadow-md w-full md:w-full relative flex flex-wrap flex-shrink-0">
      <div className="bg-gray-100 rounded-t-lg p-4 border-b border-gray-200 shadow-md w-full">
        <div className="text-gray-600 text-lg mb-2">
          <strong>Order ID:</strong> {order.sr_no}
        </div>
        <div className="text-gray-600 text-lg mb-2">
          <strong>Order Date:</strong> {order.order_date}
        </div>
        <div className="text-gray-600 text-lg mb-2">
          <strong>Customer Name:</strong>
          {order.customer_name}
        </div>

        <div className="text-gray-600 text-lg mb-2">
          <strong>Address:</strong> {order.shipment_address.street}, {order.shipment_address.city},
          {order.shipment_address.state}, {order.shipment_address.country} - {order.shipment_address.pincode}
        </div>

        <div className="text-gray-600 text-lg mb-2">
          <strong>Phone Number:</strong> {order.phone_number}
        </div>
        <div className="text-gray-600 text-lg mb-2">
          <strong>Total Price:</strong> {order.order_total}
        </div>
      </div>
      <span className="absolute top-0 right-0 text-white rounded-tr-lg rounded-bl-lg  ">
        {order.status}
      </span>
      <div className="flex items-center mb-2">
        <img className="w-20 h-20 m-4" src={order.product_image_url} alt="Product" />
        <div>
          <h1 className="text-xl font-bold mb-1">Product Name: {order.product_name}</h1>
          <h1 className="text-lg">Quantity: {order.quantity}</h1>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
