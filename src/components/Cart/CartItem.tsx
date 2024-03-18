import React from "react";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { IconButton } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { decreaseItem, increaseItem, removeItem } from "../../Redux/Slices/CartSlice";

type CardProps = {
  id: number;
  imageUrl: string;
  brand: string;
  title: string;
  color: string;
  discountedPrice: number;
  price: number;
  discountPersent: number;
  size: {
    name: string;
    quantity: number;
  }[];
  quantity: number;
  topLavelCategory: string;
  secondLavelCategory: string;
  thirdLavelCategory: string;
  description: string;
  orderQuantity: number;
};

const CartItem = (props:CardProps) => {
  const dispatch = useDispatch();

 
 

  
 
  return (
    <div className="p-[0.5rem] shadow-lg border rounded-md ">
      <div className="flex items-center ">
        <div className="w-[8rem] h-[5rem] lg:w-[9rem] lg:h-[9rem] ">
          <img className="w-full h-full object-cover object-top" src={props.imageUrl} alt="" />
        </div>
        <div className="ml-5 space-y-1">
          <p className="font-semibold">Full Size Carpet</p>
          <p className="opacity-70">Size: 6 Ft * 4ft</p>
          <p className="opacity-70 mt-2">Seller: ShopNest</p>
          <div className="flex space-x-2 items-center pt-3">
            <p className="opacity-50 line-through">₹1999</p>
            <p className="font-semibold text-lg">₹200</p>
            <p className="text-green-600 font-semibold">10% off</p>
          </div>
        </div>
      </div>

      <div className="lg:flex items-center lg:space-x-10 pt-4">
        <div className="flex items-center space-x-2 ">
          <IconButton
            onClick={() => dispatch(decreaseItem(props.id))}
            disabled={props.orderQuantity < 2}
            color="primary"
            aria-label="add an alarm"
          >
            <RemoveCircleOutlineIcon />
          </IconButton>

          <span className="py-1 px-7 border rounded-sm">{props.orderQuantity}</span>
          <IconButton onClick={() => dispatch(increaseItem(props.id))} color="primary" aria-label="add an alarm">
            <AddCircleOutlineIcon />
          </IconButton>
        </div>
        <div className="flex text-sm lg:text-base mt-5 lg:mt-0">
          <Button onClick={() => dispatch(removeItem(props.id))} variant="text">
            Remove
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
