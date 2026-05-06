"use client";

import { useForm } from "@/app/context/FormContext";

const Preview = () => {
  const { state, dispatch } = useForm();

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Preview</h2>

      <h3 className="font-semibold">Client Info</h3>
      <p>Name: {state.client.name}</p>
      <p>Email: {state.client.email}</p>
      <p>Phone: {state.client.phone}</p>

      <h3 className="font-semibold mt-4">Product Info</h3>
      <p>Name: {state.product.name}</p>
      <p>Price: ₹{state.product.price}</p>
      <p>Category: {state.product.category}</p>

      <div className="mt-5 flex justify-between">
        <button
          onClick={() => dispatch({ type: "PREV_STEP" })}
          className="bg-gray-500 text-white px-4 py-2 rounded"
        >
          Back
        </button>

        <button
          onClick={() => alert("Submit API here 🚀")}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Preview;