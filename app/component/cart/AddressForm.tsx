"use client";

import { useState } from "react";

type AddressFormProps = {
  fetchAddress: () => void;
  closeForm: () => void;
};

const AddressForm = ({ fetchAddress, closeForm }: AddressFormProps) => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    houseNo: "",
    area: "",
    city: "",
    state: "",
    pincode: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async () => {
    try {
      if (
        !formData.fullName ||
        !formData.phone ||
        !formData.houseNo ||
        !formData.area ||
        !formData.city ||
        !formData.state ||
        !formData.pincode
      ) {
        alert("Please fill all fields.");
        return;
      }
      const res = await fetch("/api/buyeraddres", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      console.log(data);

      if (res.ok) {
        alert("Address saved successfully");
        fetchAddress(); // Fetch latest address from DB
        closeForm(); // Close the form
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="bg-white shadow-md rounded-3xl border border-gray-200 p-6">
      <h2 className="text-2xl font-bold mb-6">Add Delivery Address</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block mb-2 font-medium">Full Name</label>

          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter Full Name"
            className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-fuchsia-500"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">Phone Number</label>

          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter Phone Number"
            className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-fuchsia-500"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">House No</label>

          <input
            type="text"
            name="houseNo"
            value={formData.houseNo}
            onChange={handleChange}
            placeholder="House No"
            className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-fuchsia-500"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">Area</label>

          <input
            type="text"
            name="area"
            value={formData.area}
            onChange={handleChange}
            placeholder="Area"
            className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-fuchsia-500"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">City</label>

          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="City"
            className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-fuchsia-500"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">State</label>

          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
            placeholder="State"
            className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-fuchsia-500"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">Pincode</label>

          <input
            type="text"
            name="pincode"
            value={formData.pincode}
            onChange={handleChange}
            placeholder="Pincode"
            className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-fuchsia-500"
          />
        </div>
      </div>

      <div className="flex justify-end mt-8 gap-4">
        <button onClick={closeForm} className="px-6 py-3 rounded-xl border">
          Cancel
        </button>
        <button
          onClick={handleSubmit}
          className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white px-6 py-3 rounded-xl"
        >
          Save Address
        </button>
      </div>
    </div>
  );
};

export default AddressForm;
