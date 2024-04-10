import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Image,
  Divider,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../../Redux/store";
import { useSelector } from "react-redux";
import axios from "axios";
import toast, { Toaster, ToastPosition } from "react-hot-toast";
import { getCookie } from "../../../utils/cookies";

const toastSetting: {
  position: ToastPosition;
} = { position: "top-center" };

const successToast = (message: string): void => {
  toast.success(message, toastSetting);
};

const errorToast = (message: string): void => {
  toast.error(message, toastSetting);
};

const OrderModal: React.FC<any> = ({ order, onClose, show, status }) => {
  const token = getCookie("token")
  const navigate = useNavigate();
  const apiUrl = useSelector((state: RootState) => state.apiConfig.value);
  const orderItem = JSON.parse(order.items);
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);


  const cancelOrder = async (e: any) => {
    e.preventDefault();
    try {
      const cancelOrderRes = await axios.post(`${apiUrl}/users/cancelOrder/${order.order_id}`,{},  {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      console.log("cancelOrder", cancelOrderRes);
      if (!cancelOrderRes.data.success) {
        errorToast(`Error while Cancelling order`)
      }
      successToast(`Order canceled successfully`)
      setIsConfirmationModalOpen(false);
      window.location.reload();
    } catch (error) {
      errorToast(`Internal Server Error`)
    }
  }

  return (
    <>
      <Modal
        className="next-modal-wrapper p-[2rem] flex flex-col"
        isOpen={show}
        onOpenChange={onClose}
        size="2xl"
        scrollBehavior="outside"
        radius="none"
      >
        <ModalContent>
          {(show) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-center text-black font-bold text-2xl">
                Order Details
              </ModalHeader>
              <Divider />
              <Divider />
              <Divider />
              <ModalBody className="flex flex-col text-start py-[1rem]">
                <div className="text-gray-600 text-sm">
                  <strong>Order ID:</strong>{" "}
                  <span style={{ float: "right" }}>
                    {order.order_id.slice(0, 9)}...
                    {order.order_id.slice(order.order_id.length - 3 - order.order_id.length)}
                  </span>
                </div>
                <Divider className="bg-black" />
                <div className="text-gray-600 text-sm">
                  <strong>Order Date:</strong> <span style={{ float: "right" }}>{order.date.slice(0, 10)}</span>
                </div>
                <Divider className="bg-black" />
                <div className="text-gray-600 text-sm">
                  <strong>Total Price:</strong> <span style={{ float: "right" }}>{order.order_price}</span>
                </div>
                <Divider className="bg-black h-[0.5px]" />
                <div className="text-gray-600 text-sm">
                  <strong>Order Status:</strong>{" "}
                  <span className="text-green-600" style={{ float: "right" }}>
                    {order.status}
                  </span>
                </div>
                <Divider className="bg-black" />
                <div className="text-gray-600 text-sm">
                  <strong>Shipping Adress:</strong>{" "}
                  <span className="text-black-600" style={{ float: "right" }}>
                    {JSON.parse(order.shipping_info).line1} {JSON.parse(order.shipping_info).line2}{" "}
                    {JSON.parse(order.shipping_info).city} {JSON.parse(order.shipping_info).state}{" "}
                    {JSON.parse(order.shipping_info).country} , {JSON.parse(order.shipping_info).postal_code}
                  </span>
                </div>
                <Divider className="bg-black" />
                <div className="text-gray-600 text-sm">
                  <strong>Phone :</strong>{" "}
                  <span className="text-gray-600" style={{ float: "right" }}>
                    {JSON.parse(order.shipping_info).phone}
                  </span>
                </div>
                <Divider className="bg-black h-[0.5px]" />
                <div className="text-center text-black font-bold text-2xl">Products:</div>
                <Divider />
                <Table removeWrapper aria-label="Example static collection table">
                  <TableHeader>
                    <TableColumn>S.NO</TableColumn>
                    <TableColumn>QUANTITY</TableColumn>
                    <TableColumn>PRICE</TableColumn>
                    <TableColumn>{""}</TableColumn>
                  </TableHeader>
                  <TableBody>
                    {orderItem.map((item: any, index: number) => (
                      <TableRow key={index}>
                        <TableCell>{index + 1}</TableCell>
                        <TableCell>{item.itemCount}</TableCell>
                        <TableCell>{item.discountedPrice}</TableCell>
                        <TableCell
                          onClick={() => {
                            navigate(`/ProductDetails/item/${item.itemId}`);
                          }}
                          className="cursor-pointer"
                        >
                          <Image
                            src={`${apiUrl}/items/itemImages/${item.itemId}_img1.jpg`}
                            radius="none"
                            loading="lazy"
                            width={50}
                            style={{
                              float: "right",
                              borderRadius: "20px",
                            }}
                            alt="error while fetching image"
                          />
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </ModalBody>
              <Divider />
              <Divider />
              <Divider />
              <ModalFooter>
                {status && (
                  <Button
                    color="success"
                    radius="none"
                    variant="ghost"
                    onPress={() => setIsConfirmationModalOpen(true)}
                    className=""
                  >
                    Cancel Order
                  </Button>
                )}
                <Button color="danger" radius="none" variant="solid" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      {show && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backdropFilter: "blur(5px)", // Adjust blur radius as needed
            backgroundColor: "rgba(255, 255, 255, 0.5)", // Adjust background color and opacity
            zIndex: 1,
          }}
          onClick={onClose} // Close modal when clicking on the backdrop
        />
      )}
      <Modal
        isOpen={isConfirmationModalOpen}
        onClose={() => setIsConfirmationModalOpen(false)}
        size="sm"
        className="border-black-700 text-red-500"
        style={{ border: "2px solid yellow" }}
        radius="none"
      >
        <ModalHeader></ModalHeader>
        <ModalContent>
          <h4 className="text-center m-9 text-lg">Are you sure you want to cancel the order ?</h4>
          <Divider/>
          <ModalFooter>
            <Button color="danger" variant="light" className="mx-5" onClick={cancelOrder}>
              OK
            </Button>
            <Button
              color="success"
              variant="ghost"
              onClick={() => setIsConfirmationModalOpen(false)}
            >
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Toaster />
    </>
  );
};

export default OrderModal;
