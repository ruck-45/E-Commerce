import React from "react";
import { Button } from "@mui/material";
// import { useDispatch } from "react-redux";
// import { removeCartItem, updateCartItem } from "../../../Redux/Customers/Cart/Action";
import { IconButton } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

const CartItem = () => {
  // const dispatch = useDispatch();
  // const jwt = localStorage.getItem("jwt");

  const handleRemoveItemFromCart = () => {
    // const data = { cartItemId: item?._id, jwt };
    // dispatch(removeCartItem(data));
  };
  const handleUpdateCartItem=(num)=>{
    // const data={data:{quantity:item.quantity+num}, cartItemId:item?._id, jwt}
    // console.log("update data ",data)
    // dispatch(updateCartItem(data))
  }
  return (
    <div className="p-5 shadow-lg border rounded-md">
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem] ">
          <img
            className="w-full h-full object-cover object-top"
            src="https://rukminim1.flixcart.com/image/612/612/l0wrafk0/dress/l/2/o/3xl-m2s13003-peach-madame-original-imagchhhwbypcann.jpeg?q=70"
            alt=""
          />
        </div>
        <div className="ml-5 space-y-1">
          <p className="font-semibold">Full Sleve Tshirt</p>
          <p className="opacity-70">Size: XL,White</p>
          <p className="opacity-70 mt-2">Seller: PUMA</p>
          <div className="flex space-x-2 items-center pt-3">
            <p className="opacity-50 line-through">₹1999</p>
            <p className="font-semibold text-lg">₹200</p>
            <p className="text-green-600 font-semibold">10% off</p>
          </div>
        </div>
      </div>
      
      <div className="lg:flex items-center lg:space-x-10 pt-4">
        <div className="flex items-center space-x-2 ">
          <IconButton onClick={() => handleUpdateCartItem(-1)} color="primary" aria-label="add an alarm">
            <RemoveCircleOutlineIcon />
          </IconButton>

          <span className="py-1 px-7 border rounded-sm">0</span>
          <IconButton onClick={() => handleUpdateCartItem(1)} color="primary" aria-label="add an alarm">
            <AddCircleOutlineIcon />
          </IconButton>
        </div>
        <div className="flex text-sm lg:text-base mt-5 lg:mt-0">
          <Button onClick={handleRemoveItemFromCart} variant="text">
            Remove
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;