import { useSelector } from "react-redux";
import "./Product.css";
import { useLocation, useNavigate } from "react-router-dom";

type ProductProps = {
  id:number,
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
  orderQuantity:number;
};

const ProductCards = (props: ProductProps) => {

  const { state } = useLocation();
  const { items } = useSelector((state: any) => state.allCart);
  console.log(items);
  const navigate = useNavigate();
  return (
    <div
      className="productCard w-[15rem] border m-3 transition-all cursor-pointer "
      onClick={(() => navigate(`/ProductDetails`, { state: { ...props } }))}
    >
      <div className="h-[16.5rem]">
        <img className="h-full w-full object-cover object-left-top" src={props.imageUrl} alt="" />
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
          <p className="text-green-600 font-semibold">{props.discountPersent}% off</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCards;
