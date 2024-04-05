import React, { useEffect, useState } from "react";
import './RecentOrder.css';
import { getCookie } from "../../../utils/cookies";
import { useSelector } from "react-redux";
import { RootState } from "../../../Redux/store";
import RecentOrdersCard from './RecentOrdersCard';

import axios from "axios";

const RecentOrders = (props:any) => {
  

  return (
    <div className="flex flex-col my-8 items-center w-[95rem] h-screen global-container">
      <div className="text-3xl font-bold text-center text-green-700 p-[0.5rem] border-b-1 border-green-700">Recent Orders</div>
      <div className="w-full ">
        <RecentOrdersCard orders={props.orders}/>
      </div>
    </div>
  );
};

export default RecentOrders;
