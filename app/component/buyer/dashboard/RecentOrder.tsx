"use client";

import Image from "next/image";
import { useState } from "react";

const RecentOrder = () => {
  const orders = [
    {
      id: 1,
      name: "iPhone 15 Pro Max",
      description: "256GB, Natural Titanium",
      price: "₹1,39,999",
      status: "Delivered",
      date: "Apr 20, 2025",
      image: "/images/iphone.jpg"
    },
    {
      id: 2,
      name: "Sony WH-1000XM5",
      description: "Noise Cancelling Headphones",
      price: "₹24,990",
      status: "In Transit",
      date: "Apr 18, 2025",
      image: "/images/headphone.jpg"
    },
    {
      id: 3,
      name: "Nike Air Max 270",
      description: "Men's Running Shoes",
      price: "₹8,499",
      status: "Delivered",
      date: "Apr 15, 2025",
      image: "/images/shoe.jpg"
    },
    {
      id: 4,
      name: "Fire-Boltt Ninja Pro",
      description: "Smart Watch",
      price: "₹2,199",
      status: "Cancelled",
      date: "Apr 10, 2025",
      image: "/images/watch.jpg"
    },
    {
      id: 5,
      name: "Fire-Boltt Ninja Pro",
      description: "Smart Watch",
      price: "₹2,199",
      status: "Cancelled",
      date: "Apr 10, 2025",
      image: "/images/watch.jpg"
    },
    {
      id: 4,
      name: "Fire-Boltt Ninja Pro",
      description: "Smart Watch",
      price: "₹2,199",
      status: "Cancelled",
      date: "Apr 10, 2025",
      image: "/images/watch.jpg"
    }
  ];

  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(orders.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;

  const currentOrders = orders.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-4 sm:p-5">
      {/* HEADER */}
      <div className="flex items-center justify-between mb-5">
        <div>
          <h2 className="text-lg sm:text-xl font-bold text-gray-800">
            Recent Orders
          </h2>

          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            Track your recent purchases
          </p>
        </div>

        <button className="text-sm font-semibold text-purple-600 hover:text-purple-700 hover:underline transition">
          View All
        </button>
      </div>

      {/* TABLE HEADER */}
      <div className="hidden md:grid grid-cols-12 gap-4 px-4 py-3 bg-gray-50 rounded-lg text-xs font-semibold text-gray-500 uppercase tracking-wide">
        <div className="col-span-5">Product</div>

        <div className="col-span-2">Price</div>

        <div className="col-span-2">Status</div>

        <div className="col-span-2">Date</div>

        <div className="col-span-1 text-center">View</div>
      </div>

      {/* ORDERS */}
      <div className="mt-2 divide-y divide-gray-100">
        {currentOrders.map((order) => (
          <div
            key={order.id}
            className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-4 items-center px-2 md:px-4 py-4 hover:bg-gray-50 rounded-lg transition"
          >
            {/* PRODUCT */}
            <div className="md:col-span-5 flex items-center gap-3 min-w-0">
              {/* IMAGE */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gray-100 rounded-xl flex items-center justify-center overflow-hidden shrink-0">
                <Image
                  src={order.image}
                  alt={order.name}
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>

              {/* PRODUCT DETAILS */}
              <div className="min-w-0">
                <h3 className="font-semibold text-gray-800 truncate">
                  {order.name}
                </h3>

                <p className="text-xs sm:text-sm text-gray-500 truncate mt-1">
                  {order.description}
                </p>
              </div>
            </div>

            {/* PRICE */}
            <div className="md:col-span-2">
              <p className="text-xs text-gray-400 md:hidden mb-1">Price</p>

              <p className="font-semibold text-gray-800">{order.price}</p>
            </div>

            {/* STATUS */}
            <div className="md:col-span-2">
              <p className="text-xs text-gray-400 md:hidden mb-1">Status</p>

              <span
                className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold ${
                  order.status === "Delivered"
                    ? "bg-green-100 text-green-600"
                    : order.status === "In Transit"
                      ? "bg-orange-100 text-orange-600"
                      : "bg-red-100 text-red-600"
                }`}
              >
                {order.status}
              </span>
            </div>

            {/* DATE */}
            <div className="md:col-span-2">
              <p className="text-xs text-gray-400 md:hidden mb-1">Date</p>

              <p className="text-sm text-gray-500">{order.date}</p>
            </div>

            {/* VIEW */}
            <div className="md:col-span-1 md:text-center">
              <button
                className="text-gray-400 hover:text-purple-600 text-xl transition"
                title="View Order"
              >
                →
              </button>
            </div>
          </div>
        ))}

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 border-t border-gray-200 pt-6">
  {/* Previous Button */}
  <button
    onClick={() => setCurrentPage((prev) => prev - 1)}
    disabled={currentPage === 1}
    className="flex items-center gap-2 px-5 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 hover:bg-purple-50 hover:border-purple-500 hover:text-purple-600 transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:border-gray-300 disabled:hover:text-gray-700"
  >
    ← Previous
  </button>

  {/* Page Numbers */}
  <div className="flex items-center gap-2">
    {Array.from({ length: totalPages }, (_, index) => (
      <button
        key={index}
        onClick={() => setCurrentPage(index + 1)}
        className={`w-10 h-10 rounded-lg font-medium transition-all duration-300 ${
          currentPage === index + 1
            ? "bg-purple-600 text-white shadow-lg scale-105"
            : "bg-gray-100 text-gray-700 hover:bg-purple-100 hover:text-purple-600"
        }`}
      >
        {index + 1}
      </button>
    ))}
  </div>

  {/* Next Button */}
  <button
    onClick={() => setCurrentPage((prev) => prev + 1)}
    disabled={currentPage === totalPages}
    className="flex items-center gap-2 px-5 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 hover:bg-purple-50 hover:border-purple-500 hover:text-purple-600 transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:border-gray-300 disabled:hover:text-gray-700"
  >
    Next →
  </button>
</div>
      </div>
    </div>
  );
};

export default RecentOrder;
