const Filter = () => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 sticky top-5">

      {/* Title */}
      <div className="border-b pb-3 mb-4">
        <p className="text-2xl font-bold text-fuchsia-700">Filters</p>
      </div>

      {/* Category */}
      <div className="mb-6">
        <p className="font-semibold mb-2 text-gray-700">Category</p>

        <select className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-fuchsia-500">
          <option>All</option>
          <option>Dresses</option>
          <option>Tops</option>
          <option>Jeans</option>
          <option>Skirts</option>
        </select>
      </div>

      {/* Price */}
      <div className="mb-6">
        <p className="font-semibold mb-2 text-gray-700">Price</p>

        <select className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-fuchsia-500">
          <option>Under ₹500</option>
          <option>₹500 - ₹1000</option>
          <option>₹1000 - ₹2000</option>
          <option>Above ₹2000</option>
        </select>
      </div>

      {/* Brand */}
      <div className="mb-6">
        <p className="font-semibold mb-2 text-gray-700">Brand</p>

        <div className="flex flex-col gap-2 text-gray-600">
          <label className="flex gap-2">
            <input type="checkbox" /> Zara
          </label>

          <label className="flex gap-2">
            <input type="checkbox" /> H&M
          </label>

          <label className="flex gap-2">
            <input type="checkbox" /> Biba
          </label>
        </div>
      </div>

      {/* Rating */}
      <div className="mb-6">
        <p className="font-semibold mb-2 text-gray-700">Rating</p>

        <div className="flex flex-col gap-2 text-gray-600">
          <label className="flex gap-2">
            <input type="radio" name="rating" /> 4★ & above
          </label>

          <label className="flex gap-2">
            <input type="radio" name="rating" /> 3★ & above
          </label>

          <label className="flex gap-2">
            <input type="radio" name="rating" /> 2★ & above
          </label>
        </div>
      </div>

      {/* Button */}
      <button className="w-full bg-fuchsia-600 text-white py-2 rounded-lg hover:bg-fuchsia-700 transition">
        Apply Filter
      </button>

    </div>
  )
}

export default Filter