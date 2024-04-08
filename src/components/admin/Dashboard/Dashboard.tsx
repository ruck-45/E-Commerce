import React, { useEffect, useState } from "react";
import DashboardStatsGrid from "./DashboardStatsGrid";
import RecentOrders from "./RecentOrders";
import { useSelector } from "react-redux";
import { RootState } from "../../../Redux/store";
import { getCookie } from "../../../utils/cookies";
import axios from "axios";

const Dashboard: React.FC = () => {

  const [orders, setOrders] = useState([]); 

  const apiUrl = useSelector((state: RootState) => state.apiConfig.value);
  const token = getCookie("token");
  const [customerList, setCustomerList] = useState([]);

  const fetchOrders = async () => {
    try {
      const response = await axios.get(`${apiUrl}/admin/getOrders`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data.payload);
      setOrders(response.data.payload.orders);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

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
    fetchOrders();
    getAllCustomer();
  }, []);

  return (
    <div className="flex flex-col gap-2 ">
      <DashboardStatsGrid orders={orders} customer={customerList}/>
      <RecentOrders orders={orders}/>
    </div>
  );
};

export default Dashboard;
