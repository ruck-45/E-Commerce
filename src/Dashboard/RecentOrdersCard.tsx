import React from "react";

// type RecentOrdersCardProps ={

//     id: string,
//     product_id: string,
//     customer_id: string,
//     customer_name: string,
//     order_date: string,
//     order_total: string,
//     current_order_status: string,
//     shipment_address: string,

// }
const order = [
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

type cardProps = {
  id: number;
  product_id: string;
  customer_id: string;
  customer_name: string;
  order_date: string;
  order_total: string;
  current_order_status: string;
  shipment_address: string;
};

const RecentOrdersCard = () => {
  return (
    <div>
      {order.map((data) => (
        <div className="bg-gray-100  rounded-lg border border-gray-200 shadow-md my-4 w-full md:w-full">
          <div className="p-4 md:p-6 lg:p-8">
            <div className="text-lg md:text-xl lg:text-2xl text-left font-semibold mb-4">Sr-no: {data.id}</div>
            <div className="text-lg md:text-xl lg:text-2xl text-left font-semibold mb-6">
              Customer Name: {data.customer_name}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="text-lg font-semibold mb-2">Order Date:</div>
                <div>{data.order_date}</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="text-lg font-semibold mb-2">Order Total:</div>
                <div>{data.order_total}</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="text-lg font-semibold mb-2">Shipping Address:</div>
                <div>{data.shipment_address}</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="text-lg font-semibold mb-2">Order Status:</div>
                <div>{data.current_order_status}</div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecentOrdersCard;
