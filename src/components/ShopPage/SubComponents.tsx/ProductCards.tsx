import { useSelector } from "react-redux";
import "./Product.css";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../../Redux/store";
import {
  Badge,
  Button,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { individualProductType } from "../../../utils/types";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBinFill } from "react-icons/ri";
import { getCookie } from "../../../utils/cookies";
import { useState } from "react";
import axios from "axios";
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

const ProductCards = (props: individualProductType) => {
  const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
  const createdDate = new Date(props.created_at);
  const apiUrl = useSelector((state: RootState) => state.apiConfig.value);
  const token = getCookie("token");
  const isLoggedIn = useSelector((state: RootState) => state.loginStatus.value);
  const curTab = useSelector((state: RootState) => state.curTab.value);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const admin = getCookie("isAdmin");
  const navigate = useNavigate();
  let content = "";
  let className = "rounded-none ";
  let color: "primary" | "danger" | "warning" | "default" | "secondary" | "success" | undefined = "primary";

  if (props.quantity < props.minimumOrder) {
    content = "Out Of Stock";
    className += "right-[3.1rem] top-[1rem]";
    color = "danger";
  } else if (props.discountPercent >= 50) {
    content = "Sale";
    className += "right-[1.45rem] top-[1rem]";
    color = "warning";
  } else if (createdDate >= sevenDaysAgo) {
    content = "New Arrival";
    className += "right-[2.8rem] top-[1rem]";
    color = "primary";
  }

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const handleDelete = async () => {
    setDeleteLoading(true);
    try {
      const response = await axios.delete(`${apiUrl}/items/deleteItem/${props.item_id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.data.success) {
        console.log(response.data);
        errorToast("Product Deletion Unsuccessful");
      } else {
        successToast("Product Successfully Deleted");
      }
    } catch (error) {
      console.error(error);
      errorToast("Product Deletion Unsuccessful");
    }
    setDeleteLoading(false);
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };

  const handleEdit = () => {
    navigate(`/Admin/editProduct/${props.item_id}`);
  };

  return (
    <div
      className="productCard w-[15rem] border m-3 transition-all cursor-pointer"
      onClick={() => navigate(`/ProductDetails/${props.title}/${props.item_id}`)}
    >
      <Badge
        content={content}
        color={color}
        showOutline={false}
        className={className}
        isInvisible={content === ""}
      >
        <div className="h-[16.5rem] w-[15rem]">
          <Image
            className={content === "Out Of Stock" ? "grayscale" : ""}
            src={`${apiUrl}/items/itemImages/${props.item_id}_img1.jpg`}
            radius="none"
            loading="lazy"
          />
        </div>
      </Badge>
      <div className="textPart bg-white p-3 ">
        <div>
          <p className="font-bold opacity-60">{props.brand}</p>
          <p className="">{props.title}</p>

          <p className="font-semibold opacity-50">{props.color}</p>
        </div>

        <div className="flex space-x-2 items-center">
          {props.discountedPrice === props.price || props.discountPercent === 0 ? (
            <p className="font-semibold">${props.price}</p>
          ) : (
            <>
              <p className="font-semibold">${props.discountedPrice}</p>
              <p className="opacity-50 line-through">${props.price}</p>
              <p
                className={
                  content === "Out Of Stock" ? "text-default-500 font-semibold" : "text-green-600 font-semibold"
                }
              >
                {props.discountPercent}% Off
              </p>
            </>
          )}
        </div>
        {isLoggedIn && admin === "true" && curTab === "Admin" ? (
          <div className="w-full flex justify-between mt-[1rem]">
            <Button startContent={<FaEdit />} radius="none" color="primary" variant="flat" onClick={handleEdit}>
              Edit
            </Button>
            <Button startContent={<RiDeleteBinFill />} radius="none" color="danger" variant="flat" onClick={onOpen}>
              Delete
            </Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
              <ModalContent>
                {(onClose) => (
                  <>
                    <ModalHeader className="flex flex-col gap-1">Confirm Delete</ModalHeader>
                    <ModalBody>Are you sure you want to delete {props.title} ?</ModalBody>
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
          </div>
        ) : null}
      </div>
      <Toaster />
    </div>
  );
};

export default ProductCards;
