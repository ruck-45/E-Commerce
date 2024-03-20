import { useSelector } from "react-redux";
import "./Product.css";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../../Redux/store";

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
        <img
          className="h-full w-full object-cover object-left-top"
          src={`${apiUrl}/items/itemImages/${props.item_id}_img1.jpg`}
          alt=""
        />
      </div>
      <div className="textPart bg-white p-3 ">
        <div>
          <p className="font-bold opacity-60">{props.brand}</p>
          <p className="">{props.title}</p>

          <p className="font-semibold opacity-50">{props.color}</p>
        </div>

        <div className="flex space-x-2 items-center">
          <p className="font-semibold">₹{props.discountedPrice}</p>
          <p className="opacity-50 line-through">₹{props.price}</p>
          <p className="text-green-600 font-semibold">{props.discountPercent}% off</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCards;
