import { styled, TextField, Button } from "@mui/material";
import { useState } from "react";
import { Toaster } from "react-hot-toast";
import AllCoupons from "./AllCoupons";
import { Modal } from "@nextui-org/react";
import { Close } from "@mui/icons-material"; // Import the Close icon

const StyledTextField = styled(TextField)(({ theme, error }) => ({
  "& .MuiOutlinedInput-root": {
    borderColor: error ? "red" : theme.palette.divider,
  },
}));

const initialCoupon = {
  code: "",
  discountPercent: "",
  maxDiscountPrice: "",
};

type Coupon = {
  code: string;
  discountPercent: number | string;
  maxDiscountPrice: number | string;
};

interface AddCouponProps {
  isOpen: boolean;
  onClose: () => void; // Add onClose prop
}

const AddCoupon: React.FC<AddCouponProps> = ({ isOpen, onClose }) => {
  const [isError, setIsError] = useState({
    code: { isError: false, message: "" },
    discountPercent: { isError: false, message: "" },
    maxDiscountPrice: { isError: false, message: "" },
  });

  const [coupon, setCoupon] = useState<Coupon>(initialCoupon);

  function handleUserInput(e: any) {
    const { name, value } = e.target;
    setIsError({ ...isError, [name]: { ...name, isError: false } });
    const numberRequiredFields: (keyof Coupon)[] = [
      "discountPercent",
      "maxDiscountPrice",
    ];

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
    };
    let hasErrors = false;

    if (!coupon.code) {
      errors.code = { isError: true, message: "Coupon code is required" };
      hasErrors = true;
    }

    if (+coupon.discountPercent <= 0) {
      errors.discountPercent = {
        isError: true,
        message: "Discount percent must be greater than 0",
      };
      hasErrors = true;
    }

    if (+coupon.maxDiscountPrice <= 0) {
      errors.maxDiscountPrice = {
        isError: true,
        message: "Max discount price must be greater than 0",
      };
      hasErrors = true;
    }

    if (hasErrors) {
      setIsError(errors);
      return;
    }
    // Add your logic for adding a coupon here
    console.log("Adding coupon:", coupon);
  };

  return (
    <div
      className={`fixed inset-0 z-10 flex items-center justify-center ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div className="absolute inset-0 bg-gray-400 opacity-30" ></div>
      <div
        className="bg-gray-400 p-6 rounded-lg shadow-lg relative"
        style={{ height: "80vh"}}
      >
        <Button
          onClick={onClose}
          variant="text"
          color="inherit"
          className="absolute top-0 right-0 m-2"
        >
          <Close />
        </Button>
        <h3 className="text-2xl text-center mb-4">Create Coupon</h3>
        <div className="cp-form-wrapper mt-4" style={{padding:'0 2rem'}}>
          <div className="cp-form my-4 ">
            <StyledTextField
              style={{marginTop:'2rem'}}
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
             style={{marginTop:'2rem'}}
              fullWidth
              onChange={handleUserInput}
              value={coupon.discountPercent}
              id="outlined-basic"
              name="discountPercent"
              label="Discount Percent"
              variant="outlined"
              type="number"
              error={isError.discountPercent.isError}
              helperText={
                isError.discountPercent.isError
                  ? isError.discountPercent.message
                  : ""
              }
              
            />
            <StyledTextField
              fullWidth
              style={{marginTop:'2rem'}}
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
            <Button
              fullWidth
              style={{marginTop:'2rem'}}
              onClick={addCoupon}
              color="success"
              variant="contained"
              className="rounded-xl"
            >
              Add Coupon
            </Button>
          </div>
        </div>
      </div>
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
      <div className="cp-wrapper p-4 sm:p-6 lg:p-8 mt-4 sm:mt-6 lg:mt-8">
        <div className="flex justify-end">
          <Button
            onClick={handleOpenModal}
            color="success"
            variant="contained"
            className="rounded-sm"
          >
            Add Coupon
          </Button>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <AddCoupon isOpen={isModalOpen} onClose={handleCloseModal} />
      </Modal>
      <AllCoupons />
    </div>
  );
}
