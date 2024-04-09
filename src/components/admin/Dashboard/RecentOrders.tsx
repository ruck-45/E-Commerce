import { useState } from "react";
import "./RecentOrder.css";
import RecentOrdersCard from "./RecentOrdersCard";
import { Button } from "@nextui-org/react";
import { Link } from "react-router-dom";

const RecentOrders = (props: any) => {
  const { orders } = props;

  return (
    <div className="flex flex-col my-8 items-center w-[95rem] h-screen global-container">
      <div className="text-3xl font-bold text-center text-green-700 p-[0.5rem] border-b-1 border-green-700">
        Recent Orders
      </div>
      {orders.length>0 ? (<div className="w-full" >
      <div className="w-full ">
        <RecentOrdersCard orders={orders.slice(0,3)} customer={props.customer}/>
      </div>
      {orders.length>0 && (
        <div className="mt-4 text-center">
          <Link to="/Admin/orders">
            <Button color="default" variant="light" className="bg-yellow-400">
              Show All Orders
            </Button>
          </Link>
        </div>
      )}
      </div>
      ): <span className="text-gray-500 my-10"> No Orders To Show!!!</span> }
    </div>
  );
};

export default RecentOrders;
