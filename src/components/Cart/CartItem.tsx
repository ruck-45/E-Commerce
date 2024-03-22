import React from "react";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { IconButton } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { decreaseItem, increaseItem, removeItem } from "../../Redux/Slices/CartSlice";
import { useLocation } from "react-router-dom";

type CardProps = {
  item_id: number;
  imageUrl: any;
  brand: string;
  title: string;
  color: string;
  discountedPrice: number;
  price: number;
  discountPercent: number;
  highlights: any;
  details: any;
  material: any;
  dimension: any;
  quantity: number;
  topLavelCategory: string;
  secondLavelCategory: string;
  thirdLavelCategory: string;
  description: string;
  minimumOrder: number;
};

const CartItem = (props:CardProps) => {
  const dispatch = useDispatch();

 
 

  
 
  return (
    <div className="p-5 shadow-lg border rounded-md">
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem] ">
          <img className="w-full h-full object-cover object-top" src={props.imageUrl[0]} alt="" />
        </div>
        <div className="ml-5 space-y-1">
          <p className="font-semibold">{props.title}</p>
          <p className="opacity-70">Size:{props.dimension}</p>
          <p className="opacity-70 mt-2">Seller: ShopNest</p>
          <div className="flex space-x-2 items-center pt-3">
            <p className="opacity-50 line-through">{props.price}</p>
            <p className="font-semibold text-lg">{props.discountedPrice}</p>
            <p className="text-green-600 font-semibold">{props.discountPercent}% off</p>
          </div>
        </div>
      </div>

      <div className="lg:flex items-center lg:space-x-10 pt-4">
        <div className="flex items-center space-x-2 ">
          <IconButton
            onClick={() => dispatch(decreaseItem(props.item_id))}
            disabled={props.minimumOrder < 2}
            color="primary"
            aria-label="add an alarm"
          >
            <RemoveCircleOutlineIcon />
          </IconButton>

          <span className="py-1 px-7 border rounded-sm">{props.minimumOrder}</span>
          <IconButton onClick={() => dispatch(increaseItem(props.item_id))} color="primary" aria-label="add an alarm">
            <AddCircleOutlineIcon />
          </IconButton>
        </div>
        <div className="flex text-sm lg:text-base mt-5 lg:mt-0">
          <Button onClick={() => dispatch(removeItem(props.item_id))} variant="text">
            Remove
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
