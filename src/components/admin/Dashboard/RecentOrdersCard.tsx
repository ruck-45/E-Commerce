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
  canceled: "danger",
  delived: "success",
  shipped: "secondary",
};

function OrdersCard(props: any) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedOrder, setSelectedOrder] = useState<any>();
  const apiUrl = useSelector((state: RootState) => state.apiConfig.value);
  const { orders } = props;
  const navigate=useNavigate();
  const handleDetailsClick = (order: any) => {
    setSelectedOrder(order);
    onOpen();
  };

  const renderCell = React.useCallback((order: any, columnKey: any) => {
    let cellContent;

    switch (columnKey) {
      case "order_id":
        const order_id = order.order_id;
        cellContent = (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize text-default-900">
              {order_id.slice(0, 8)}....
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
        cellContent = (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize text-default-900">
              {email}
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
          <div className="relative flex items-center gap-2">
            <Tooltip content="Details">
              <Button onClick={() => handleDetailsClick(order)}>
                <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
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
      <Table aria-label="Example table with custom cells">
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn
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
                        {selectedOrder.user_id}
                      </p>
                      {console.log(selectedOrder)}
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
                    </span>
                    {JSON.parse(selectedOrder.shipping_info)?.email}
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
                  <div className="py-[1rem]">
                    {JSON.parse(selectedOrder.items).length > 0 && (
                      <Table aria-label="Example static collection table">
                        <TableHeader>
                          <TableColumn>ITEMS</TableColumn>
                          <TableColumn>QTY</TableColumn>
                          <TableColumn>PRICE</TableColumn>
                          <TableColumn>Product</TableColumn>
                        </TableHeader>
                        <TableBody>
                          {JSON.parse(selectedOrder.items).map(
                            (item: any, index: number) => (
                              <TableRow key={index}>
                                <TableCell>{item.item_id}</TableCell>
                                <TableCell>{item.itemQuantity}</TableCell>
                                <TableCell>{item.price}</TableCell>
                                <TableCell  
                                onClick={() => navigate(`/ProductDetails/${item.price}/${item.item_id}`)}
                                >
                                  <div className="h-[1.5rem] w-[2rem]">
                                    <Image
                                      src={`${apiUrl}/items/itemImages/${item.item_id}_img1.jpg`}
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
              <ModalFooter>
                <Button
                  color="default"
                  variant="light"
                  onPress={onClose}
                  className="bg-yellow-400"
                >
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}

export default OrdersCard;
