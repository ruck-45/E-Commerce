import React from "react";

const AddressCard = () => {
  return (
    <div>
      {/* <h1 className="text-lg font-semibold py-4">Delivery Adress</h1> */}
      <div className="space-y-3">
        <p className="font-semibold">Anish Kumar</p>

        <p>
          Nagla nagli gali no 4, noida sector 134, 201305
        </p>

        <div className="space-y-1">
          <p className="font-semibold">Phone Number</p>
          <p>9599792729</p>
        </div>
      </div>
    </div>
  );
};

export default AddressCard;
