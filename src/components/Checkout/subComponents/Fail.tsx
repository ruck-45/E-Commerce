import { ImCross } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import "./confirmation.css";

const Fail = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen failbg flex flex-col items-center px-[3rem]">
      <div className="bg-[#FAA0BF] rounded-full p-[2rem] translate-y-[50%] shadow-xl">
        <div className="bg-[#F31260] rounded-full p-[1.5rem]">
          <ImCross className="text-white text-[2rem]" />
        </div>
      </div>
      <div className="max-w-lg w-full bg-white p-8 rounded-[2rem] shadow-md">
        <p className="mt-[4rem] text-[#F31260]">Oops !</p>
        <h1 className="text-3xl text-[#C20E4D] mb-4 font-bold">Payment Failed 👎</h1>
        <p className="text-lg text-[#F31260] mb-8">
          We regret to inform you that your payment was unsuccessful. Your order could not be processed at this time.
        </p>
        <button
          className="bg-[#F31260] text-white px-4 py-2 rounded-md hover:bg-[#C20E4D] focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
          onClick={() => navigate("/Shop")}
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default Fail;
