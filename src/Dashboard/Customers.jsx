import Pagination from "./Pagination";
import React from "react";
const CustomerList = () => {
  const customerData = [
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
      <h1 className="font-bold pb-10 p-5 text-2xl">Customers List</h1>
      <div className="bg-white px-4 pt-3 pb-4 h-full rounded-sm border border-gray-200 flex-1">
        <strong className="text-gray-700 pl-3 text-lg font-medium">Customers</strong>
        <div className="border-x border-gray-200 rounded-sm mt-3 overflow-x-auto">
          <table className="w-full text-gray-700">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2">ID</th>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Phone</th>
                <th className="px-4 py-2" style={{ minWidth: "100px" }}>
                  City
                </th>{" "}
                {/* Adjusted width */}
                <th className="px-4 py-2">State</th>
                <th className="px-4 py-2">Country</th>
                <th className="px-4 py-2">Total Orders</th>
                <th className="px-4 py-2">Total Amount Spent</th>
                <th className="px-4 py-2">Last Order Date</th>
              </tr>
            </thead>
            <tbody>
              {customerData.map((customer) => (
                <tr key={customer.id} className="border-b border-gray-200">
                  <td className="px-4 py-2">{customer.id}</td>
                  <td className="px-4 py-2">{customer.name}</td>
                  <td className="px-4 py-2">{customer.email}</td>
                  <td className="px-4 py-2" style={{ minWidth: "120px" }}>
                    {customer.phone}
                  </td>{" "}
                  {/* Adjusted width */}
                  <td className="px-4 py-2">{customer.city}</td>
                  <td className="px-4 py-2">{customer.state}</td>
                  <td className="px-4 py-2">{customer.country}</td>
                  <td className="px-4 py-2">{customer.totalOrders}</td>
                  <td className="px-4 py-2">{customer.totalAmountSpent}</td>
                  <td className="px-4 py-2">{customer.lastOrderDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Pagination />
    </div>
  );
};

export default CustomerList;
