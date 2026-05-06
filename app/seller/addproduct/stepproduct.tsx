"use client";

import { useForm } from "@/app/context/FormContext";

const StepProduct = () => {
  const { state, dispatch } = useForm();

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Product Details</h2>

      {/* Product Name */}
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
        className="border p-2 mb-3 w-full"
      />

      {/* Price */}
      <input
        type="number"
        placeholder="Price"
        value={state.product.price}
        onChange={(e) =>
          dispatch({
            type: "SET_PRODUCT",
            payload: { price: e.target.value }
          })
        }
        className="border p-2 mb-3 w-full"
      />

      {/* Category */}
      <select
        value={state.product.category}
        onChange={(e) =>
          dispatch({
            type: "SET_PRODUCT",
            payload: { category: e.target.value }
          })
        }
        className="border p-2 mb-4 w-full"
      >
        <option value="">Select Category</option>
        <option value="Electronics">Electronics</option>
        <option value="Clothing">Clothing</option>
        <option value="Food">Food</option>
      </select>

      {/* Buttons */}
      <div className="flex justify-between">
        <button
          onClick={() => dispatch({ type: "PREV_STEP" })}
          className="bg-gray-500 text-white px-4 py-2 rounded"
        >
          Back
        </button>

        <button
          onClick={() => dispatch({ type: "NEXT_STEP" })}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default StepProduct;