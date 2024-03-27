import React from "react";
// import { Link } from "react-router-dom";
import DashboardStatsGrid from "./DashboardStatsGrid";
// import TransactionChart from "./TransactionChart";
import RecentOrders from "./RecentOrders";
// import PopularProducts from "./PopularProducts";
// import BuyerProfilePieChart from "./BuyerProfilePieChart";
import Pagination from "./Pagination";

const Dashboard: React.FC = () => {
  return (
    <div className="flex flex-col gap-4">
      <DashboardStatsGrid />
      {/* <div className="flex flex-row gap-4 w-full">
        {/* <TransactionChart /> */}
      {/* <BuyerProfilePieChart /> */}
      {/* </div> */}
      <div className="flex flex-row gap-4 w-full">
        <RecentOrders />

        {/* <PopularProducts /> */}
      </div>
      <div>
        {" "}
        <Pagination />
      </div>
    </div>
  );
};

export default Dashboard;
