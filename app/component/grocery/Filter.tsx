"use client";

import { useState } from "react";

const Filter = () => {
  const [openOccasion, setOpenOccasion] = useState(true);

  const categories = ["Cooking Items", "Chockalates", "Snaks & Beverage", "Washing Items", "Tablets", "Pet Supplies"];
  const occasion = ["casually", "Party", "Formal", "Beach Wear"];
  const Brand = ["MTR", "Achhie", "Iyenger", "FreeDom", "SunFlower", ];
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
        <button
          onClick={() => setOpenOccasion(!openOccasion)}
          className="flex w-full items-center justify-between"
        >
          <p className="font-semibold text-gray-800 text-sm tracking-wide">
            OCCASION
          </p>
          <span
            className={`transition-transform duration-300 text-gray-500  ${openOccasion ? "rotate-180" : ""}`}
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

      {/* Price */}
      <div className="border-b py-4">
        <p className="font-semibold text-gray-800 text-sm tracking-wide">
          PRICE
        </p>

        <label className="flex items-center gap-3 cursor-pointer hover:text-fuchsia-600">
          <input type="radio" className="accent-fuchsia-600" />
          Under ₹100
        </label>

        <label className="flex items-center gap-3 cursor-pointer hover:text-fuchsia-600">
          <input type="radio" className="accent-fuchsia-600" />
          ₹200 – ₹400
        </label>

        <label className="flex items-center gap-3 cursor-pointer hover:text-fuchsia-600">
          <input type="radio" className="accent-fuchsia-600" />
          ₹500 – ₹600
        </label>

        <label className="flex items-center gap-3 cursor-pointer hover:text-fuchsia-600">
          <input type="radio" className="accent-fuchsia-600" />
          ₹800 – ₹1000
        </label>

        <label className="flex items-center gap-3 cursor-pointer hover:text-fuchsia-600">
          <input type="radio" className="accent-fuchsia-600" />
          ₹1500 – ₹1800
        </label>
      </div>

      {/* BRAND */}
      <div className="border-b py-4">
        <p className="font-semibold text-gray-800 text-sm tracking-wide">
          SELECT YOUR BRAND
        </p>

        <div className="flex flex-col gap-2 mt-3 text-gray-600 text-sm">
          {Brand.map((brand, index) => (
            <label
              key={index}
              className="flex items-center gap-3 cursor-pointer hover:text-fuchsia-600 transition"
            >
              <input type="checkbox" className="accent-fuchsia-600" />
              {brand}
            </label>
          ))}
        </div>
      </div>

      {/* RATING */}
      <div className="py-4">
        <p className="font-semibold text-gray-800 text-sm tracking-wide">
          RATING
        </p>

        <div className="flex flex-col gap-2 mt-3 text-gray-600 text-sm">
          <label className="flex items-center gap-3 cursor-pointer hover:text-fuchsia-600">
            <input type="radio" name="rating" className="accent-fuchsia-600" />
            4★ & above
          </label>

          <label className="flex items-center gap-3 cursor-pointer hover:text-fuchsia-600">
            <input type="radio" name="rating" className="accent-fuchsia-600" />
            3★ & above
          </label>

          <label className="flex items-center gap-3 cursor-pointer hover:text-fuchsia-600">
            <input type="radio" name="rating" className="accent-fuchsia-600" />
            2★ & above
          </label>
        </div>
      </div>

      {/* APPLY BUTTON */}
      <button className="w-full mt-5 bg-fuchsia-600 hover:bg-fuchsia-700 text-white py-2.5 rounded-lg text-sm sm:text-base font-medium transition">
        Apply Filters
      </button>
    </div>
  );
};

export default Filter;
