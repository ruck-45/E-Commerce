import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { IconButton } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { decreaseItem, increaseItem, removeItem } from "../../Redux/Slices/CartSlice";
import { productsType } from "../../utils/types";
import { Image } from "@nextui-org/react";
import { RootState } from "../../Redux/store";

const CartItem = (props: productsType) => {
  const dispatch = useDispatch();
  const apiUrl = useSelector((state: RootState) => state.apiConfig.value);

  return (
    <div className="p-5 shadow-lg border rounded-md">
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem] ">
          <Image
            className="w-full h-full object-cover object-top"
            src={`${apiUrl}/items/itemImages/${props.item_id}_img1.jpg`}
            loading="lazy"
            radius="sm"
            alt=""
          />
        </div>
        <div className="ml-5 space-y-1">
          <p className="font-semibold">{props.title}</p>
          <p className="opacity-70">Size:{props.dimension}</p>
          <p className="opacity-70 mt-2">Seller: ShopNest</p>
          <div className="flex space-x-2 items-center pt-3">
            {props.discountedPrice === props.price || props.discountPercent === 0 ? (
              <p className="font-semibold">Rs. {props.price}</p>
            ) : (
              <>
                <p className="font-semibold">Rs. {props.discountedPrice}</p>
                <p className="opacity-50 line-through">Rs. {props.price}</p>
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
