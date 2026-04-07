"use client";

const Filter = () => {
  const Categories = [
    "Rice",
    "OilItems",
    "Chockalates",
    "BakeryItems",
    "JuiceItems"
  ];
  return (
    <div className="w-full bg-white border border-gray-200 rounded-2xl shadow-sm p-4 sm:p-5 lg:p-6 sticky top-6">
      {/* Title */}
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
          Cateogory
        </p>

        <div className="">
          {Categories.map((cat, index) => (
            <label
              key={index}
              className="flex items-center gap-3 cursor-pointer hover:text-fuchsia-600 transition"
            >
              <input type="checkbox" className="accent-fuchsia-600" />
              {cat}
            </label>
          ))}
        </div>
      </div>


      {/* Occasion */}
      
    </div>
  );
};
export default Filter;
