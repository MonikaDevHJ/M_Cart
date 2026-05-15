"use client";

import { useForm } from "@/app/context/FormContext";

const StepProduct = () => {
  const { state, dispatch } = useForm();

  const imagePreview =
    state.product.image instanceof File
      ? URL.createObjectURL(state.product.image)
      : null;

  return (
    <div className="space-y-10">
      {/* HEADER */}
      <div>
        <h2 className="text-3xl font-bold text-gray-800">Product Details</h2>

        <p className="text-gray-500 mt-2">Add complete product information</p>
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
          className="border border-gray-500 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-indigo-500 hover:border-indigo-400 transition-all duration-300"
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
          className="border border-gray-500 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-indigo-500 hover:border-indigo-400 transition-all duration-300"
        />

        <select
          value={state.product.category}
          onChange={(e) =>
            dispatch({
              type: "SET_PRODUCT",
              payload: { category: e.target.value }
            })
          }
          className="border border-gray-500 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-indigo-500 hover:border-indigo-400 transition-all duration-300"
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
          className="border border-gray-500 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-indigo-500 hover:border-indigo-400 transition-all duration-300"
          value={state.product.quantity}
          onChange={(e) =>
            dispatch({
              type: "SET_PRODUCT",
              payload: { quantity: e.target.value }
            })
          }
        />

        <input
          type="text"
          placeholder="Brand Name"
          className="border border-gray-500 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-indigo-500 hover:border-indigo-400 transition-all duration-300"
          value={state.product.brand}
          onChange={(e) =>
            dispatch({
              type: "SET_PRODUCT",
              payload: { brand: e.target.value }
            })
          }
        />

        <select
          value={state.product.size }
          onChange={(e) =>
            dispatch({
              type: "SET_PRODUCT",
              payload: { size: e.target.value }
            })
          }
          className="border border-gray-500 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-indigo-500 hover:border-indigo-400 transition-all duration-300"
        >
          <option value="">Select Size</option>
          <option>S</option>
          <option>L</option>
          <option>Xl</option>
          <option>XXL</option>
        </select>

        {/* Product Image */}
        <div className="md:col-span-2">
          <label className="block text-gray-700 font-semibold mb-3">
            Product Image
          </label>

          <div className="border-2 border-dashed border-indigo-300 rounded-3xl p-8 bg-indigo-50 hover:bg-indigo-100 transition-all duration-300">
            <input
              type="file"
              accept="image/*"
              id="productImage"
              hidden
              onChange={(e) => {
                const file = e.target.files?.[0];

                if (file) {
                  dispatch({
                    type: "SET_PRODUCT",
                    payload: { image: file }
                  });
                }
              }}
            />

            {/* Preview */}
            {imagePreview ? (
              <div className="flex flex-col items-center gap-5">
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="w-48 h-48 object-cover rounded-2xl border-4 border-white"
                />

                <button
                  type="button"
                  onClick={() =>
                    dispatch({
                      type: "SET_PRODUCT",
                      payload: { image: null }
                    })
                  }
                  className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-xl transition-all duration-300"
                >
                  Remove Image
                </button>
              </div>
            ) : (
              <label
                htmlFor="productImage"
                className="cursor-pointer flex flex-col items-center justify-center gap-4"
              >
                <div className="w-20 h-20 rounded-full bg-white shadow-md flex items-center justify-center text-4xl">
                  📷
                </div>
                <div className="text-center">
                  <p className="text-lg font-semibold text-gray-700">
                    Upload Product Image
                  </p>

                  <p className="text-sm text-gray-500 mt-1">
                    PNG, JPG, WEBP up to 5MB
                  </p>
                </div>

                <span className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-6 py-3 rounded-xl shadow-md hover:scale-105 transition-all duration-300">
                  Choose File
                </span>
              </label>
            )}
          </div>
        </div>
      </div>

      {/* DESCRIPTION */}
      <textarea
        rows={6}
        placeholder="Product Description..."
        className="w-full border border-gray-500 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-indigo-500 hover:border-indigo-400 transition-all duration-300"
      />

      {/* BUTTONS */}
      <div className="flex flex-col md:flex-row gap-5">
        <button
          onClick={() => dispatch({ type: "PREV_STEP" })}
          className="w-full md:w-1/2 bg-gray-500 hover:bg-gray-400 transition-all duration-300 py-5 rounded-2xl font-semibold"
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
