import Pagination from "./Pagination";
import React, { useEffect, useState } from "react";
import CustomerCard from "./CustomersCard";
import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "../../../Redux/store";
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

const CustomerList: React.FC = () => {
  const apiUrl = useSelector((state: RootState) => state.apiConfig.value);

  const [customerList, setCustomerList] = useState([])

   async function getAllCustomer() {
     try {
       const response = await axios.get(`${apiUrl}/users/customers`);

       const items = response.data.result;
       console.log("print",items);
       setCustomerList(items);
     } catch (error) {
       console.log(error);
       setCustomerList([]);
     }
   }

   useEffect(() => {
    getAllCustomer()
   },[])
  const customerData: Customer[] = [
    {
      id: 1,
      name: "Ramesh Kumar",
      email: "ramesh@example.com",
      phone: "+91 9876543210",
      city: "Mumbai",
      state: "Maharashtra",
      country: "India",
      totalOrders: 15,
      totalAmountSpent: "₹25,000",
      lastOrderDate: "2023-03-15",
    },
    {
      id: 2,
      name: "Priya Sharma",
      email: "priya@example.com",
      phone: "+91 8765432109",
      city: "Delhi",
      state: "Delhi",
      country: "India",
      totalOrders: 10,
      totalAmountSpent: "₹20,500",
      lastOrderDate: "2023-03-18",
    },
    {
      id: 3,
      name: "Suresh Patel",
      email: "suresh@example.com",
      phone: "+91 7654321098",
      city: "Ahmedabad",
      state: "Gujarat",
      country: "India",
      totalOrders: 12,
      totalAmountSpent: "₹22,800",
      lastOrderDate: "2023-03-20",
    },
    {
      id: 4,
      name: "Meena Devi",
      email: "meena@example.com",
      phone: "+91 6543210987",
      city: "Kolkata",
      state: "West Bengal",
      country: "India",
      totalOrders: 18,
      totalAmountSpent: "₹30,750",
      lastOrderDate: "2023-03-14",
    },
    {
      id: 5,
      name: "Amit Singh",
      email: "amit@example.com",
      phone: "+91 5432109876",
      city: "Bangalore",
      state: "Karnataka",
      country: "India",
      totalOrders: 20,
      totalAmountSpent: "₹35,600",
      lastOrderDate: "2023-03-17",
    },
    {
      id: 6,
      name: "Anjali Verma",
      email: "anjali@example.com",
      phone: "+91 4321098765",
      city: "Chennai",
      state: "Tamil Nadu",
      country: "India",
      totalOrders: 8,
      totalAmountSpent: "₹18,200",
      lastOrderDate: "2023-03-19",
    },
    {
      id: 7,
      name: "Rajesh Gupta",
      email: "rajesh@example.com",
      phone: "+91 3210987654",
      city: "Pune",
      state: "Maharashtra",
      country: "India",
      totalOrders: 14,
      totalAmountSpent: "₹24,500",
      lastOrderDate: "2023-03-16",
    },
    {
      id: 8,
      name: "Kavita Singh",
      email: "kavita@example.com",
      phone: "+91 2109876543",
      city: "Hyderabad",
      state: "Telangana",
      country: "India",
      totalOrders: 11,
      totalAmountSpent: "₹21,900",
      lastOrderDate: "2023-03-21",
    },
    {
      id: 9,
      name: "Sanjay Mishra",
      email: "sanjay@example.com",
      phone: "+91 1098765432",
      city: "Jaipur",
      state: "Rajasthan",
      country: "India",
      totalOrders: 16,
      totalAmountSpent: "₹28,300",
      lastOrderDate: "2023-03-13",
    },
    {
      id: 10,
      name: "Pooja Sharma",
      email: "pooja@example.com",
      phone: "+91 0987654321",
      city: "Lucknow",
      state: "Uttar Pradesh",
      country: "India",
      totalOrders: 13,
      totalAmountSpent: "₹23,700",
      lastOrderDate: "2023-03-22",
    },
  ];
  return (
    <div className="sticky top-0 bg-white">
      <div className="bg-white px-4 pt-3 pb-4 h-full rounded-sm flex-1 overflow-auto">
        <h1 className="font-bold pt-7  text-2xl text-left xl:text-center">Customers List</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-3">
          {customerList.map((customer:any) => (
            <CustomerCard  {...customer} />
          ))}
        </div>
      </div>
      <Pagination />
    </div>
  );
};

export default CustomerList;
