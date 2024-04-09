import axios from "axios";
import { useLayoutEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../Redux/store";
import { individualProductType } from "../../../utils/types";
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
  Spinner,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  useDisclosure,
} from "@nextui-org/react";
import {  scrollTop } from "../../../utils/controllers";
import { IoSearch } from "react-icons/io5";
import { FaEye } from "react-icons/fa";
import { MdEditSquare } from "react-icons/md";
import { RiDeleteBinFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { getCookie } from "../../../utils/cookies";
import toast, { Toaster, ToastPosition } from "react-hot-toast";

const toastSetting: {
  position: ToastPosition;
} = { position: "top-center" };

const successToast = (message: string): void => {
  toast.success(message, toastSetting);
};

const errorToast = (message: string): void => {
  toast.error(message, toastSetting);
};

const pageSize = 16;

const Products = () => {
  const navigate = useNavigate();
  const apiUrl = useSelector((state: RootState) => state.apiConfig.value);
  const [itemCount, setItemCount] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [shopData, setShopData] = useState<individualProductType[]>([]);
  const [receivedShopData, setReceivedShopData] = useState(-1);
  const [search, setSearch] = useState("");
  const searchRef = useRef(document.createElement("input"));
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const [deleteLoading, setDeleteLoading] = useState(false);
  const detleteItemIndex = useRef(-1);
  const token = getCookie("token");
  const [deleteReset, setDeleteReset] = useState(false);

  const getShopData = async () => {
    try {
      const response = await axios.get(
        `${apiUrl}/items/getItems?start=${(pageNumber - 1) * pageSize}&end=16&search=${search}`
      );

      if (!response.data.success) {
        setReceivedShopData(0);
      } else {
        setShopData(response.data.payload.result);
        setItemCount(response.data.payload.total);
        if (response.data.payload.result.length > 0) {
          setReceivedShopData(1);
        } else {
          setReceivedShopData(0);
        }
      }
    } catch (error) {
      console.log(error);
      setReceivedShopData(0);
    }
  };

  const handleDelete = async () => {
    setDeleteLoading(true);
    try {
      const response = await axios.delete(`${apiUrl}/items/deleteItem/${shopData[detleteItemIndex.current].item_id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.data.success) {
        console.log(response.data);
        errorToast("Product Deletion Unsuccessful");
      } else {
        successToast("Product Successfully Deleted");
        setDeleteReset((prev) => !prev);
      }
    } catch (error) {
      console.error(error);
      errorToast("Product Deletion Unsuccessful");
    }
    onClose();
    setDeleteLoading(false);
  };

  useLayoutEffect(() => {
    scrollTop();
    getShopData();
  }, [apiUrl, pageNumber, search, deleteReset]);

  return (
    <div className="bg-[#28292b] flex flex-col justify-center items-center0 py-[5rem] min-h-[100vh]">
      <div className="text-3xl text-white font-bold text-center">AVAILABLE PRODUCTS</div>

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

        {receivedShopData === 1 ? (
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
                <TableColumn>Product Id</TableColumn>
                <TableColumn>Product Name</TableColumn>
                <TableColumn>Color</TableColumn>
                <TableColumn>MRP</TableColumn>
                <TableColumn>Selling Price</TableColumn>
                <TableColumn>Discount %</TableColumn>
                <TableColumn>Min Order</TableColumn>
                <TableColumn>Stock</TableColumn>
                <TableColumn>Total Orders</TableColumn>
                <TableColumn>Categories</TableColumn>
                <TableColumn className="text-center">Actions</TableColumn>
              </TableHeader>
              <TableBody>
                {shopData.map((data, index) => (
                  <TableRow key={index} className="text-white">
                    <TableCell className="text-default-500">{data.item_id}</TableCell>
                    <TableCell className="flex gap-[0.5rem] items-center max-w-[20rem]">
                      <Avatar
                        radius="none"
                        src={`${apiUrl}/items/itemImages/${data.item_id}_img1.jpg`}
                        className="shrink-0"
                      />
                      <div>
                        <p className="text-default-500 text-xs">{data.brand}</p>
                        <p>{data.title}</p>
                        <p className="text-default-500 text-xs">{String(data.created_at).slice(0, 10)}</p>
                      </div>
                    </TableCell>
                    <TableCell>{data.color}</TableCell>
                    <TableCell className="line-through text-default-500">{`$ ${data.price}`}</TableCell>
                    <TableCell>{`$ ${data.discountedPrice}`}</TableCell>
                    <TableCell
                      className={data.discountPercent > 50 ? "text-red-500" : "text-green-500"}
                    >{`${data.discountPercent} %`}</TableCell>
                    <TableCell className="text-default-500">{data.minimumOrder}</TableCell>
                    <TableCell className={data.quantity < data.minimumOrder ? "text-red-500" : "text-green-500"}>
                      {data.quantity}
                    </TableCell>
                    <TableCell>{data.orders}</TableCell>
                    <TableCell className="max-w-[10rem] text-default-500">
                      <p>{data.topLevelCategory} , </p>
                      <p>{data.secondLevelCategory} , </p>
                      <p>{data.thirdLevelCategory}</p>
                    </TableCell>
                    <TableCell>
                      <Button
                        isIconOnly
                        radius="none"
                        color="primary"
                        variant="faded"
                        onClick={() => navigate(`/ProductDetails/${data.title}/${data.item_id}`)}
                      >
                        <FaEye />
                      </Button>
                      <Button
                        isIconOnly
                        radius="none"
                        color="warning"
                        variant="faded"
                        onClick={() => navigate(`/Admin/editProduct/${data.item_id}`)}
                      >
                        <MdEditSquare />
                      </Button>
                      <Button
                        isIconOnly
                        radius="none"
                        color="danger"
                        variant="faded"
                        onClick={() => {
                          detleteItemIndex.current = index;
                          onOpen();
                        }}
                      >
                        <RiDeleteBinFill />
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
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
              <ModalContent>
                {(onClose) => (
                  <>
                    <ModalHeader className="flex flex-col gap-1">Confirm Delete</ModalHeader>
                    <ModalBody>Are you sure you want to delete {shopData[detleteItemIndex.current].title} ?</ModalBody>
                    <ModalFooter>
                      <Button color="primary" variant="light" onPress={onClose}>
                        Close
                      </Button>
                      <Button color="danger" onClick={handleDelete} isLoading={deleteLoading}>
                        Delete
                      </Button>
                    </ModalFooter>
                  </>
                )}
              </ModalContent>
            </Modal>
          </>
        ) : receivedShopData === -1 ? (
          <Table aria-label="Items Table" className="mt-[3rem] dark" radius="none" isCompact>
            <TableHeader>
              <TableColumn>Product Id</TableColumn>
              <TableColumn>Product Name</TableColumn>
              <TableColumn>Color</TableColumn>
              <TableColumn>MRP</TableColumn>
              <TableColumn>Selling Price</TableColumn>
              <TableColumn>Discount %</TableColumn>
              <TableColumn>Min Order</TableColumn>
              <TableColumn>Stock</TableColumn>
              <TableColumn>Total Orders</TableColumn>
              <TableColumn>Categories</TableColumn>
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
                  <TableCell className="text-[#18181b]">1</TableCell>
                  <TableCell className="text-[#18181b]">1</TableCell>
                  <TableCell className="text-[#18181b]">1</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : (
          <div className="w-full h-[50vh] flex justify-center items-center">
            <p className="font-bold text-2xl text-default-300">No Items Found</p>
          </div>
        )}
      </div>
      <Toaster />
    </div>
  );
};

export default Products;
