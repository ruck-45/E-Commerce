import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../Redux/store";
import { getCookie } from "../../../utils/cookies";
import { Button } from "@nextui-org/react";
import "../subComponents/Order.css";
import axios from "axios";
import OrderModal from "./OrderModal"; // Import the modal component

export const MyOrders = () => {
  const [orders, setOrders] = useState([]); // Change to an array of orders
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(3); // Number of items per page
  const [selectedOrder, setSelectedOrder] = useState<any>(); // State to store the selected order
  const [showModal, setShowModal] = useState(false); // State to manage modal visibility

  const apiUrl = useSelector((state: RootState) => state.apiConfig.value);
  const token = getCookie("token");

  const fetchOrders = async () => {
    try {
      const response = await axios.get(`${apiUrl}/users/orders`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("response.data.payload.orders", response.data.payload.orders);
      setOrders(response.data.payload.orders);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const totalPages = Math.ceil(orders.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentOrders = orders.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleViewOrderClick = (order: any) => {
    setSelectedOrder(order);
    setShowModal(true);
    console.log("selected order", selectedOrder);
  };

  const handleCloseModal = () => {
    setShowModal(false); // Hide the modal
  };

  return (
    <div className="content-wrapper">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-3 flex-shrink-0 flex-wrap lg:flex-shrink-0 lg:flex-wrap xl:flex-shrink-0 xl:flex-wrap mx-2">
        {currentOrders.length > 0 ? (
          currentOrders.map((order: any, index: number) => (
            <div key={index}>
              <div className="card-content-wrapper bg-yellow-100 rounded-t-lg p-4 border-b border-gray-200 shadow-md w-full">
                <div>
                  <div className="text-gray-600 text-lg mb-2">
                    <strong>Order ID:</strong> {order.order_id.slice(0, 9)}...
                    {order.order_id.slice(order.order_id.length - 3 - order.order_id.length)}
                  </div>
                  <div className="text-gray-600 text-lg mb-2">
                    <strong>Order Date:</strong> {order.date.slice(0, 10)}
                  </div>
                  <div className="text-gray-600 text-lg mb-2">
                    <strong>Total Price:</strong> {order.order_price}
                  </div>
                  <div className="text-gray-600 text-lg mb-2">
                    <strong>Order Status:</strong> <span className="text-green-600">{order.status}</span>
                  </div>
                  <Button onClick={() => handleViewOrderClick(order)} className="custom-button" color="success">
                    View Order
                  </Button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div>No Orders Found</div>
        )}
      </div>
      <div className="flex justify-center mt-1">
        <Button
          className="mx-2 px-4 py-2 bg-gray-200 rounded"
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Previous
        </Button>
        <Button
          className="mx-2 px-4 py-2 bg-gray-200 rounded"
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
        </Button>
      </div>
      {showModal && <OrderModal order={selectedOrder} onClose={handleCloseModal} show={showModal} />}
    </div>
  );
};
