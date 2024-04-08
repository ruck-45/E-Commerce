import React from "react";
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

const OrderModal: React.FC<any> = ({ order, onClose, show }) => {
  const navigate = useNavigate();
  const apiUrl = useSelector((state: RootState) => state.apiConfig.value);
  const orderItem = JSON.parse(order.items);
  console.log("orderItem: ", orderItem);
  return (
    <>
      <Modal
        className="next-modal-wrapper p-[2rem] flex flex-col"
        isOpen={show}
        onOpenChange={onClose}
        size="2xl"
        scrollBehavior="outside"
      >
        <ModalContent>
          {(show) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-center text-black font-bold text-2xl">
                Order Details
              </ModalHeader>
              <Divider />
              <ModalBody className="flex flex-col text-start py-[1rem]">
                <div className="text-gray-600 text-lg">
                  <strong>Order ID:</strong> {order.order_id.slice(0, 9)}...
                  {order.order_id.slice(order.order_id.length - 3 - order.order_id.length)}
                </div>
                <div className="text-gray-600 text-lg">
                  <strong>Order Date:</strong> {order.date.slice(0, 10)}
                </div>
                <div className="text-gray-600 text-lg">
                  <strong>Total Price:</strong> {order.order_price}
                </div>
                <div className="text-gray-600 text-lg">
                  <strong>Order Status:</strong> <span className="text-green-600">{order.status}</span>
                </div>
                <div className="text-gray-600 text-lg">
                  <strong>Shipping Adress:</strong>{" "}
                  <span className="text-black-600">
                    {JSON.parse(order.shipping_info).line1} {JSON.parse(order.shipping_info).line2}{" "}
                    {JSON.parse(order.shipping_info).city} {JSON.parse(order.shipping_info).state}{" "}
                    {JSON.parse(order.shipping_info).country} , {JSON.parse(order.shipping_info).postal_code}
                  </span>
                </div>
                <div className="text-gray-600 text-lg">
                  <strong>Phone :</strong>{" "}
                  <span className="text-gray-600">{JSON.parse(order.shipping_info).phone}</span>
                </div>
                <div className="text-center text-black font-bold text-2xl">Products:</div>
                <Divider />
                <Table  removeWrapper aria-label="Example static collection table">
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
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
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
    </>
  );
};

export default OrderModal;
