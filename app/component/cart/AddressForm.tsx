"use client";

const AddressForm = () => {
  return (
    <div className="bg-white shadow-md rounded-3xl border border-gray-200 p-6">

      <h2 className="text-2xl font-bold mb-6">
        Add Delivery Address
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

        <div>
          <label className="block mb-2 font-medium">
            Full Name
          </label>

          <input
            type="text"
            placeholder="Enter Full Name"
            className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-fuchsia-500"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Phone Number
          </label>

          <input
            type="text"
            placeholder="Enter Phone Number"
            className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-fuchsia-500"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">
            House No
          </label>

          <input
            type="text"
            placeholder="House No"
            className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-fuchsia-500"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Area
          </label>

          <input
            type="text"
            placeholder="Area"
            className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-fuchsia-500"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">
            City
          </label>

          <input
            type="text"
            placeholder="City"
            className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-fuchsia-500"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">
            State
          </label>

          <input
            type="text"
            placeholder="State"
            className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-fuchsia-500"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Pincode
          </label>

          <input
            type="text"
            placeholder="Pincode"
            className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-fuchsia-500"
          />
        </div>

      </div>

      <div className="flex justify-end mt-8 gap-4">

        <button className="px-6 py-3 rounded-xl border">
          Cancel
        </button>

        <button className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white px-6 py-3 rounded-xl">
          Save Address
        </button>

      </div>

    </div>
  );
};

export default AddressForm;