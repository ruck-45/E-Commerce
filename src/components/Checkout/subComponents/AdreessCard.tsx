import { useSelector } from "react-redux";
import { RootState } from "../../../Redux/store";
import { getCookie } from "../../../utils/cookies";

const AddressCard = () => {
  const shippingInfo = useSelector((state: RootState) => state.shippingInfo);
  const username = getCookie("username");

  return (
    <div>
      <h1 className="text-lg font-semibold pb-[0.5rem]">Shipping Information</h1>
      <div>
        <p className="text-default-600">
          <span className="font-semibold">Name:</span> {username}
        </p>
        <p className="text-default-600">
          <span className="font-semibold">Address:</span> {shippingInfo.address}
        </p>
        <p className="text-default-600">
          <span className="font-semibold">City:</span> {shippingInfo.city}
        </p>
        <p className="text-default-600">
          <span className="font-semibold">State:</span> {shippingInfo.state}
        </p>
        <p className="text-default-600">
          <span className="font-semibold">Pincode:</span> {shippingInfo.zip}
        </p>
        <p className="text-default-600">
          <span className="font-semibold">Phone-Number:</span> {shippingInfo.phoneNumber}
        </p>
      </div>
    </div>
  );
};

export default AddressCard;
