"use client";
import AddressForm from "./AddressForm";

import { useEffect, useState } from "react";

const Address = () => {
  const [address, setAddress] = useState<any>(null);
  const [showForm, setShowForm] = useState(false);

  const fetchAddress = async () => {
    try {
      const res = await fetch("/api/buyeraddres");
      const data = await res.json();

      setAddress(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchAddress();
  }, []);

  useEffect(() => {
    console.log(address);
  }, [address]);

  // If no address exists
  if (!address) {
    return (
      <>
        {showForm ? (
          <AddressForm />
        ) : (
          <div className="bg-white shadow-md border border-gray-200 rounded-3xl p-7">
            <div className="flex flex-col items-center justify-center gap-5">
              <h2 className="text-2xl font-bold text-gray-800">
                No Address Found
              </h2>

              <p className="text-gray-500">Please add your delivery address.</p>

              <button
                onClick={() => setShowForm(true)}
                className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white px-6 py-3 rounded-2xl font-semibold transition"
              >
                Add Address
              </button>
            </div>
          </div>
        )}
      </>
    );
  }

  // If address exists
  return (
    <div className="bg-white shadow-md border border-gray-200 rounded-3xl p-5 md:p-7">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-5">
        <div>
          <p className="text-sm text-gray-500 mb-1">Delivery Address</p>

          <h2 className="text-xl font-bold text-gray-800">
            {address.fullName}
          </h2>

          <p className="text-gray-600 mt-2">
            {address.houseNo}, {address.area}
          </p>

          <p className="text-gray-600">
            {address.city}, {address.state} - {address.pincode}
          </p>

          <p className="text-gray-600 mt-2">Phone : {address.phone}</p>
        </div>

        <div>
          <button className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white px-6 py-3 rounded-2xl font-semibold shadow-md transition duration-300">
            Edit Address
          </button>
        </div>
      </div>
    </div>
  );
};

export default Address;
