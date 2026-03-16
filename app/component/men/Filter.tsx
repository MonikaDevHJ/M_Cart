"use client";

import { useState } from "react";

const Filter = () => {
  const [openOccasion, setOpenOccasion] = useState(true);

  const categories = ["Shirt", "Pant", "Upper", "Skrit"];
  const occasion = ["casually", "Party", "Formal", "Beach Wear"];
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
          {categories.map((cat, index) => (
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
      <div className="border-b py-4">
        <button className="flex w-full items-center justify-between">
          {" "}
          <p className="font-semibold text-gray-800 text-sm tracking-wide">
            OCCASION
          </p>
          <span
            className={`transition-transform duration-300 text-gray-500  ${openOccasion ? "rotate-180" : ""}  `}
          >
            ▼
          </span>
        </button>

        {occasion.map((item, index) => (
          <label
            key={index}
            className="flex items-center gap-3 cursor-pointer hover:text-fuchsia-600 transition"
          >
            <input type="checkbox" className="accent-fuchsia-600" />
            {item}
          </label>
        ))}
      </div>
    </div>
  );
};

export default Filter;
