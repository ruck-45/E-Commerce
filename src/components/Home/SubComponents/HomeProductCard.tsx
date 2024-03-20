import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../../Redux/store";

type HomeProductCardProps = {
  title: string;
  brand: string;
  itemId: string;
};

const HomeProductCard = (props: HomeProductCardProps) => {
  const navigate = useNavigate();
  const apiUrl = useSelector((state: RootState) => state.apiConfig.value);

  return (
    <div
      onClick={() => navigate(`/ProductDetails/${props.title}/${props.itemId}`)}
      className="cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3 min-h-[20rem] hover:scale-105 transition-all"
    >
      <div
        className="h-[13rem] w-full bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${apiUrl}/items/itemImages/${props.itemId}_img1.jpg)` }}
      ></div>

      <div className="p-4 w-full">
        <h3 className="text-[1rem] font-semibold text-gray-900">{props.title}</h3>
        <p className="mt-2 text-sm text-gray-500">{props.brand}</p>
      </div>
    </div>
  );
};

export default HomeProductCard;
