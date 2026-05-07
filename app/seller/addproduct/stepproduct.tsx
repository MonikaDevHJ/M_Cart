"use client";

import { useForm } from "@/app/context/FormContext";

const StepProduct = () => {
  const { state, dispatch } = useForm();

  return (
    <div className="space-y-10">

      {/* HEADER */}
      <div>
        <h2 className="text-3xl font-bold text-gray-800">
          Product Details
        </h2>

        <p className="text-gray-500 mt-2">
          Add complete product information
        </p>
      </div>

      {/* FORM */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

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
          className="border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-indigo-500 hover:border-indigo-400 transition-all duration-300"
        />

        <input
          type="number"
          placeholder="Product Price ₹"
          value={state.product.price}
          onChange={(e) =>
            dispatch({
              type: "SET_PRODUCT",
              payload: { price: e.target.value }
            })
          }
          className="border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-indigo-500 hover:border-indigo-400 transition-all duration-300"
        />

        <select
          value={state.product.category}
          onChange={(e) =>
            dispatch({
              type: "SET_PRODUCT",
              payload: { category: e.target.value }
            })
          }
          className="border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-indigo-500 hover:border-indigo-400 transition-all duration-300"
        >
          <option value="">Select Category</option>
          <option>Electronics</option>
          <option>Fashion</option>
          <option>Food</option>
          <option>Furniture</option>
        </select>

        <input
          type="number"
          placeholder="Stock Quantity"
          className="border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-indigo-500 hover:border-indigo-400 transition-all duration-300"
        />

        <input
          type="text"
          placeholder="Brand Name"
          className="border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-indigo-500 hover:border-indigo-400 transition-all duration-300"
        />

        <input
          type="file"
          className="border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-indigo-500 hover:border-indigo-400 transition-all duration-300"
        />
      </div>

      {/* DESCRIPTION */}
      <textarea
        rows={6}
        placeholder="Product Description..."
        className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-indigo-500 hover:border-indigo-400 transition-all duration-300"
      />

      {/* BUTTONS */}
      <div className="flex flex-col md:flex-row gap-5">

        <button
          onClick={() => dispatch({ type: "PREV_STEP" })}
          className="w-full md:w-1/2 bg-gray-300 hover:bg-gray-400 transition-all duration-300 py-5 rounded-2xl font-semibold"
        >
          ← Back
        </button>

        <button
          onClick={() => dispatch({ type: "NEXT_STEP" })}
          className="w-full md:w-1/2 bg-gradient-to-r from-indigo-600 to-blue-600 hover:scale-[1.01] transition-all duration-300 text-white py-5 rounded-2xl font-semibold shadow-lg"
        >
          Continue →
        </button>

      </div>
    </div>
  );
};

export default StepProduct;