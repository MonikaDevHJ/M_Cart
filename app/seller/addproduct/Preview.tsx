"use client";

import { useForm } from "@/app/context/FormContext";

const Preview = () => {
  const { state, dispatch } = useForm();

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Review Details
      </h2>

      <div className="bg-gray-50 rounded-lg p-5 space-y-4">
        <div>
          <h3 className="font-semibold text-gray-700">Client</h3>
          <p>{state.client.name}</p>
          <p>{state.client.email}</p>
          <p>{state.client.phone}</p>
        </div>

        <div>
          <h3 className="font-semibold text-gray-700">Product</h3>
          <p>{state.product.name}</p>
          <p>₹ {state.product.price}</p>
          <p>{state.product.category}</p>
        </div>
      </div>

      <div className="flex justify-between mt-6">
        <button
          onClick={() => dispatch({ type: "PREV_STEP" })}
          className="bg-gray-400 text-white px-5 py-2 rounded-lg"
        >
          ← Back
        </button>

        <button
          onClick={() => alert("Submit API 🚀")}
          className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg"
        >
          Submit ✔
        </button>
      </div>
    </div>
  );
};

export default Preview;