"use client";

import { useForm } from "@/app/context/FormContext";

const Preview = ({ productId }: { productId: string | null }) => {
  const { state, dispatch } = useForm();

  const handleSubmit = async () => {
    try {
      const formData = new FormData();

      // Seller Details
      formData.append("companyName", state.client.name);
      formData.append("email", state.client.email);
      formData.append("phone", state.client.phone);
      formData.append("businessName", state.client.BussinessName);
      formData.append("gstNumber", state.client.gstNumber);
      formData.append("location", state.client.Location);
      formData.append("sellerDesc", state.client.Description);

      // Product Details
      formData.append("productName", state.product.name);
      formData.append("productSize", state.product.size);

      formData.append("productPrice", state.product.price);
      formData.append("offerPercent", state.product.offerPercent);
      formData.append("selectCategory", state.product.category);
      formData.append("stockQuantity", String(state.product.quantity));
      formData.append("brandName", state.product.brand);
      formData.append("selectSize", state.product.size);

      // Image
      if (state.product.image instanceof File) {
        formData.append("productImage", state.product.image);
      }

      const url = productId ? `/api/products/${productId}` : "/api/products";

      const method = productId ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        body: formData
      });

      const result = await response.json();

      if (response.ok) {
        alert(
          productId
            ? "Product Updated Successfully ✅"
            : "Product Added Successfully 🚀"
        );
        console.log(result);
      } else {
        alert(result.error);
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  };

  const imagePreview =
    state.product.image instanceof File
      ? URL.createObjectURL(state.product.image)
      : state.product.image;
  console.log(imagePreview);
  console.log("Preview Image:", state.product.image);
  return (
    <div className="space-y-8 md:space-y-10">
      {/* HEADER */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          Review & Submit
        </h2>

        <p className="text-gray-500 mt-2 text-sm md:text-base">
          Verify all information before submission
        </p>
      </div>

      {/* SELLER DETAILS */}
      <div className="bg-gradient-to-br from-indigo-50 to-blue-50 border border-indigo-100 rounded-3xl p-5 md:p-8 shadow-sm">
        <h3 className="text-xl md:text-2xl font-bold text-indigo-700 mb-6">
          Seller Details
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-700">
          {/* LEFT */}
          <div className="space-y-6">
            <div>
              <p className="text-sm text-gray-500">Full Name</p>
              <p className="font-semibold text-base md:text-lg">
                {state.client.name}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Email</p>
              <p className="font-semibold text-base md:text-lg break-all">
                {state.client.email}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Phone</p>
              <p className="font-semibold text-base md:text-lg">
                {state.client.phone}
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="space-y-6">
            <div>
              <p className="text-sm text-gray-500">Business Name</p>
              <p className="font-semibold text-base md:text-lg">
                {state.client.BussinessName}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">GST Number</p>
              <p className="font-semibold text-base md:text-lg">
                {state.client.gstNumber}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Company Location</p>
              <p className="font-semibold text-base md:text-lg">
                {state.client.Location}
              </p>
            </div>
          </div>
        </div>

        {/* DESCRIPTION */}
        <div className="mt-8">
          <p className="text-sm text-gray-500">Description</p>

          <p className="font-semibold text-base md:text-lg mt-2 leading-7">
            {state.client.Description}
          </p>
        </div>
      </div>

      {/* PRODUCT DETAILS */}
      <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100 rounded-3xl p-5 md:p-8 shadow-sm">
        <h3 className="text-xl md:text-2xl font-bold text-green-700 mb-6">
          Product Details
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-700">
          {/* LEFT */}
          <div className="space-y-6">
            <div>
              <p className="text-sm text-gray-500">Product Name</p>
              <p className="font-semibold text-base md:text-lg">
                {state.product.name}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Price</p>
              <p className="font-semibold text-base md:text-lg">
                ₹ {state.product.price}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Offer</p>
              <p className="font-semibold text-base md:text-lg">
                {state.product.offerPercent}%
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Category</p>
              <p className="font-semibold text-base md:text-lg">
                {state.product.category}
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="space-y-6">
            <div>
              <p className="text-sm text-gray-500">Product Quantity</p>
              <p className="font-semibold text-base md:text-lg">
                {state.product.quantity}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Product Brand</p>
              <p className="font-semibold text-base md:text-lg">
                {state.product.brand}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Product Size</p>
              <p className="font-semibold text-base md:text-lg">
                {state.product.size}
              </p>
            </div>
          </div>
        </div>

        {/* IMAGE PREVIEW */}
        <div className="mt-10">
          <p className="text-md text-gray-700 mb-3 font-medium">
            Product Image
          </p>

          {imagePreview ? (
            <img
              src={imagePreview}
              alt="Product Image"
              className="w-full sm:w-72 h-52 object-cover rounded-2xl border border-gray-300 shadow-sm"
            />
          ) : (
            <p className="text-gray-400">No Image Uploaded</p>
          )}
        </div>
      </div>

      {/* BUTTONS */}
      <div className="flex flex-col md:flex-row gap-4">
        <button
          onClick={() => dispatch({ type: "PREV_STEP" })}
          className="w-full md:w-1/2 bg-gray-300 hover:bg-gray-400 transition-all duration-300 py-4 rounded-2xl font-semibold"
        >
          ← Back
        </button>

        <button
          onClick={handleSubmit}
          className="w-full md:w-1/2 bg-gradient-to-r from-green-500 to-emerald-600 hover:scale-[1.01] transition-all duration-300 text-white py-4 rounded-2xl font-semibold shadow-lg"
        >
          Submit Seller ✔
        </button>
      </div>
    </div>
  );
};

export default Preview;
