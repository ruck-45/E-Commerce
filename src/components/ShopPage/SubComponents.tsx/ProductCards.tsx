import { useSelector } from "react-redux";
import "./Product.css";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../../Redux/store";
import { Image } from "@nextui-org/react";

type ProductProps = {
  item_id: String;
  imageCount: String;
  brand: String;
  title: String;
  color: String;
  discountedPrice: number;
  price: number;
  discountPercent: number;
  quantity: number;
  material: String;
  dimension: String;
  description: String;
  topLevelCategory: String;
  secondLevelCategory: String;
  thirdLevelCategory: String;
  highlights: String[];
  minimumOrder: number;
  details: String;
  orders: number;
};

const ProductCards = (props: ProductProps) => {
  const apiUrl = useSelector((state: RootState) => state.apiConfig.value);
  const navigate = useNavigate();
  return (
    <div
      className="productCard w-[15rem] border m-3 transition-all cursor-pointer "
      onClick={() => navigate(`/ProductDetails/${props.title}/${props.item_id}`)}
    >
      <div className="h-[16.5rem]">
        <Image
          className="h-full w-full object-cover object-left-top"
          src={`${apiUrl}/items/itemImages/${props.item_id}_img1.jpg`}
          radius="none"
          loading="lazy"
        />
      </div>
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
              <p className="text-green-600 font-semibold">{props.discountPercent}% Off</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCards;
