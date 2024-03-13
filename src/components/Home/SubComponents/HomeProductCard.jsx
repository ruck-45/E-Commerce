import React from "react";

import { useNavigate } from "react-router-dom";

const HomeProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/men/clothing/mens_kurta`)}
      className="cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3 min-h-[20rem]"
    >
      <div
        className="h-[13rem] w-full bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${product?.image || product?.imageUrl})` }}
      ></div>

      <div className="p-4 ">
        <h3 className="text-[1rem] font-semibold text-gray-900">{product?.title}</h3>
        <p className="mt-2 text-sm text-gray-500">{product?.brand}</p>
      </div>
    </div>
  );
};

export default HomeProductCard;
