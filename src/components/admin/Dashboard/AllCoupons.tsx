import { Button } from "@nextui-org/react";
import React, { useEffect, useState } from "react";

interface Coupon {
  id: number;
  code: string;
  discountPercent: number;
  maxDiscountPrice: number;
}

interface DeleteModalProps {
  isOpen: boolean;
  onCancel: () => void;
  onConfirm: () => void;
}
const DeleteModal: React.FC<DeleteModalProps> = ({
    isOpen,
    onCancel,
    onConfirm,
  }) => {
    return (
      <div
        className={`fixed inset-0 z-10 flex items-center justify-center ${
          isOpen ? "" : "hidden"
        }`}
      >
        <div className="absolute inset-0 bg-gray-100 opacity-30"></div>
        <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
          <p className="mb-4">Are you sure you want to delete this coupon?</p>
          <div className="flex justify-end">
            <Button
              variant="ghost"
              color="danger"
              onClick={onConfirm}
              className="mr-2"
            >
              Delete
            </Button>
            <Button variant="ghost" onClick={onCancel}>
              Cancel
            </Button>
          </div>
        </div>
      </div>
    );
  };
  

const AllCoupons: React.FC = () => {
  const [coupons, setCoupons] = useState<Coupon[]>([]);
  const [selectedCouponId, setSelectedCouponId] = useState<number | null>(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  useEffect(() => {
    generateFakeCoupons();
  }, []);

  const getRandomInt = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const generateFakeCoupons = () => {
    const tempCoupons: Coupon[] = [];
    for (let i = 0; i < 20; i++) {
      const coupon: Coupon = {
        id: i + 1,
        code: Math.random().toString(36).substring(7),
        discountPercent: getRandomInt(5, 20),
        maxDiscountPrice: getRandomInt(5, 50),
      };
      tempCoupons.push(coupon);
    }
    setCoupons(tempCoupons);
  };

  const handleEdit = (id: number) => {
    console.log(`Edit coupon with ID ${id}`);
  };

  const handleDelete = (id: number) => {
    setSelectedCouponId(id);
    setShowDeleteModal(true);
  };

  const handleConfirmDelete = () => {
    if (selectedCouponId) {
      const updatedCoupons = coupons.filter(
        (coupon) => coupon.id !== selectedCouponId
      );
      setCoupons(updatedCoupons);
      setShowDeleteModal(false);
    }
  };

  const handleCancelDelete = () => {
    setShowDeleteModal(false);
    setSelectedCouponId(null);
  };

  return (
    <div className="text text-center relative">
      <h2 className="text-2xl text-center font-semibold mb-4 mt-8">
        <span className="border-b-2 border-black">All</span> <span className="border-b-2 border-black"> Coupons</span> 
      </h2>

      <div className="flex justify-center">
        <table className="table-auto w-full  lg:max-w-[95%] text-center mt-4">
          <thead>
            <tr>
              <th className="px-4 py-2">Code</th>
              <th className="px-4 py-2">Discount (%)</th>
              <th className="px-4 py-2">Max Discount Price</th>
              <th className="px-4 py-2">Edit</th>
              <th className="px-4 py-2">Delete</th>
            </tr>
          </thead>
          <tbody>
            {coupons.map((coupon, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{coupon.code}</td>
                <td className="border px-4 py-2">{coupon.discountPercent}</td>
                <td className="border px-4 py-2">${coupon.maxDiscountPrice}</td>
                <td className="border px-4 py-2">
                  <Button
                    variant="ghost"
                    size="md"
                    color="secondary"
                    onClick={() => handleEdit(coupon.id)}
                  >
                    Edit
                  </Button>
                </td>
                <td className="border px-4 py-2">
                  <Button
                    variant="ghost"
                    size="md"
                    color="warning"
                    onClick={() => handleDelete(coupon.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <DeleteModal
        isOpen={showDeleteModal}
        onCancel={handleCancelDelete}
        onConfirm={handleConfirmDelete}
      />
    </div>
  );
};

export default AllCoupons;
