import { styled, TextField } from "@mui/material";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import AllCoupons from "./AllCoupons";
import { Button, Modal } from "@nextui-org/react";
import { Close } from "@mui/icons-material"; // Import the Close icon
import { useSelector } from "react-redux";
import { RootState } from "../../../Redux/store";

const StyledTextField = styled(TextField)(({ theme, error }) => ({
  "& .MuiOutlinedInput-root": {
    borderColor: error ? "red" : theme.palette.divider,
  },
}));

const initialCoupon = {
  code: "",
  maxDiscountPrice: "",
  discountPercent: "",
  minAmount: ""
};

type Coupon = {
  code: string;
  maxDiscountPrice: number | string;
  discountPercent: number | string;
  minAmount: number | string;
};

interface AddCouponProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddCoupon: React.FC<AddCouponProps> = ({ isOpen, onClose }) => {
  const [isError, setIsError] = useState({
    code: { isError: false, message: "" },
    discountPercent: { isError: false, message: "" },
    maxDiscountPrice: { isError: false, message: "" },
  });
  const apiUrl = useSelector((state: RootState) => state.apiConfig.value);

  const [coupon, setCoupon] = useState<Coupon>(initialCoupon);

  function handleUserInput(e: any) {
    const { name, value } = e.target;
    setIsError({ ...isError, [name]: { ...name, isError: false } });
    const numberRequiredFields: (keyof Coupon)[] = ["maxDiscountPrice"];

    if (numberRequiredFields.includes(name)) {
      if (+value < 0 || value === "") setCoupon({ ...coupon, [name]: "" });
      else setCoupon({ ...coupon, [name]: +value });
    } else {
      setCoupon({ ...coupon, [name]: value });
    }
  }

  const addCoupon = async () => {
    let errors = {
      code: { isError: false, message: "" },
      discountPercent: { isError: false, message: "" },
      maxDiscountPrice: { isError: false, message: "" },
      minAmount: { isError: false, message: "" },
    };
    let hasErrors = false;

    if (!coupon.code) {
      errors.code = { isError: true, message: "Coupon code is required" };
      hasErrors = true;
    }

    if (+coupon.maxDiscountPrice <= 0) {
      errors.maxDiscountPrice = {
        isError: true,
        message: "Max discount price must be greater than 0",
      };
      hasErrors = true;
    }
    if (+coupon.discountPercent <= 0) {
      errors.discountPercent = {
        isError: true,
        message: "Max discount price must be greater than 0",
      };
      hasErrors = true;
    }
    if (+coupon.minAmount <= 0) {
      errors.minAmount = {
        isError: true,
        message: "Max discount price must be greater than 0",
      };
      hasErrors = true;
    }

    if (hasErrors) {
      setIsError(errors);
      return;
    }
    try {
      const response = await fetch(`${apiUrl}/coupan/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          code: coupon.code,
          amount: coupon.maxDiscountPrice,
          coupon_id: Math.floor(Math.random() * 300000)
          .toString()
          .padStart(6, "0"),
          percent: coupon.discountPercent,
          minAmount: coupon.minAmount
        }),
      });
      console.log('coupon response',response);

      if (response.ok || response.status === 200) {
        toast.success("Coupon added successfully");
        setCoupon(initialCoupon);
        window.location.reload();
      } else {
        throw new Error("Failed to add coupon");
      }
    } catch (error) {
      console.error("Error adding coupon:", error);
      toast.error("Failed to add coupon");
    }
    onClose();
  };

  return (
    <div
      className={`fixed inset-0 z-10 flex items-center justify-center ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div className="absolute inset-0 bg-gray-400 opacity-30"></div>
      <div
        className="bg-yellow-200 p-6 rounded-lg shadow-lg relative"
        
      >
        <Button
          onClick={onClose}
          variant="light"
          color="default"
          className="absolute top-0 right-0 m-2 bg-blue-300"
        >
          Close
        </Button>
        <h3 className="text-2xl text-center mb-4">Create Coupon</h3>
        <div className="mt-4" style={{ padding: "0 2rem" }}>
          <div className="my-4 ">
            <StyledTextField
              style={{ marginTop: "2rem" }}
              fullWidth
              onChange={handleUserInput}
              value={coupon.code}
              id="outlined-basic"
              name="code"
              label="Coupon Code"
              variant="outlined"
              error={isError.code.isError}
              helperText={isError.code.isError ? isError.code.message : ""}
            />
            <StyledTextField
              fullWidth
              style={{ marginTop: "2rem" }}
              onChange={handleUserInput}
              value={coupon.maxDiscountPrice}
              id="outlined-basic"
              name="maxDiscountPrice"
              label="Max Discount Price"
              variant="outlined"
              type="number"
              error={isError.maxDiscountPrice.isError}
              helperText={
                isError.maxDiscountPrice.isError
                  ? isError.maxDiscountPrice.message
                  : ""
              }
            />
            <StyledTextField
              style={{ marginTop: "2rem" }}
              fullWidth
              onChange={handleUserInput}
              value={coupon.minAmount}
              id="outlined-basic"
              name="minAmount"
              label="Minimum amount to apply the coupon code"
              variant="outlined"
              error={isError.code.isError}
              helperText={isError.code.isError ? isError.code.message : ""}
            />
            <StyledTextField
              style={{ marginTop: "2rem" }}
              fullWidth
              onChange={handleUserInput}
              value={coupon.discountPercent}
              id="outlined-basic"
              name="discountPercent"
              label="Discount percentage"
              variant="outlined"
              error={isError.code.isError}
              helperText={isError.code.isError ? isError.code.message : ""}
            />
            <Button
              fullWidth
              style={{ marginTop: "2rem" }}
              onClick={addCoupon}
              color="default"
              variant="light"
              className="rounded-xl bg-green-400 "
            >
              Create Coupon
            </Button>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default function Coupon() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="p-4 sm:p-6 lg:p-8 mt-4 sm:mt-6 lg:mt-8">
        <div className="flex justify-end">
          <Button
            variant="ghost"
            size="md"
            color="secondary"
            onClick={handleOpenModal}
          >
            Add Coupon
          </Button>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <AddCoupon isOpen={isModalOpen} onClose={handleCloseModal} />
      </Modal>
      <AllCoupons />
      <Toaster />
    </div>
  );
}
