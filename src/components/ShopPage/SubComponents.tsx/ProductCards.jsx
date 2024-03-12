import React from "react";
import "./Product.css";
import { useLocation, useNavigate } from "react-router-dom";
import photo from "../assets/anti.jpg"



const ProductCards = ({product}) => {
     const { title, brand, imageUrl, price, discountedPrice, color, discountPersent } = product;
     const navigate = useNavigate();
  


//   const handleNavigate = () => {
//     navigate(`/product/${product?._id}`);
//   };

  return (
    <div className="productCard w-[15rem] border m-3 transition-all cursor-pointer ">
      <div className="h-[20rem]">
        <img className="h-full w-full object-cover object-left-top" src={imageUrl} alt="" />
      </div>
      <div className="textPart bg-white p-3 ">
        <div>
          <p className="font-bold opacity-60">{brand}</p>
          <p className="">{title}</p>

          <p className="font-semibold opacity-50">{color}</p>
        </div>

        <div className="flex space-x-2 items-center">
          <p className="font-semibold">₹{discountedPrice}</p>
          <p className="opacity-50 line-through">₹{price}</p>
          <p className="text-green-600 font-semibold">{discountPersent}% off</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCards;
