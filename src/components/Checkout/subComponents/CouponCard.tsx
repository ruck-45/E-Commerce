import React, { useState } from "react";

interface CouponCardProps {
  onSubmit: (couponCode: string) => void;
}

const CouponCard: React.FC<CouponCardProps> = ({ onSubmit }) => {
  const [couponCode, setCouponCode] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(couponCode); // Pass the coupon code to the parent component
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="bg-white p-4 mb-2">
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
            className="border border-gray-300 rounded-md w-full py-1 px-3  focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter coupon code"
          />
          <button
            type="submit"
          
            className="bg-blue-500 text-white rounded-md px-4 py-2 font-sans w-full hover:bg-blue-600 transition duration-300 text-lg" 
          >
            APPLY
          </button>
        </form>
      </div>
    </div>
  );
};

export default CouponCard;
