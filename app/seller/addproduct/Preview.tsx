"use client";

import { useForm } from "@/app/context/FormContext";

const Preview = () => {
  const { state, dispatch } = useForm();

  return (
    <div className="space-y-10">

      {/* HEADER */}
      <div>
        <h2 className="text-3xl font-bold text-gray-800">
          Review & Submit
        </h2>

        <p className="text-gray-500 mt-2">
          Verify all information before submission
        </p>
      </div>

      {/* GRID */}
      <div className=" ">

        {/* SELLER */}
        <div className="bg-gradient-to-br from-indigo-50 to-blue-50 border border-indigo-100 rounded-3xl p-8 shadow-sm">

          <h3 className="text-2xl font-bold text-indigo-700 mb-6">
            Seller Details
          </h3>

          <div className="space-y-4 text-gray-700">

            <div>
              <p className="text-sm text-gray-500">Full Name</p>
              <p className="font-semibold text-lg">
                {state.client.name}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Email</p>
              <p className="font-semibold text-lg">
                {state.client.email}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Phone</p>
              <p className="font-semibold text-lg">
                {state.client.phone}
              </p>
            </div>

             <div>
              <p className="text-sm text-gray-500">Business Name</p>
              <p className="font-semibold text-lg">
                {state.client.BussinessName}
              </p>
            </div>

             <div>
              <p className="text-sm text-gray-500">GST Number</p>
              <p className="font-semibold text-lg">
                {state.client.gstNumber}
              </p>
            </div>
              <div>
              <p className="text-sm text-gray-500">Company Location</p>
              <p className="font-semibold text-lg">
                {state.client.location}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Description</p>
              <p className="font-semibold text-lg">
                {state.client.Description}
              </p>
            </div>
          </div>
        </div>

        {/* PRODUCT */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100 rounded-3xl p-8 shadow-sm mt-10">

          <h3 className="text-2xl font-bold text-green-700 mb-6">
            Product Details
          </h3>

          <div className="space-y-4 text-gray-700">

            <div>
              <p className="text-sm text-gray-500">Product Name</p>
              <p className="font-semibold text-lg">
                {state.product.name}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Price</p>
              <p className="font-semibold text-lg">
                ₹ {state.product.price}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Category</p>
              <p className="font-semibold text-lg">
                {state.product.category}
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* BUTTONS */}
      <div className="flex flex-col md:flex-row gap-5">

        <button
          onClick={() => dispatch({ type: "PREV_STEP" })}
          className="w-full md:w-1/2 bg-gray-300 hover:bg-gray-400 transition-all duration-300 py-5 rounded-2xl font-semibold"
        >
          ← Back
        </button>

        <button
          onClick={() => alert("Seller Registered Successfully 🚀")}
          className="w-full md:w-1/2 bg-gradient-to-r from-green-500 to-emerald-600 hover:scale-[1.01] transition-all duration-300 text-white py-5 rounded-2xl font-semibold shadow-lg"
        >
          Submit Seller ✔
        </button>

      </div>
    </div>
  );
};

export default Preview;





