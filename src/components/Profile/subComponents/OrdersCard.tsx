import { Item, orderType } from "../../../utils/types";
import { useSelector } from 'react-redux';
import { RootState } from '../../../Redux/store';
import { useState } from "react";
import OrderModal from "./OrderModal";

type CardProp = {
  item: Item,
  order: orderType
}

const OrdersCard = (props: CardProp) => {
  const apiUrl = useSelector((state: RootState) => state.apiConfig.value);
  const [showModal, setShowModal] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<any>();

  const handleCloseModal = () => {
    setShowModal(false); // Hide the modal
  };

  const handleViewOrderClick = (order: any) => {
    setSelectedOrder(order);
    setShowModal(true);
    console.log("selected order", selectedOrder);
  };

  return (
    <div className="productCard w-[15rem] border m-3 transition-all cursor-pointer">
      <div
        className={"h-[16.5rem] w-[15rem] bg-cover bg-center bg-no-repeat"}
        style={{ backgroundImage: `url(${apiUrl}/items/itemImages/${props.item.itemId}_img1.jpg)` }}
        onClick={() => handleViewOrderClick(props.order)}
      ></div>
      {showModal && <OrderModal order={selectedOrder} onClose={handleCloseModal} show={showModal} />}
    </div>
  );
};

export default OrdersCard