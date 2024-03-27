import React from "react";

interface Customer {
  id: number;
  name: string;
  email: string;
  phone: string;
  city: string;
  state: string;
  country: string;
  totalOrders: number;
  totalAmountSpent: string;
  lastOrderDate: string;
}

const CustomerCard: React.FC<{ customer: Customer }> = ({ customer }) => {
  return (
    <div className="bg-gray-100 rounded-lg p-4 border border-gray-200 shadow-md">
      <div className="font-bold text-lg mb-2">{customer.name}</div>
      <div className="text-gray-600 text-sm   mb-2">
        <strong>Email:</strong>: {customer.email}
      </div>
      <div className="text-gray-600 text-sm mb-2">
        {" "}
        <strong>Phone Number:</strong> {customer.phone}
      </div>
      <div className="flex flex-col md:flex-row justify-between">
        <div className="flex-1 md:mr-2">
          <div className="text-sm mb-2">
            <strong>City:</strong> {customer.city}
          </div>
          <div className="text-sm mb-2">
            <strong>State:</strong> {customer.state}
          </div>
          <div className="text-sm mb-2">
            <strong>Country:</strong> {customer.country}
          </div>
        </div>
        <div className=" md:ml-2">
          <div className="text-sm mb-2">
            <strong>Total Orders:</strong> {customer.totalOrders}
          </div>
          <div className="text-sm mb-2">
            <strong>Total Amount Spent:</strong> {customer.totalAmountSpent}
          </div>
          <div className="text-sm mb-2">
            <strong>Last Order Date:</strong> {customer.lastOrderDate}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerCard;
