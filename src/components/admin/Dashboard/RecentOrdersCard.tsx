import React, { useEffect } from "react";
import { getOrderStatus } from "./lib/constants/Helper";


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
} from "@nextui-org/react";
import { EditIcon } from "./ordersData/EditIcon";

import { EyeIcon } from "./ordersData/EyeIcons";
import { columns, users } from "./ordersData/data";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";

const statusColorMap: {
  [status: string]: "success" | "danger" | "warning" | "default" | "primary" | "secondary" ;
} = {
  active: "success",
  paused: "warning",
  vacation: "secondary",
  // Add more mappings as needed
};

const OrdersCard = () => {
  let content = "";
  let className = "rounded-none ";
  let color: "primary" | "danger" | "warning" | "default" | "secondary" | "success" | undefined = "primary";
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  
  
 

  

 
  const renderCell = React.useCallback((user: any, columnKey: any) => {
    const cellValue = user[columnKey];

    switch (columnKey) {
      case "name":
        return (
          <User avatarProps={{ radius: "lg", src: user.avatar }} description={user.email} name={cellValue}>
            {user.email}
          </User>
        );
      case "role":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize">{cellValue}</p>
            <p className="text-bold text-sm capitalize text-default-400">{user.team}</p>
          </div>
        );
      case "status":
        return (
          <Chip className="capitalize" color={statusColorMap[user.status]} size="sm" variant="flat">
            {cellValue}
          </Chip>
        );
      case "actions":
        return (
          <div className="relative flex items-center gap-2">
            <Tooltip content="Details">
              <Button onClick={onOpen}>
                <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                  <EyeIcon />
                </span>
              </Button>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);
  

  return (
    <>
      <Table aria-label="Example table with custom cells">
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn key={column.uid} align={column.uid === "actions" ? "center" : "start"}>
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody items={users}>
          {(item) => (
            <TableRow key={item.id}>{(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}</TableRow>
          )}
        </TableBody>
      </Table>
      <Modal backdrop="opaque" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-blue-500">ORDER DETAILS</ModalHeader>
              <ModalBody>
                <div className="flex flex-col items-start font-mono">
                  <p>
                    <span className="font-semibold text-yellow-500">OrderId:</span> 202403261050263901200001
                  </p>
                  <p>
                    <span className="font-semibold text-yellow-500">UserId:</span> 202403261050263901200001
                  </p>
                  <div className="py-[1rem] font-mono">
                    <p>
                      <span className="font-semibold text-yellow-500">Name:</span> ANISH KUMAR
                    </p>
                    <p>
                      <span className="font-semibold text-yellow-500">Contact:</span> +91-9599792729
                    </p>
                    <p>
                      <span className="font-semibold text-yellow-500">Email:</span> anishmishra143@gmail.com
                    </p>
                    <p>
                      <span className="font-semibold text-yellow-500">Address:</span> KM-49, TOWER NO 42, JAYPEE KOSMOS,
                      NOIDA 134, UTTARPARDESH,201301
                    </p>
                    <div className="py-[1rem]">
                      <Table aria-label="Example static collection table ">
                        <TableHeader>
                          <TableColumn>ITEMS</TableColumn>
                          <TableColumn>QTY</TableColumn>
                          <TableColumn>PRICE</TableColumn>
                        </TableHeader>
                        <TableBody>
                          <TableRow key="1">
                            <TableCell>Tony Reichert</TableCell>
                            <TableCell>2</TableCell>
                            <TableCell>999</TableCell>
                          </TableRow>
                          <TableRow key="2">
                            <TableCell>Zoey Lang</TableCell>
                            <TableCell>2</TableCell>
                            <TableCell>999</TableCell>
                          </TableRow>
                          <TableRow key="3">
                            <TableCell>Jane Fisher</TableCell>
                            <TableCell>2</TableCell>
                            <TableCell>999</TableCell>
                          </TableRow>
                          <TableRow key="4">
                            <TableCell>William Howard</TableCell>
                            <TableCell>2</TableCell>
                            <TableCell>999</TableCell>
                          </TableRow>
                          <TableRow key="5">
                            <TableCell>Jane Fisher</TableCell>
                            <TableCell>2</TableCell>
                            <TableCell>999</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </div>
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="default" variant="light" onPress={onClose} className="bg-yellow-400">
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default OrdersCard;
