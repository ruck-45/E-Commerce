import axios from "axios";
import { useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { getCookie } from "../../../utils/cookies";
import { Button } from "@nextui-org/react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../Redux/store";

type CardProps = {
  onClose: any;
  jobId: string;
};

const Model = (props: CardProps) => {
  const token = getCookie("token");
  const apiUrl = useSelector((state: RootState) => state.apiConfig.value);

  const navigate = useNavigate();
  const modalRef = useRef<HTMLDivElement | null>(null);

  const [loading, setLoading] = useState(false);

  const closeModal = (e: any) => {
    if (modalRef.current === e.target) {
      props.onClose();
    }
  };

  async function deleteItemById() {
    try {
      console.log("id is", props.jobId);
      const response = await axios.delete(`${apiUrl}/items/deleteItem`, {
        data: { id: props.jobId },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("delete by id", response);
      if (response?.data?.success === true) {
        navigate("/Admin");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div
      ref={modalRef}
      onClick={closeModal}
      className="fixed inset-0 z-50 backdrop-blur-md flex justify-center items-center"
    >
      <div className="flex flex-col w-[30rem] h-auto bg-slate-600 items-center justify-center ">
        <div className="p-[3rem]">
          <p className="text-white font-semibold text-2xl"> Are You Sure Want to Delete Product?</p>
        </div>

        <div className="flex justify-center items-center gap-[1rem] p-[2rem]">
          <Button
            onClick={props.onClose}
            className="py-[0.6rem] px-[1rem] bg-green-600 text-white rounded-xl hover:text-yellow-600 hover:bg-white"
            isLoading={loading}
          >
            Close
          </Button>
          <Button
            onClick={deleteItemById}
            className="py-[0.6rem] px-[1rem] bg-red-600 text-white rounded-xl hover:text-[#F31260] hover:bg-white"
            isLoading={loading}
          >
            Delete
          </Button>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Model;
