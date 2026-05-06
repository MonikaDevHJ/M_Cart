"use client";

const Filter = () => {

const Category = ["Ideal Items","Childresn Items", "Books", "Pens", ]


  return (
    <div className="w-full bg-white border border-gray-200 rounded-2xl shadow-sm p-4 sm:p-5 lg:p-6 sticky top-6">
      <div className="flex items-center justify-between border-b pb-4 mb-4">
        <p className="text-lg sm:text-xl font-semibold text-gray-800">Filter</p>

        <button className="text-sm text-fuchsia-600 hover:underline">
          Clear
        </button>
      </div>

      {/* Category */}
      <div className="bodrer-b  py-4">
        <p className="font-semibold text-gray-800 text-sm tracking-wide">CATEGORY</p>

        <div>
            {

            }
        </div>

      </div>

    </div>
  );
};

export default Filter;
