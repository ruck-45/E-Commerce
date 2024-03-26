type CardProps = {
  address: String;
  city: String;
  country: String;
  firstName: String;
  lastName: String;
  phoneNumber: number;
  state: String;
  zip: number;
};

const AddressCard = (props: CardProps) => {
  return (
    <div>
      <h1 className="text-lg font-semibold py-4">Delivery Address</h1>
      <div className="space-y-3">
        <p className="font-semibold">
          Name: {props.firstName} {props.lastName}
        </p>

        <p>Address: {props.address}</p>

        <div className="space-y-1">
          <p className="font-semibold">Pincode: {props.zip}</p>
          <p>Phone-Number: {props.phoneNumber}</p>
        </div>
      </div>
    </div>
  );
};

export default AddressCard;
