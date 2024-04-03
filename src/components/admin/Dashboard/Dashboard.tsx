import React from "react";
import DashboardStatsGrid from "./DashboardStatsGrid";
import RecentOrders from "./RecentOrders";
import Pagination from "./Pagination";

const Dashboard: React.FC = () => {
  return (
    <div className="flex flex-col gap-2 ">
      <DashboardStatsGrid />
      <RecentOrders />
        <Pagination />
      
    </div>
  );
};

export default Dashboard;
