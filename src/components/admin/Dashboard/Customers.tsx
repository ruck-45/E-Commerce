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
