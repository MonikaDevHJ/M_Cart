const AddAproduct = () => {
  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="">
        <p className="font-bold sm:text-2xl mb-4 text-xl">Add Product</p>
      </div>

      {/* Form Container */}
      <div className="bg-white  rounded-2xl shadow  p-5  sm:p-6 lg:p-8 ">
        {/* Product Name */}
        <div className="mb-4">
          <label className="font-semibold block mb-1">Product Name</label>

          <input
            type="text"
            placeholder="Enter  Product name"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-fuchsia-300"
          />
        </div>

        {/* Description */}
        <div className="mb-4">
          <p className="font-semibold block mb-1">Descritpion</p>
          <textarea
            placeholder="Enter Product Description"
            className="border w-full rounded-lg px-3 py-2 h-28 focus:outline-none focus:ring-2 focus:ring-fuchsia-300"
          ></textarea>
        </div>

        {/* Price And Categroy */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {/* Price */}
          <div className="">
            <p className="font-semibold block mb-1"> Price (₹)</p>
            <input
              type="number"
              placeholder="₹ 0"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          {/* Categroy */}

          <div className="">
            <p className="font-semibold block mb-1">Category</p>
            <select
              name=""
              id=""
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Select Category</option>
              <option value="">Electronics</option>
              <option value="">Clothings</option>
              <option value="">Food</option>
              <option value="">Make Up Item</option>
            </select>
          </div>
        </div>

        {/* Stack Quantity and Product Image */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="">
            <label className="font-semibold block mb-1">Stock Quantity</label>

            <input
              type="number"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter Stock"
            />
          </div>

          <div className="">
            <label className="font-semibold block mb-1">Product Image</label>
            <div className="border-2 border-dashed rounded-xl p-6 text-center">
              <p className="text-gray-500 mb-2">
                Uplode Image (PNG, JPG, max, 5Mb)
              </p>

              <input type="file" className="text-sm" />
            </div>
          </div>
        </div>
        {/* Button */}
        <div className="flex justify-center md:justify-end">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
            Add Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddAproduct;
