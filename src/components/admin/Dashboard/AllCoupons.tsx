import { Button } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../Redux/store";
import { TextField, styled } from "@mui/material";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";



type Coupon = {
  coupon_id: number; 
  code: string;
  amount: number;
};

interface EditCouponModalProps {
  isOpen: boolean;
  onClose: () => void;
  coupon: any; 
  onUpdateCoupon: (updatedCoupon: any) => void;
}

const StyledTextField = styled(TextField)(({ theme, error }) => ({
  "& .MuiOutlinedInput-root": {
    borderColor: error ? "red" : theme.palette.divider,
  },
}));


const EditCouponModal: React.FC<EditCouponModalProps> = ({ isOpen, onClose, coupon, onUpdateCoupon }) => {
  const apiUrl = useSelector((state: RootState) => state.apiConfig.value);
  
  const [updatedCoupon, setUpdatedCoupon] = useState<Coupon>(coupon);

  const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUpdatedCoupon((prevCoupon:Coupon) => ({
      ...prevCoupon,
      [name]: value
    }));
  };

  const handleUpdateCoupon = async() => {
    console.log(updatedCoupon);
    const response = await axios.put(`${apiUrl}/coupan/updateCoupon`, {
      coupon_id: updatedCoupon.coupon_id,
      code: updatedCoupon.code,
      amount: +updatedCoupon.amount,
    }, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if(response.status === 200){
      toast.success("Coupon updated successfully");
      onClose();
      onUpdateCoupon(updatedCoupon);
      // window.location.reload();
    }
    else{
      toast.error("Failed to update coupon");
    }
    onClose();
  };

  useEffect(() => {
    setUpdatedCoupon(coupon); 
  }, [coupon]);

  return (
    <div className={`fixed inset-0 z-10 flex items-center justify-center ${isOpen ? '' : 'hidden'}`}>
      {/* Modal content */}
      <div className="absolute inset-0 bg-gray-400 opacity-30"></div>
      <div className="bg-yellow-200 p-6 rounded-lg shadow-lg relative" style={{ height: '60vh' }}>
        <Button onClick={onClose} variant="light" color="default" className="absolute top-0 right-0 m-2 bg-blue-300">
          Close
        </Button>
        <h3 className="text-2xl text-center mb-4">Edit Coupon</h3>
        <div className="cp-form-wrapper mt-4" style={{ padding: '0 2rem' }}>
          <div className="cp-form my-4 ">
            <StyledTextField
              style={{ marginTop: '2rem' }}
              fullWidth
              onChange={handleUserInput}
              value={updatedCoupon ? updatedCoupon.code : 'error'}
              name="code"
              label="Coupon Code"
              variant="outlined"
            />
            <StyledTextField
              fullWidth
              style={{ marginTop: '2rem' }}
              onChange={handleUserInput}
              value={updatedCoupon ? updatedCoupon.amount : 'error'}
              name="amount"
              label="Max Discount Price"
              variant="outlined"
              type="number"
            />
            <Button
              fullWidth
              style={{ marginTop: '2rem' }}
              onClick={handleUpdateCoupon}
              color="default"
              variant="light"
              className="rounded-xl bg-green-400 "
            >
              Update Coupon
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};


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
      <div className="absolute inset-0 bg-white-100 opacity-30"></div>
      <div className="bg-yellow-500 p-6 rounded-lg shadow-lg">
        <p className="mb-4 text-white">
          Are you sure you want to delete this coupon?
        </p>
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
  const [coupons, setCoupons] = useState<any>([]);
  const apiUrl = useSelector((state: RootState) => state.apiConfig.value);
  const [selectedCouponId, setSelectedCouponId] = useState<number | null>(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedCoupon, setSelectedCoupon] = useState<any>();

  const handleEditCouponClick = (coupon: any) => {
    setSelectedCoupon(coupon);
    setIsEditModalOpen(true);
  };

  const handleUpdateCoupon = (updatedCoupon: any) => {
    setIsEditModalOpen(false);
  };

  const couponsPerPage = 7;

  useEffect(() => {
    getCoupons();
  }, []);

  const getCoupons = async () => {
    const result = await fetch(`${apiUrl}/coupan/allCoupan`);
    const data = await result.json();
    setCoupons(data.payload.payload);
  };

  const handleDelete = (coupon:any) => {
    console.log('delete cupon', coupon);
    setSelectedCouponId(coupon.coupon_id);
    setShowDeleteModal(true);
  };

  const handleConfirmDelete = async () => {
    console.log('coupon id',selectedCouponId);
    if (selectedCouponId) {
      try {
        const response = await fetch(`${apiUrl}/coupan/delete`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            coupon_id: selectedCouponId,
          }),
        });

        if (response.ok) {
          toast.success('coupon deleted successfully');
          setShowDeleteModal(false);
          window.location.reload();
        } else {
          console.error("Error deleting coupon:", response.statusText);
        }
      } catch (error) {
        console.error("Error deleting coupon:", error);
        toast.error('Error deleting coupon:');
      }
    }
  };

  const handleCancelDelete = () => {
    setShowDeleteModal(false);
    setSelectedCouponId(null);
  };

  const indexOfLastCoupon = currentPage * couponsPerPage;
  const indexOfFirstCoupon = indexOfLastCoupon - couponsPerPage;
  const currentCoupons =
    coupons.length === 0
      ? []
      : coupons.slice(indexOfFirstCoupon, indexOfLastCoupon);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="text text-center relative lg:mt-[-4rem]">
      <h2 className="text-2xl text-center font-semibold mb-4 mt-8">
        <span className="border-b-2 border-black">All</span>{" "}
        <span className="border-b-2 border-black"> Coupons</span>
      </h2>

      <div className="flex justify-center">
        <table className="table-auto w-full  lg:max-w-[95%] text-center mt-4">
          <thead>
            <tr>
              <th className="px-4 py-2">Code</th>
              <th className="px-4 py-2">Max Discount Price</th>
              <th className="px-4 py-2">Edit</th>
              <th className="px-4 py-2">Delete</th>
            </tr>
          </thead>
          <tbody>
            {currentCoupons.length>0 ? currentCoupons.map((coupon: any) => (
              <tr key={coupon.coupon_id}>
                <td className="border px-4 py-2">{coupon.code}</td>
                <td className="border px-4 py-2">${coupon.amount}</td>
                <td className="border px-4 py-2">
                  <Button
                    variant="ghost"
                    size="md"
                    color="secondary"
                    onClick={() => handleEditCouponClick(coupon)}
                  >
                    Edit
                  </Button>
                </td>
                <td className="border px-4 py-2">
                  <Button
                    variant="ghost"
                    size="md"
                    color="warning"
                    onClick={() => handleDelete(coupon)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            )) : <span className="border-b-2 border-black"> No coupons found!!!</span>}
          </tbody>
        </table>
      </div>
      {!(coupons.length === 0) && (
        <div className="mt-4">
          <Button
            color="default"
            variant="light"
            className="bg-red-400"
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </Button>{" "}
          <Button
            color="default"
            variant="light"
            className="bg-yellow-400"
            onClick={() => paginate(currentPage + 1)}
            disabled={currentCoupons.length < couponsPerPage}
          >
            Next
          </Button>
        </div>
      )}

      <DeleteModal
        isOpen={showDeleteModal}
        onCancel={handleCancelDelete}
        onConfirm={handleConfirmDelete}
      />
      <EditCouponModal
        isOpen={isEditModalOpen}
        coupon={selectedCoupon}
        onUpdateCoupon={handleUpdateCoupon}
        onClose={() => setIsEditModalOpen(false)}
        />
    <Toaster/>
    </div>
  );
};

export default AllCoupons;
