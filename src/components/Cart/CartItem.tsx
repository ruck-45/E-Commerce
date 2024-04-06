import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { IconButton } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { decreaseItem, increaseItem, removeItem } from "../../Redux/Slices/CartSlice";
import { productsType } from "../../utils/types";
import { Image } from "@nextui-org/react";
import { RootState } from "../../Redux/store";
import axios from "axios";
import { getCookie } from "../../utils/cookies";
import { useNavigate } from "react-router-dom";

const CartItem = (props: productsType) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = getCookie("token");
  const apiUrl = useSelector((state: RootState) => state.apiConfig.value);
  const cartData = useSelector((state: RootState) => state.allCart.cart);
  const count = cartData.filter((item) => item.item_id === props.item_id)[0]
    ? cartData.filter((item) => item.item_id === props.item_id)[0].count
    : 0;

  const removeFromCartDatabase = async () => {
    try {
      const response = await axios.delete(`${apiUrl}/users/cart/${props.item_id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.data.success) {
        console.log("Cart remove Successful ...");
      } else {
        console.log("Cart remove Failed ...");
        console.log(response.data);
      }
    } catch (error) {
      console.log("Cart remove Failed ...");
      console.error(error);
    }
  };

  const handleRemoveFromCart = () => {
    removeFromCartDatabase();
    dispatch(removeItem(props.item_id));
  };

  return (
    <div className="p-5 shadow-lg border rounded-md">
      <div className="flex flex-col sm:flex-row sm:items-center">
        <div
          className="w-[9rem] h-[9rem] bg-cover bg-center bg-no-repeat rounded-md cursor-pointer"
          style={{ backgroundImage: `url(${apiUrl}/items/itemImages/${props.item_id}_img1.jpg)` }}
          onClick={() => navigate(`/ProductDetails/${props.title}/${props.item_id}`)}
        ></div>
        <div className="sm:ml-5 space-y-1 mt-[1rem] sm:mt-0">
          <p className="font-bold">{props.title}</p>
          <p className="opacity-70 font-semibold">{props.brand}</p>
          <p className="opacity-70 text-sm">{props.color}</p>
          <p className="opacity-70 text-sm">Size:{props.dimension}</p>
          <div className="flex space-x-2 items-center pt-3">
            {props.discountedPrice === props.price || props.discountPercent === 0 ? (
              <p className="font-semibold">${props.price}</p>
            ) : (
              <>
                <p className="font-semibold">${props.discountedPrice}</p>
                <p className="opacity-50 line-through">${props.price}</p>
                <p className="text-green-600 font-semibold">{props.discountPercent}% Off</p>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="lg:flex items-center lg:space-x-10 pt-4">
        <div className="flex items-center space-x-2 ">
          <IconButton
            onClick={() => dispatch(decreaseItem(props.item_id))}
            color="primary"
            aria-label="add an alarm"
            disabled={count - 1 < props.minimumOrder}
          >
            <RemoveCircleOutlineIcon />
          </IconButton>
          <span className="py-1 px-7 border rounded-sm">{count}</span>
          <IconButton
            onClick={() => dispatch(increaseItem(props.item_id))}
            color="primary"
            aria-label="add an alarm"
            disabled={count + 1 > props.quantity}
          >
            <AddCircleOutlineIcon />
          </IconButton>
        </div>
        <div className="flex text-sm lg:text-base mt-5 lg:mt-0">
          <Button onClick={handleRemoveFromCart} variant="text">
            Remove
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
