import React, { useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  User,
  Chip,
  Tooltip,
  getKeyValue,
  Image,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { EditIcon } from "./ordersData/EditIcon";
import { EyeIcon } from "./ordersData/EyeIcons";
import { columns, users } from "./ordersData/data";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { RootState } from "../../../Redux/store";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { getCookie } from "../../../utils/cookies";
import toast, { Toaster } from "react-hot-toast";

const statusColorMap: {
  [status: string]:
    | "success"
    | "danger"
    | "warning"
    | "default"
    | "primary"
    | "secondary";
} = {
  pending: "primary",
  cancelled: "danger",
  delivered: "success",
  shipped: "secondary",
};

const status = ["pending", "shipped", "delivered", "cancelled"];

function OrdersCard(props: any) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedOrder, setSelectedOrder] = useState<any>();
  const apiUrl = useSelector((state: RootState) => state.apiConfig.value);
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
  const [isConfirm, setConfirm] = useState(false);
  const { orders, customer } = props;
  const [changedStatus, setStatus] = useState("");
  const navigate = useNavigate();

  const handleDetailsClick = (order: any) => {
    setSelectedOrder(order);
    onOpen();
  };

  const handleCancelOrder = async () => {
    setIsConfirmationModalOpen(true); 
  };

  const changeOrderStatus = async () => {
    const values={
      orderId: selectedOrder.order_id,
      status: changedStatus,
      userEmail: JSON.parse(selectedOrder?.shipping_info)?.email,
      username: 'admin'
    }
    try {
      const changeStatusResponse = await axios.post(
        `${apiUrl}/admin/updateOrderStatus`,
        values,
        {
          headers: {
            Authorization: `Bearer ${getCookie("token")}`,
          },
        }
      );

      console.log('changeorderstataus',changeOrderStatus);

      if (changeStatusResponse.status === 200) {
        toast.success("order status updated successfully");
        setIsConfirmationModalOpen(false);
      } else {
        console.error(
          "Failed to update order status:",
          changeStatusResponse.data
        );
        window.location.reload();
        return false;
      }
    } catch (error) {
      console.error("An error occurred while updating order status:", error);
      toast.error("An error occurred while updating order status");
      return false;
    }
    finally{
      window.location.reload();
    }
  };


  const renderCell = React.useCallback((order: any, columnKey: any) => {
    let cellContent;

    switch (columnKey) {
      case "order_id":
        const order_id = order.order_id;
        cellContent = (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize text-default-900">
              {order_id.slice(0, 7)}....
              {order_id.slice(order_id.length - 5, order_id.length)}{" "}
            </p>
          </div>
        );
        break;
      case "date":
        const date = order.date;
        cellContent = (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize text-default-900">
              {date.slice(0, 10)}
            </p>
            <p className="text-bold text-sm capitalize text-default-900">
              {date.slice(11, 19)}
            </p>
          </div>
        );
        break;
      case "shipping_info":
        const phone = order?.shipping_info
          ? JSON.parse(order.shipping_info)?.phone
          : "";
        cellContent = (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize text-default-900">
              {phone}
            </p>
          </div>
        );
        break;
      case "user_id":
        const email = order?.shipping_info
          ? JSON.parse(order.shipping_info)?.email
          : "";

        const data:[{username:''}]=(customer?.filter((customer:any)=>customer?.user_id===order?.user_id));

        cellContent = (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize text-default-900">
              {email}
            </p>
            <p className="text-bold text-sm capitalize text-default-900">
              {data.length>0 ? data[0].username : ''}
            </p>
          </div>
        );
        break;
      case "status":
        const status = order.status || "";
        cellContent = (
          <Chip
            className="capitalize"
            color={statusColorMap[status]}
            size="sm"
            variant="flat"
          >
            {status}
          </Chip>
        );
        break;
      case "actions":
        cellContent = (
          <div className="relative flex items-center gap-2 justify-center">
            <Tooltip content="Details">
              <Button
                onClick={() => {
                  handleDetailsClick(order);
                  setStatus(order.status);
                }}
              >
                <span className="text-lg text-default-400 cursor-pointer active:opacity-50 ">
                  <EyeIcon />
                </span>
              </Button>
            </Tooltip>
          </div>
        );
        break;
      default:
        cellContent = order[columnKey] || "";
        break;
    }

    return cellContent;
  }, []);

  return (
    <div>
      <Table
        className="text-center"
        aria-label="Example table with custom cells"
      >
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn
              className="text-center"
              key={column.uid}
              align={column.uid === "actions" ? "center" : "start"}
            >
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody items={orders}>
          {(item: any) => (
            <TableRow key={item}>
              {(columnKey) => (
                <TableCell>{renderCell(item, columnKey)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
      <Modal backdrop="opaque" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-blue-500">
                ORDER DETAILS
              </ModalHeader>
              <ModalBody>
                <div className="flex flex-col items-start font-mono">
                  {selectedOrder && (
                    <>
                      <p>
                        <span className="font-semibold text-yellow-500">
                          OrderId:
                        </span>{" "}
                        {selectedOrder.order_id}{" "}
                      </p>
                    </>
                  )}
                  <p>
                    <span className="font-semibold text-yellow-500">
                      Contact:
                    </span>{" "}
                    {JSON.parse(selectedOrder.shipping_info)?.phone}
                  </p>
                  <p>
                    <span className="font-semibold text-yellow-500">
                      Email:
                    </span>{" "}
                    {JSON.parse(selectedOrder.shipping_info)?.email}
                  </p>
                  <p>
                    <span className="font-semibold text-yellow-500">
                      Name:
                    </span>{" "}
                    {((customer?.filter((customer:any)=>customer?.user_id===selectedOrder?.user_id))[0])?.username}
                  </p>
                  <p>
                    <span className="font-semibold text-yellow-500">
                      Address:
                    </span>{" "}
                    {JSON.parse(selectedOrder.shipping_info)?.line1}
                    {JSON.parse(selectedOrder.shipping_info)?.lin2}{" "}
                    {JSON.parse(selectedOrder.shipping_info)?.city}{" "}
                    {JSON.parse(selectedOrder.shipping_info)?.state}
                    {JSON.parse(selectedOrder.shipping_info)?.country}{" "}
                    {JSON.parse(selectedOrder.shipping_info)?.postal_code}
                  </p>
                  <div className="py-[1rem] w-full">
                    {JSON.parse(selectedOrder.items).length > 0 && (
                      <Table aria-label="Example static collection table w-full">
                        <TableHeader>
                          <TableColumn>QTY</TableColumn>
                          <TableColumn>PRICE</TableColumn>
                          <TableColumn>Product</TableColumn>
                        </TableHeader>
                        <TableBody>
                          {JSON.parse(selectedOrder.items).map(
                            (item: any, index: number) => (
                              <TableRow key={index}>
                                <TableCell>{item.itemCount}</TableCell>
                                <TableCell>{item.discountedPrice}</TableCell>
                                <TableCell
                                  onClick={() =>
                                    navigate(
                                      `/ProductDetails/${item.price}/${item.itemId}`
                                    )
                                  }
                                >
                                  <div className="h-[2rem] w-[3rem] cursor-pointer justify-center">
                                    <Image
                                      src={`${apiUrl}/items/itemImages/${item.itemId}_img1.jpg`}
                                      radius="none"
                                      loading="lazy"
                                    />
                                  </div>
                                </TableCell>
                              </TableRow>
                            )
                          )}
                        </TableBody>
                      </Table>
                    )}
                  </div>
                </div>
              </ModalBody>

              <ModalFooter className="flex items-center justify-between">
                <div className="flex flex-grow">
                  <Select
                    aria-label="select status"
                    placeholder={selectedOrder.status}
                    onChange={(value) => {
                      setStatus(value.target.value);
                      setConfirm(true);
                    }}
                    color="warning"
                    className="m-4"
                    size="sm"
                    isDisabled={
                      selectedOrder.status === "cancelled" ||
                      selectedOrder.status === "delivered"
                    }
                  >
                    {status.map((item) => (
                      <SelectItem key={item} value={item}>
                        {item}
                      </SelectItem>
                    ))}
                  </Select>
                </div>
                <div>
                  {isConfirm && (
                    <Button
                      color="danger"
                      variant="ghost"
                      onPress={handleCancelOrder}
                      className="mx-5"
                    >
                      Confirm
                    </Button>
                  )}
                  <Button
                    color="default"
                    variant="light"
                    onPress={onClose}
                    className="bg-yellow-400"
                  >
                    Close
                  </Button>
                </div>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      <Modal
        isOpen={isConfirmationModalOpen}
        onClose={() => setIsConfirmationModalOpen(false)}
        size="sm"
        className="border-black-700 text-red-500"
        style={{ border: "4px solid yellow" }}
      >
        <ModalHeader></ModalHeader>
        <ModalContent>
          <h4 className="text-center m-9">
            Change current order status to {changedStatus}
          </h4>
          <ModalFooter>
            <Button
              color="danger"
              variant="ghost"
              onClick={changeOrderStatus}
              className="mx-5"
            >
              OK
            </Button>

            <Button
              color="default"
              variant="light"
              onClick={() => setIsConfirmationModalOpen(false)}
              className="bg-yellow-400"
            >
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Toaster />
    </div>
  );
}

export default OrdersCard;
