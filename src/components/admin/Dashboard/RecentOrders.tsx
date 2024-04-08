import React, { useEffect, useState } from "react";
import './RecentOrder.css';
import { getCookie } from "../../../utils/cookies";
import { useSelector } from "react-redux";
import { RootState } from "../../../Redux/store";
import RecentOrdersCard from './RecentOrdersCard';
import { Button } from "@nextui-org/react";
import { Link } from "react-router-dom";

import axios from "axios";

const RecentOrders = (props:any) => {
  const { orders } = props;
  const [visibleOrders, setVisibleOrders] = useState(1);

  return (
    <div className="flex flex-col my-8 items-center w-[95rem] h-screen global-container">
      <div className="text-3xl font-bold text-center text-green-700 p-[0.5rem] border-b-1 border-green-700">Recent Orders</div>
      <div className="w-full ">
        <RecentOrdersCard orders={orders.slice(0, visibleOrders)} />
      </div>
      {visibleOrders < orders.length && (
        <div className="mt-4">
          <Link to="/Admin/orders">
            <Button color="default" variant="light" className="bg-yellow-400">
              Show More
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default RecentOrders;
