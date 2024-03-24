import { useSelector } from "react-redux";
import "./Product.css";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../../Redux/store";
import { Badge, Image } from "@nextui-org/react";
import { individualProductType } from "../../../utils/types";

const ProductCards = (props: individualProductType) => {
  const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
  const createdDate = new Date(props.created_at);
  const apiUrl = useSelector((state: RootState) => state.apiConfig.value);
  const navigate = useNavigate();
  let content = "";
  let className = "rounded-none ";
  let color: "primary" | "danger" | "warning" | "default" | "secondary" | "success" | undefined = "primary";

  if (props.quantity < props.minimumOrder) {
    content = "Out Of Stock";
    className += "right-[3rem] top-[1rem]";
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
        variant="shadow"
      >
        <div className="h-[16.5rem]">
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
            <p className="font-semibold">Rs. {props.price}</p>
          ) : (
            <>
              <p className="font-semibold">Rs. {props.discountedPrice}</p>
              <p className="opacity-50 line-through">Rs. {props.price}</p>
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
      </div>
    </div>
  );
};

export default ProductCards;
