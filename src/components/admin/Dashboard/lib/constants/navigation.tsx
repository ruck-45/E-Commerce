import React from "react";
import {
  HiOutlineViewGrid,
  HiOutlineCube,
  HiOutlineShoppingCart,
  HiOutlineUsers,
  HiOutlineQuestionMarkCircle,
  HiOutlineCog,
} from "react-icons/hi";
import { RiCoupon5Line } from "react-icons/ri";

interface SidebarLink {
  key: string;
  label: string;
  path: string;
  icon: JSX.Element;
}

export const DASHBOARD_SIDEBAR_LINKS: SidebarLink[] = [
  {
    key: "dashboard",
    label: "Dashboard",
    path: "/",
    icon: <HiOutlineViewGrid />,
  },
  {
    key: "products",
    label: "Products",
    path: "/products",
    icon: <HiOutlineCube />,
  },
  {
    key: "orders",
    label: "Orders",
    path: "/orders",
    icon: <HiOutlineShoppingCart />,
  },
  {
    key: "customers",
    label: "Customers",
    path: "/customers",
    icon: <HiOutlineUsers />,
  },
  {
    key: "coupon",
    label: "Coupons",
    path: "/coupon",
    icon: <RiCoupon5Line />,
  },
];

