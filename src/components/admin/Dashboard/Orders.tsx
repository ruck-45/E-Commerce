import { useState, useLayoutEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../Redux/store";
import { getCookie } from "../../../utils/cookies";
import {
  Avatar,
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Pagination,
  Select,
  SelectItem,
  Spinner,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  useDisclosure,
} from "@nextui-org/react";
import axios from "axios";
import { IoSearch } from "react-icons/io5";
import { FaEye } from "react-icons/fa";
import toast, { Toaster, ToastPosition } from "react-hot-toast";
import { allOrderType, orderType } from "../../../utils/types";

const pageSize = 16;

const toastSetting: {
  position: ToastPosition;
} = { position: "top-center" };

const successToast = (message: string): void => {
  toast.success(message, toastSetting);
};

const errorToast = (message: string): void => {
  toast.error(message, toastSetting);
};

function MyOrders() {
  const [orders, setOrders] = useState<allOrderType[]>([]); // Change to an array of orders
  const searchRef = useRef(document.createElement("input"));
  const [search, setSearch] = useState("");
  const [itemCount, setItemCount] = useState(0);
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const [receivedOrdersData, setReceivedOrdersData] = useState(-1);
  const [pageNumber, setPageNumber] = useState(1);
  const formattedOrdersData = useRef([]);
  const orderIndex = useRef(-1);
  const orderStatus = useRef("");
  const [reset, setReset] = useState(false);
  const [updateLoading, setUpdateLoading] = useState(false);

  const apiUrl = useSelector((state: RootState) => state.apiConfig.value);
  const token = getCookie("token");

  const formatOrdersData = (data: orderType[]) => {
    const formattedData = data.map((orderData) => {
      return {
        ...orderData,
        date: orderData.date.slice(0, 10),
        items: JSON.parse(orderData.items),
        shipping_info: JSON.parse(orderData.shipping_info),
      };
    });
    setOrders(formattedData);
    console.log(formattedData);
  };

  const fetchOrders = async () => {
    try {
      const response = await axios.get(
        `${apiUrl}/admin/getOrders?start=${(pageNumber - 1) * pageSize}&end=16&search=${search}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (!response.data.success) {
        setReceivedOrdersData(0);
      } else {
        formatOrdersData(response.data.payload.result);
        setItemCount(response.data.payload.total);
        if (response.data.payload.result.length > 0) {
          setReceivedOrdersData(1);
        } else {
          setReceivedOrdersData(0);
          formattedOrdersData.current = [];
        }
      }
    } catch (error) {
      console.log(error);
      setReceivedOrdersData(0);
    }
  };

  const changeOrderStatus = async () => {
    setUpdateLoading(true);

    const values = {
      orderId: orders[orderIndex.current].order_id,
      status: orderStatus.current,
      userEmail: orders[orderIndex.current].shipping_info.email,
    };

    try {
      const changeStatusResponse = await axios.post(`${apiUrl}/admin/updateOrderStatus`, values, {
        headers: {
          Authorization: `Bearer ${getCookie("token")}`,
        },
      });

      if (!changeStatusResponse.data.success) {
        errorToast("Order status failed to update");
      } else {
        successToast("Order status updated successfully");
      }
    } catch (error) {
      console.error(error);
      errorToast("Order status failed to update");
    }
    setUpdateLoading(false);
    setReset((prev) => !prev);
    onClose();
  };

  useLayoutEffect(() => {
    fetchOrders();
  }, [apiUrl, pageNumber, search, reset]);

  return (
    <div className="bg-[#28292b] flex flex-col justify-center items-center0 py-[5rem] min-h-[100vh]">
      <div className="text-3xl text-white font-bold text-center">ALL ORDERS</div>

      <div className="mx-auto py-10 overflow-x-scroll">
        <div className="flex justify-center">
          <Input
            classNames={{
              base: "h-10 max-w-[20rem]",
              mainWrapper: "h-full",
              input: "text-small",
              inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
            }}
            placeholder="Search"
            size="sm"
            type="search"
            ref={searchRef}
            radius="none"
          />
          <Button color="danger" radius="none" isIconOnly onClick={() => setSearch(searchRef.current.value)}>
            <IoSearch className="text-xl" />
          </Button>
        </div>

        {receivedOrdersData === 1 ? (
          <>
            <Table
              aria-label="Items Table"
              className="mt-[3rem] dark"
              radius="none"
              isCompact
              classNames={{
                base: "max-w-[100vw]",
              }}
            >
              <TableHeader>
                <TableColumn>Order Id</TableColumn>
                <TableColumn>Order Date</TableColumn>
                <TableColumn>Customer Id</TableColumn>
                <TableColumn>Customer Contact</TableColumn>
                <TableColumn>Shipping Details</TableColumn>
                <TableColumn>Status</TableColumn>
                <TableColumn>Total Price</TableColumn>
                <TableColumn className="text-center">Actions</TableColumn>
              </TableHeader>
              <TableBody>
                {orders.map((data, index) => (
                  <TableRow key={index} className="text-white">
                    <TableCell className="text-default-500">{data.order_id}</TableCell>
                    <TableCell>{data.date}</TableCell>
                    <TableCell className="text-default-500">{data.user_id}</TableCell>
                    <TableCell className="max-w-[20rem]">
                      <p>Email : {data.shipping_info.email}</p>
                      <p>Phone : {data.shipping_info.phone}</p>
                    </TableCell>
                    <TableCell className="max-w-[20rem]">
                      Address : {data.shipping_info.line1}, {data.shipping_info.line2}, {data.shipping_info.city},{" "}
                      {data.shipping_info.state}, {data.shipping_info.postal_code}
                    </TableCell>
                    <TableCell
                      className={
                        data.status === "pending"
                          ? "text-yellow-500 uppercase"
                          : data.status === "shipped"
                          ? "text-blue-500 uppercase"
                          : data.status === "delivered"
                          ? "text-green-500 uppercase"
                          : "text-red-500 uppercase"
                      }
                    >
                      {data.status}
                    </TableCell>
                    <TableCell className="text-default-500">{`$ ${data.order_price}`}</TableCell>
                    <TableCell>
                      <Button
                        isIconOnly
                        radius="none"
                        color="primary"
                        variant="faded"
                        onClick={() => {
                          orderIndex.current = index;
                          orderStatus.current = data.status;
                          onOpen();
                        }}
                      >
                        <FaEye />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <div className="py-[2rem] grow flex justify-center">
              <Pagination
                loop
                showControls
                radius="none"
                color="danger"
                variant="bordered"
                className="dark"
                onChange={(pageNumber) => setPageNumber(pageNumber)}
                total={itemCount ? Math.ceil(itemCount / pageSize) : 1}
                initialPage={1}
              />
            </div>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} classNames={{ base: "rounded-none" }} size="4xl">
              <ModalContent>
                {(onClose) => (
                  <>
                    <ModalHeader className="flex flex-col gap-1">Item Details</ModalHeader>
                    <ModalBody>
                      <Table
                        aria-label="Items Table"
                        radius="none"
                        isCompact
                        classNames={{
                          base: "max-w-[100vw]",
                        }}
                      >
                        <TableHeader>
                          <TableColumn>Id</TableColumn>
                          <TableColumn>Product</TableColumn>
                          <TableColumn>MRP</TableColumn>
                          <TableColumn>Selling Price</TableColumn>
                          <TableColumn>Quantity</TableColumn>
                          <TableColumn>Total Price</TableColumn>
                        </TableHeader>
                        <TableBody>
                          {orders[orderIndex.current].items.map((data, index) => (
                            <TableRow key={index}>
                              <TableCell className="text-default-500">{data.itemId}</TableCell>
                              <TableCell>
                                <Avatar radius="none" src={`${apiUrl}/items/itemImages/${data.itemId}_img1.jpg`} />
                              </TableCell>
                              <TableCell className="text-default-500 line-through">{`$ ${data.unit_price}`}</TableCell>
                              <TableCell>{`$ ${data.discountedPrice}`}</TableCell>
                              <TableCell>{data.itemCount}</TableCell>
                              <TableCell>{`$ ${data.totalPrice}`}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                      <Select
                        radius="none"
                        aria-label="select status"
                        placeholder={orders[orderIndex.current].status}
                        onChange={(value) => {
                          orderStatus.current = value.target.value;
                        }}
                        color="warning"
                        size="sm"
                        isDisabled={
                          orders[orderIndex.current].status === "cancelled" ||
                          orders[orderIndex.current].status === "delivered"
                        }
                      >
                        {["pending", "shipped", "delivered", "cancelled"].map((item) => (
                          <SelectItem key={item} value={item}>
                            {item}
                          </SelectItem>
                        ))}
                      </Select>
                    </ModalBody>
                    <ModalFooter>
                      <Button
                        color="warning"
                        onClick={changeOrderStatus}
                        radius="none"
                        isDisabled={
                          orders[orderIndex.current].status === "cancelled" ||
                          orders[orderIndex.current].status === "delivered"
                        }
                        isLoading={updateLoading}
                      >
                        Update Status
                      </Button>
                      <Button color="danger" onPress={onClose} radius="none">
                        Close
                      </Button>
                    </ModalFooter>
                  </>
                )}
              </ModalContent>
            </Modal>
          </>
        ) : receivedOrdersData === -1 ? (
          <Table aria-label="Items Table" className="mt-[3rem] dark" radius="none" isCompact>
            <TableHeader>
              <TableColumn>Order Id</TableColumn>
              <TableColumn>Order Date</TableColumn>
              <TableColumn>Customer Name</TableColumn>
              <TableColumn>Customer Contact</TableColumn>
              <TableColumn>Shipping Details</TableColumn>
              <TableColumn>Status</TableColumn>
              <TableColumn>Total Price</TableColumn>
              <TableColumn className="text-center">Actions</TableColumn>
            </TableHeader>
            <TableBody isLoading={true} loadingContent={<Spinner label="Loading..." />}>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((data, index) => (
                <TableRow key={index} className="text-white">
                  <TableCell className="text-[#18181b]">1</TableCell>
                  <TableCell className="text-[#18181b]">1</TableCell>
                  <TableCell className="text-[#18181b]">1</TableCell>
                  <TableCell className="text-[#18181b]">1</TableCell>
                  <TableCell className="text-[#18181b]">1</TableCell>
                  <TableCell className="text-[#18181b]">1</TableCell>
                  <TableCell className="text-[#18181b]">1</TableCell>
                  <TableCell className="text-[#18181b]">1</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : (
          <div className="w-full h-[50vh] flex justify-center items-center">
            <p className="font-bold text-2xl text-default-300">No Orders Found</p>
          </div>
        )}
      </div>
      <Toaster />
    </div>
  );
}

export default MyOrders;
