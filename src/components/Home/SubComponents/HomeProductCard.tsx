import { useNavigate } from "react-router-dom";

type HomeProductCardProps = {
  imageUrl: string;
  title: string;
  brand: string;
};

const HomeProductCard = (props: HomeProductCardProps) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/ProductDetails`)}
      className="cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3 min-h-[20rem] hover:scale-105 transition-all"
    >
      <div
        className="h-[13rem] w-full bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${props.imageUrl})` }}
      ></div>

      <div className="p-4 ">
        <h3 className="text-[1rem] font-semibold text-gray-900">{props.title}</h3>
        <p className="mt-2 text-sm text-gray-500">{props.brand}</p>
      </div>
    </div>
  );
};

export default HomeProductCard;
