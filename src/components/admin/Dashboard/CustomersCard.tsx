import React from "react";

interface Customer {
  address: string;
  address_code:string;
  email: string;
  password_hash: string;
  password_salt:string;
  phone: string;
  registration_date: string;
  state: string;
  user_id: string;
  username: string;
}

const CustomerCard = (props:Customer) => {
  return (
    <div className="bg-gray-100 rounded-lg p-4 border border-gray-200 shadow-md">
      <div className="font-bold text-lg mb-2">{props.username}</div>
      <div className="text-gray-600 text-sm   mb-2">
        <strong>Email:</strong>: {props.email}
      </div>
      <div className="text-gray-600 text-sm mb-2">
        {" "}
        <strong>Phone Number:</strong> {props.phone}
      </div>
      <div className="flex flex-col md:flex-row justify-between">
        <div className="flex-1 md:mr-2">
          {/* <div className="text-sm mb-2">
            <strong>City:</strong> {customer.city}
          </div> */}
          <div className="text-sm mb-2">
            <strong>State:</strong> {props.state}
          </div>
          <div className="text-sm mb-2">
            <strong>Address:</strong> {props.address_code}
          </div>
        </div>
        <div className=" md:ml-2">
          <div className="text-sm mb-2">
            <strong>Total Orders:</strong> 12
          </div>
          <div className="text-sm mb-2">
            <strong>Total Amount Spent:</strong> 2587
          </div>
          <div className="text-sm mb-2">
            <strong>Last Order Date:</strong> 22/07/2023
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerCard;
