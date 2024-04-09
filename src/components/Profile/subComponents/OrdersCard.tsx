import { Item, orderType } from "../../../utils/types";
import { useSelector } from 'react-redux';
import { RootState } from '../../../Redux/store';
import { useLayoutEffect, useState } from "react";
import OrderModal from "./OrderModal";
import axios from "axios";

type CardProp = {
  item: Item,
  order: orderType,
  status: boolean,
}

const defaultProductData = {
  item_id: "",
  imageCount: "",
  brand: "",
  title: "",
  color: "",
  discountedPrice: 0,
  price: 0,
  discountPercent: 0,
  quantity: 0,
  material: "",
  dimension: "",
  description: "",
  topLevelCategory: "",
  secondLevelCategory: "",
  thirdLevelCategory: "",
  highlights: [""],
  minimumOrder: 0,
  details: "",
  orders: 0,
  created_at: "",
};

const OrdersCard = (props: CardProp) => {
  const apiUrl = useSelector((state: RootState) => state.apiConfig.value);
  const [showModal, setShowModal] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<any>();
  const [productData, setProductData] = useState(defaultProductData);

  const handleCloseModal = () => {
    setShowModal(false); // Hide the modal
  };

  const getProductData = async () => {
    try {
      const response = await axios.get(`${apiUrl}/items/${props.item.itemId}`);
      if (response.data.payload.result) {
          setProductData({
            ...response.data.payload.result,
          });
        }
    } catch (error) {
      console.log(error);
    }
  };

  useLayoutEffect(() => {
    getProductData();
  }, [apiUrl]);

  const handleViewOrderClick = (order: any) => {
    setSelectedOrder(order);
    setShowModal(true);
    console.log("selected order", selectedOrder);
  };

  console.log(props.item);

  return (
    <div
      className="productCard w-[15rem] border m-3 transition-all cursor-pointer rounded-md"
      onClick={() => handleViewOrderClick(props.order)}
    >
      <div
        className={"h-[12rem] w-[15rem] bg-cover bg-center bg-no-repeat rounded-md"}
        style={{ backgroundImage: `url(${apiUrl}/items/itemImages/${props.item.itemId}_img1.jpg)` }}
      ></div>
      <div className="textPart bg-white p-3 overflow-hidden">
        <div className="flex flex-col gap-y-2">
          <p className="font-bold text-black">{productData.title}</p>
          <p className="">Quantity: {props.item.itemCount}</p>
          <p className="font-bold opacity-50 text-green-800">
            <span className="">$</span>
            {props.item.totalPrice}
          </p>
        </div>
      </div>
      {showModal && (
        <OrderModal order={selectedOrder} onClose={handleCloseModal} show={showModal} status={props.status} />
      )}
    </div>
  );
};

export default OrdersCard