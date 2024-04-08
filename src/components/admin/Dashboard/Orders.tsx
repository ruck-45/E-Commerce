import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../Redux/store";
import { getCookie } from "../../../utils/cookies";
import { Button } from "@nextui-org/react";
import axios from "axios";
import OrdersCard from "../Dashboard/RecentOrdersCard";

function MyOrders() {
  const [orders, setOrders] = useState([]); // Change to an array of orders
  const [currentPage, setCurrentPage] = useState(1);
  const [currentOrders, setCurrentOrders] = useState([]);
  const [itemsPerPage] = useState(10); // Number of items per page

  const apiUrl = useSelector((state: RootState) => state.apiConfig.value);
  const token = getCookie("token");

  const fetchOrders = async () => {
    try {
      const response = await axios.get(`${apiUrl}/users/orders`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setOrders(response.data.payload.orders);
      setCurrentPage(1); 
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };
  console.log('current page', currentPage);

  useEffect(() => {
    fetchOrders();
  }, []);

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setCurrentOrders(orders.slice(startIndex, endIndex));
  }, [orders, currentPage, itemsPerPage]);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <div className="flex flex-col my-8 items-center w-[95rem] h-screen global-container">
      <div className="text-3xl font-bold text-center text-green-700 p-[1rem] border-b-1">
        All Orders
      </div>
      <div className="w-full ">
        <OrdersCard orders={currentOrders} />
      </div>
      <div className="flex mt-4">
        <Button
          color="default"
          variant="light"
          onClick={handlePrevPage}
          className="bg-blue-400 mx-4"
          disabled={currentPage === 1}
        >
          Previous
        </Button>
        <Button
          color="default"
          variant="light"
          onClick={handleNextPage}
          className="bg-yellow-400"
          disabled={currentOrders.length < itemsPerPage}
        >
          Next
        </Button>
      </div>
    </div>
  );
}

export default MyOrders;
