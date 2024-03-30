import React from "react";
import OrdersCard from "./OrdersCard"; // Import the OrdersCard component
import Pagination from "./Pagination";

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

const OrderData: Order[] = [
  {
    sr_no: "1",
    customer_name: "Aarav Patel",
    order_date: "2022-05-17T03:24:00",
    order_total: "₹435.50",
    current_order_status: "PLACED",
    shipment_address: "Mumbai, Maharashtra",
    phone_number: "1234567890",
    product_name: "Product 1",
    product_image_url: "https://cdn.pixabay.com/photo/2015/09/26/09/08/hipster-958805_1280.jpg",
    quantity: 2,
  },
  {
    sr_no: "2",
    customer_name: "Ananya Singh",
    order_date: "2022-05-14T05:24:00",
    order_total: "₹96.35",
    current_order_status: "PLACED",
    shipment_address: "New Delhi, Delhi",
    phone_number: "9876543210",
    product_name: "Product 2",
    product_image_url: "https://cdn.pixabay.com/photo/2018/06/29/01/47/piano-3505109_640.jpg",
    quantity: 1,
  },
  {
    sr_no: "3",
    customer_name: "Aditya Rao",
    order_date: "2022-05-17T07:14:00",
    order_total: "₹836.44",
    current_order_status: "SHIPPED",
    shipment_address: "Bangalore, Karnataka",
    phone_number: "5555555555",
    product_name: "Product 3",
    product_image_url: "https://cdn.pixabay.com/photo/2013/07/13/10/06/violin-156558_640.png",
    quantity: 3,
  },
  {
    sr_no: "4",
    customer_name: "Neha Gupta",
    order_date: "2022-05-16T12:40:00",
    order_total: "₹334.50",
    current_order_status: "SHIPPED",
    shipment_address: "Chennai, Tamil Nadu",
    phone_number: "6666666666",
    product_name: "Product 4",
    product_image_url: "https://cdn.pixabay.com/photo/2015/09/26/09/09/hipster-958806_640.jpg",
    quantity: 2,
  },
  {
    sr_no: "5",
    customer_name: "Arjun Kumar",
    order_date: "2022-05-14T03:24:00",
    order_total: "₹876.00",
    current_order_status: "OUT_FOR_DELIVERY",
    shipment_address: "Kolkata, West Bengal",
    phone_number: "7777777777",
    product_name: "Product 5",
    product_image_url:
      "https://media.istockphoto.com/id/832990938/photo/person-cleaning-carpet-with-vacuum-cleaner.jpg?s=612x612&w=0&k=20&c=M2PuEJzJ3xOCTlgl-UwkXizizV1946ghxWBD2VH_Fb0=",
    quantity: 1,
  },
  {
    sr_no: "6",
    customer_name: "Isha Sharma",
    order_date: "2022-05-14T05:24:00",
    order_total: "₹96.35",
    current_order_status: "DELIVERED",
    shipment_address: "Hyderabad, Telangana",
    phone_number: "8888888888",
    product_name: "Product 6",
    product_image_url:
      "https://media.istockphoto.com/id/928084114/photo/young-male-worker-in-overalls-rolling-carpet.jpg?s=612x612&w=0&k=20&c=DKOzPDaEOU7MsZw4HccEWRW9T0Ijcs4wPe_ewK7IPLc=",
    quantity: 1,
  },
  {
    sr_no: "7",
    customer_name: "Rahul Gupta",
    order_date: "2022-05-16T09:00:00",
    order_total: "₹550.00",
    current_order_status: "PLACED",
    shipment_address: "Pune, Maharashtra",
    phone_number: "9999999999",
    product_name: "Product 7",
    product_image_url:
      "https://media.istockphoto.com/id/1016471162/photo/electronic-room-tower-fan-and-humidifier-on-white-wall-background.jpg?s=612x612&w=0&k=20&c=2OBoHpPqkahcJcS_HPT1w5twjgIMFpJuzzEptWGNFuY=",
    quantity: 2,
  },
  {
    sr_no: "8",
    customer_name: "Priya Singh",
    order_date: "2022-05-17T11:30:00",
    order_total: "₹345.67",
    current_order_status: "SHIPPED",
    shipment_address: "Jaipur, Rajasthan",
    phone_number: "1111111111",
    product_name: "Product 8",
    product_image_url:
      "https://media.istockphoto.com/id/172658075/photo/ventilator.jpg?s=612x612&w=0&k=20&c=yEIR-jKXou-EKKakoR2kNRGRh494iyHSTwWLbvVoYOQ=",
    quantity: 3,
  },
  {
    sr_no: "9",
    customer_name: "Varun Sharma",
    order_date: "2022-05-18T15:45:00",
    order_total: "₹789.99",
    current_order_status: "DELIVERED",
    shipment_address: "Ahmedabad, Gujarat",
    phone_number: "2222222222",
    product_name: "Product 9",
    product_image_url:
      "https://media.istockphoto.com/id/1351842591/vector/air-conditioner-with-cold-wind-waves-air-conditioner-with-flows-of-cold-air-electronic.jpg?s=612x612&w=0&k=20&c=26f1WXAjA7ygtjP0D3cQhnsdiyVWHNiJORECbS89-PY=",
    quantity: 1,
  },
];

const Orders: React.FC = () => {
  return (
    <div className="sticky top-0 bg-white">
      <h1 className="font-bold pb-10 p-5 text-2xl text-left xl:text-center">Total Orders</h1>
      <div className="bg-white px-4 pt-3 pb-4 h-full rounded-sm border border-gray-200 flex-1 overflow-auto">
        <strong className="text-gray-700 pl-3 text-lg text-start md:text-left lg:text-left xl:text-center font-medium md:font-bold lg:font-bold xl:font-bold block text-center">
          Orders
        </strong>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-3">
          {OrderData.map((order) => (
            <OrdersCard key={order.sr_no} order={order} />
          ))}
        </div>
      </div>
      <div>
        <Pagination />
      </div>
    </div>
  );
};

export default Orders;
