"use client";

import Image from "next/image";
import mcartlogo4 from "../../../public/assets/mcartlogo4.png";

import { Trash2, Heart, ShoppingBag, Plus, Minus, Star } from "lucide-react";
import { useState } from "react";

const Item = () => {
  const [quantity, setQuantity] = useState(1);

  // Increase
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  // Decrese
  const decreaseQuantity = () => {
    // It will Prevent Negitive Value
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="min-h-screen p-0.5 md:p-8">
      {/* MAIN CONTAINER */}
      <div className="max-w-7xl mx-auto">
        {/* ADDRESS SECTION */}
        <div className="bg-white shadow-md border border-gray-200 rounded-3xl p-5 md:p-7">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-5">
            {/* LEFT */}
            <div>
              <p className="text-sm text-gray-500 mb-1">Delivery Address</p>

              <h2 className="text-xl font-bold text-gray-800">Monika H J</h2>

              <p className="text-gray-600 mt-2">Hosahalli, Jajur Post,</p>

              <p className="text-gray-600">
                Arsikere Taluk, Karnataka - 573103
              </p>

              <p className="text-gray-600 mt-2">Phone : +91 9535511306</p>
            </div>

            {/* RIGHT */}
            <div>
              <button className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white px-6 py-3 rounded-2xl font-semibold shadow-md transition duration-300">
                Edit Address
              </button>
            </div>
          </div>
        </div>

        {/* CART ITEM */}
        <div className="bg-white shadow-lg border border-gray-200 rounded-3xl p-8 md:p-8 lg:p-8 mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-15">
            {/* LEFT SIDE */}
            <div className="lg:col-span-1">
              {/* IMAGE */}
              <div className="bg-gray-100 rounded-3xl p-5 flex justify-center items-center">
                <Image
                  src={mcartlogo4}
                  alt="Product Image"
                  height={290}
                  width={290}
                  className="object-contain hover:scale-105 transition duration-300"
                />
              </div>

              {/* QUANTITY */}
              <div className="mt-8">
                <p className="font-semibold text-gray-700 mb-3">Quantity</p>

                <div className="flex items-center gap-3">
                  <button
                    onClick={decreaseQuantity}
                    className="bg-gray-200 hover:bg-gray-300 p-3 rounded-xl transition"
                  >
                    <Minus size={18} />
                  </button>

                  <div className="border border-gray-300 px-6 py-2 rounded-xl font-semibold text-lg">
                    {quantity}
                  </div>

                  <button
                    onClick={increaseQuantity}
                    className="bg-gray-200 hover:bg-gray-300 p-3 rounded-xl transition"
                  >
                    <Plus size={18} />
                  </button>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="lg:col-span-3 flex flex-col justify-between">
              {/* PRODUCT DETAILS */}
              <div className="ml-5">
                {/* TITLE */}
                <h1 className="text-xl lg:text-1xl md:text-3xl font-bold text-gray-800 leading-snug">
                  Apple iPhone 15 Pro Max (256GB)
                </h1>

                {/* SUBTITLE */}
                <p className="text-gray-500 ">
                  Titanium Finish | A17 Pro Chip | Dynamic Island
                </p>

                {/* RATINGS */}
                <div className="flex items-center gap-3 mt-2 flex-wrap">
                  <div className="flex items-center bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium gap-1">
                    4.2
                    <Star size={10} fill="white" />
                  </div>

                  <p className="text-gray-500 text-sm">
                    12,540 Ratings & 1,220 Reviews
                  </p>
                </div>

                {/* PRICE */}
                <div className="flex flex-wrap items-center gap-4 mt-3">
                  <h2 className="text-2xl lg:text-xl md:text-4xl font-bold text-gray-900">
                    ₹1,24,999
                  </h2>

                  <p className="line-through text-gray-400 text-lg">
                    ₹1,39,999
                  </p>

                  <p className="text-green-600 font-bold text-lg">10% OFF</p>
                </div>

                {/* DELIVERY */}
                <div className="mt-3">
                  <p className="text-gray-700 text-lg">
                    Delivery by{" "}
                    <span className="font-bold text-green-600">Monday</span>
                  </p>

                  <p className="text-sm text-gray-500 mt-1">
                    Free Delivery Available
                  </p>
                </div>
              </div>

              {/* ACTION BUTTONS */}
              <div className="flex flex-wrap gap-4 mt-5">
                {/* SAVE */}
                <button className="flex items-center gap-2 bg-gray-300 hover:bg-gray-200 px-5 py-1 rounded-2xl font-semibold transition">
                  <Heart size={15} />
                  Save For Later
                </button>

                {/* REMOVE */}
                <button className="flex items-center gap-2 bg-red-100 text-red-600 hover:bg-red-200 px-5 py-2 rounded-2xl font-semibold transition">
                  <Trash2 size={15} />
                  Remove
                </button>

                {/* BUY NOW */}
                <button className="flex items-center gap-2 bg-fuchsia-600 hover:bg-fuchsia-700 text-white px-6 py-3 rounded-2xl font-semibold shadow-lg transition">
                  <ShoppingBag size={15} />
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
