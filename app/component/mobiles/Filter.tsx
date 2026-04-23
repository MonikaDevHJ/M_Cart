const Filter = () => {
  const categories = ["Android", "IPhone", "LAndline", "BasicSet"];
  const brands = ["Vivo", "Redmi", "OnePlus", "Apple", "Motorola", "Nothing"];

  return (
    <div className="w-full bg-white border border-gray-200 rounded-2xl shadow-sm p-4 sm:p-5 lg:p-6 sticky top-6">
      {/* Tittle */}
      <div className="flex items-center justify-between border-b pb-4 mb-4">
        <p className="text-lg sm:text-xl font-semibold text-gray-800">
          Filters
        </p>

        <button className="text-sm text-fuchsia-600 hover:underline">
          Clear
        </button>
      </div>

      {/* Category */}
      <div className="border-b py-4">
        <p className="font-semibold text-gray-800 text-sm tracking-wide">
          CATEGORY
        </p>

        <div className="">
          {categories.map(
            (cat, index) => (
              <label
                className="flex items-center gap-3 cursor-pointer hover:text-fuchsia-600 transition"
                key={index}
              >
                <input type="CheckBox" className="accent-fuchsia-600" />
                {cat}
              </label>
            ),
            []
          )}
        </div>
      </div>

      {/* Select You Brand */}
      <div className="border-b py-4">
        <p className="font-semibold text-gray-800 text-sm tracking-wide">
          SELECT BRAND
        </p>

        <div className="flex flex-col gap-2 mt-3 text-gray-600 text-sm">
          {brands.map(
            (brand, index) => (
              <label
                key={index}
                className="flex items-center gap-3 cursor-pointer hover:text-fuchsia-600 transition"
              >
                <input type="CheckBox" className="accent-fuchsia-600" />
                {brand}
              </label>
            ),
            []
          )}
        </div>
      </div>
    </div>
  );
};

export default Filter;
