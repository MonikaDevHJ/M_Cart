"use client";

import Image from "next/image";
import { FaHeart } from "react-icons/fa";

const Wishlist = () => {
  return (
    <div className="h-full w-full rounded-2xl p-8 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {/* Wishlist Item */}
        <div className="bg-gray-400 rounded-2xl shadow-lg hover:shadow-xl transition p-4">

          {/* Image + Heart */}
          <div className="relative border border-r-fuchsia-600">

            {/* Image */}
            <div className="w-full h-50 flex items-center justify-center rounded-xl overflow-hidden">
              <Image
                src= {""}
                alt="Kurtha"
                width={300}
                height={200}
                className="object-cover h-full w-full rounded-xl"
              />
            </div>

            {/* Heart Icon */}
            <button
              className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md hover:scale-110 transition"
            >
              <FaHeart className="text-red-500" />
            </button>
          </div>

          {/* Details */}
          <div className="mt-6">

            {/* Product Name + Price */}
            <div className="flex justify-between">

              {/* Product Name */}
              <div>
                <p className="font-bold text-xl">
                  Kurtha
                </p>
              </div>

              {/* Product Price */}
              <div className="text-right">
                <p className="font-bold text-lg text-green-600">
                  ₹ 299
                </p>

                {/* Original Price */}
                <p className="line-through text-gray-500 text-sm">
                  ₹ 499
                </p>

                {/* Offer */}
                <p className="text-red-500 text-sm font-semibold">
                  40% OFF
                </p>
              </div>

            </div>

            {/* Size + Rating */}
            <div className="mt-1 flex items-center justify-between">

              {/* Product Size */}
              <p className="text-gray-900 text-lg font-medium">
                Size: M
              </p>

              {/* Ratings */}
              <div className="flex items-center gap-1">
                <span className="text-yellow-400 text-lg">
                  ★
                </span>

                <span className="text-sm font-semibold text-gray-700">
                  4.5
                </span>

                <span className="text-xs text-gray-500">
                  (120 Reviews)
                </span>
              </div>

            </div>

            {/* Add To Cart Button */}
            <div className="mt-4">
              <button className="w-full p-2 rounded-lg bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-semibold transition">
                Add To Cart
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Wishlist;