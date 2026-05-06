"use client";

import { useForm } from "@/app/context/FormContext";

const StepProduct = () => {
  const { state, dispatch } = useForm();

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Product Details
      </h2>

      <div className="space-y-4">
        <input
          type="text"
          placeholder="Product Name"
          value={state.product.name}
          onChange={(e) =>
            dispatch({
              type: "SET_PRODUCT",
              payload: { name: e.target.value }
            })
          }
          className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
        />

        <input
          type="number"
          placeholder="Price ₹"
          value={state.product.price}
          onChange={(e) =>
            dispatch({
              type: "SET_PRODUCT",
              payload: { price: e.target.value }
            })
          }
          className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
        />

        <select
          value={state.product.category}
          onChange={(e) =>
            dispatch({
              type: "SET_PRODUCT",
              payload: { category: e.target.value }
            })
          }
          className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
        >
          <option value="">Select Category</option>
          <option>Electronics</option>
          <option>Clothing</option>
          <option>Food</option>
        </select>
      </div>

      <div className="flex justify-between mt-6">
        <button
          onClick={() => dispatch({ type: "PREV_STEP" })}
          className="bg-gray-400 text-white px-5 py-2 rounded-lg"
        >
          ← Back
        </button>

        <button
          onClick={() => dispatch({ type: "NEXT_STEP" })}
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg"
        >
          Continue →
        </button>
      </div>
    </div>
  );
};

export default StepProduct;