import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Image,
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
      <Modal className="next-modal-wrapper" isOpen={show} onOpenChange={onClose}>
        <ModalContent>
          {(show) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Order Number : {order.order_id}
              </ModalHeader>
              <ModalBody>
                <div className="text-gray-600 text-lg mb-2">
                  <strong>Order ID:</strong> {order.order_id.slice(0, 9)}...
                  {order.order_id.slice(
                    order.order_id.length - 3 - order.order_id.length
                  )}
                </div>
                <div className="text-gray-600 text-lg mb-2">
                  <strong>Order Date:</strong> {order.date.slice(0, 10)}
                </div>
                <div className="text-gray-600 text-lg mb-2">
                  <strong>Total Price:</strong> {order.order_price}
                </div>
                <div className="text-gray-600 text-lg mb-2">
                  <strong>Order Status:</strong>{" "}
                  <span className="text-green-600">{order.status}</span>
                </div>
                <div className="text-gray-600 text-lg mb-2">
                  <strong>Shipping Adress:</strong>{" "}{" "}
                  <span className="text-black-600">{JSON.parse(order.shipping_info).line1} {" "}{JSON.parse(order.shipping_info).line2}{" "} {JSON.parse(order.shipping_info).city}
                  {" "}{JSON.parse(order.shipping_info).state} {" "}{JSON.parse(order.shipping_info).country} ,{" "}{JSON.parse(order.shipping_info).postal_code}
                  </span>
                </div>
                <div className="text-gray-600 text-lg mb-2">
                  <strong>Phone :</strong>{" "}
                  <span className="text-gray-600">{JSON.parse(order.shipping_info).phone}</span>
                </div>
                <div className="text-gray-600 text-center text-lg mb-2">
                  <strong>Products:</strong>
                </div>
                {orderItem.length > 0 &&
                  orderItem.map((item: any,index:number) => (
                    <div
                      style={{cursor: 'pointer'}}
                      className="text-gray-600 text-lg mb-2"
                      onClick={() => {
                        console.log(order.title);
                        navigate(
                          `/ProductDetails/${order.title}/${item.item_id}`
                        );
                      }}
                      key={item.order_id}
                    >
                    
                      <div className="h-[8.5rem] w-[100%]">
                          <strong>Item {index+1}.</strong> &nbsp;&nbsp;
                          <strong style={{marginLeft:'7%'}}>Order Quantity: {item.itemCount}</strong>
                          <Image
                          src={`${apiUrl}/items/itemImages/${item.itemId}_img1.jpg`}
                          radius="none"
                          loading="lazy"
                          style={{ width: '20%', height: '20%',float: 'right',borderRadius:'40px',bottom:'50px' }}
                          alt="error while fetching image"
                        />
                      </div>
                    </div>
                  ))}
              </ModalBody>
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
