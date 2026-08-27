"use client";

import Image from "next/image";
import Link from "next/link";
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
      image: "/images/iphone.jpg",
    },
    {
      id: 2,
      name: "Sony WH-1000XM5",
      description: "Noise Cancelling Headphones",
      price: "₹24,990",
      status: "In Transit",
      date: "Apr 18, 2025",
      image: "/images/headphone.jpg",
    },
    {
      id: 3,
      name: "Nike Air Max 270",
      description: "Men's Running Shoes",
      price: "₹8,499",
      status: "Delivered",
      date: "Apr 15, 2025",
      image: "/images/shoe.jpg",
    },
    {
      id: 4,
      name: "Fire-Boltt Ninja Pro",
      description: "Smart Watch",
      price: "₹2,199",
      status: "Cancelled",
      date: "Apr 10, 2025",
      image: "/images/watch.jpg",
    },
    {
      id: 5,
      name: "Fire-Boltt Ninja Pro",
      description: "Smart Watch",
      price: "₹2,199",
      status: "Cancelled",
      date: "Apr 10, 2025",
      image: "/images/watch.jpg",
    },
    {
      id: 6,
      name: "Fire-Boltt Ninja Pro",
      description: "Smart Watch",
      price: "₹2,199",
      status: "Cancelled",
      date: "Apr 10, 2025",
      image: "/images/watch.jpg",
    },
  ];

  const itemsPerPage = 4;

  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(orders.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;

  const currentOrders = orders.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const getStatusStyle = (status: string) => {
    switch (status) {
      case "Delivered":
        return "bg-emerald-50 text-emerald-600 border border-emerald-100";

      case "In Transit":
        return "bg-orange-50 text-orange-600 border border-orange-100";

      case "Cancelled":
        return "bg-red-50 text-red-600 border border-red-100";

      default:
        return "bg-gray-50 text-gray-600 border border-gray-100";
    }
  };

  return (
    <div className="w-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">

      {/* ================= HEADER ================= */}
      <div className="flex items-center justify-between border-b border-gray-100 px-4 py-4 sm:px-5 sm:py-5 lg:px-6">

        <div>
          <h2 className="text-lg font-bold text-gray-900 sm:text-xl">
            Recent Orders
          </h2>

          <p className="mt-1 text-xs text-gray-500 sm:text-sm">
            Track your recent purchases
          </p>
        </div>

        <Link
          href="/myorder"
          className="
            rounded-lg
            px-2.5 py-1.5
            text-xs
            font-semibold
            text-purple-600
            transition
            hover:bg-purple-50
            hover:text-purple-700
            sm:px-3 sm:py-2 sm:text-sm
          "
        >
          View All
        </Link>
      </div>

      {/* ================= DESKTOP TABLE HEADER ================= */}
      <div
        className="
          hidden
          md:grid
          md:grid-cols-12
          md:items-center
          md:gap-3
          lg:gap-4
          border-b
          border-gray-100
          bg-gray-50/70
          px-4
          py-3
          text-[10px]
          font-semibold
          uppercase
          tracking-wider
          text-gray-400
          lg:px-6
          lg:text-xs
        "
      >
        <div className="col-span-5">
          Product
        </div>

        <div className="col-span-2">
          Price
        </div>

        <div className="col-span-2">
          Status
        </div>

        <div className="col-span-2">
          Date
        </div>

        <div className="col-span-1 text-center">
          View
        </div>
      </div>

      {/* ================= ORDERS ================= */}
      <div className="divide-y divide-gray-100">

        {currentOrders.map((order) => (
          <div
            key={order.id}
            className="
              px-4
              py-4
              transition-colors
              hover:bg-gray-50/70
              sm:px-5
              sm:py-5
              lg:px-6
            "
          >

            {/* ================= DESKTOP ================= */}
            <div
              className="
                hidden
                md:grid
                md:grid-cols-12
                md:items-center
                md:gap-3
                lg:gap-4
              "
            >

              {/* PRODUCT */}
              <div className="col-span-5 flex min-w-0 items-center gap-3 lg:gap-4">

                <div
                  className="
                    flex
                    h-14
                    w-14
                    shrink-0
                    items-center
                    justify-center
                    overflow-hidden
                    rounded-xl
                    border
                    border-gray-100
                    bg-gray-50
                    lg:h-16
                    lg:w-16
                  "
                >
                  <Image
                    src={order.image}
                    alt={order.name}
                    width={64}
                    height={64}
                    className="h-full w-full object-contain p-1"
                  />
                </div>

                <div className="min-w-0">
                  <h3 className="truncate text-sm font-semibold text-gray-800 lg:text-[15px]">
                    {order.name}
                  </h3>

                  <p className="mt-1 truncate text-xs text-gray-500 lg:text-sm">
                    {order.description}
                  </p>
                </div>
              </div>

              {/* PRICE */}
              <div className="col-span-2">
                <p className="text-sm font-semibold text-gray-800 lg:text-[15px]">
                  {order.price}
                </p>
              </div>

              {/* STATUS */}
              <div className="col-span-2">
                <span
                  className={`
                    inline-flex
                    items-center
                    rounded-full
                    px-2.5
                    py-1
                    text-[10px]
                    font-semibold
                    lg:px-3
                    lg:text-xs
                    ${getStatusStyle(order.status)}
                  `}
                >
                  {order.status}
                </span>
              </div>

              {/* DATE */}
              <div className="col-span-2">
                <p className="text-xs text-gray-500 lg:text-sm">
                  {order.date}
                </p>
              </div>

              {/* VIEW */}
              <div className="col-span-1 flex justify-center">

                <button
                  type="button"
                  title="View Order"
                  className="
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-full
                    text-gray-400
                    transition
                    hover:bg-purple-50
                    hover:text-purple-600
                    lg:h-9
                    lg:w-9
                  "
                >
                  <span className="text-lg">
                    →
                  </span>
                </button>

              </div>
            </div>

            {/* ================= MOBILE ================= */}
            <div className="md:hidden">

              {/* PRODUCT */}
              <div className="flex items-start gap-3">

                <div
                  className="
                    flex
                    h-14
                    w-14
                    shrink-0
                    items-center
                    justify-center
                    overflow-hidden
                    rounded-xl
                    border
                    border-gray-100
                    bg-gray-50
                    sm:h-16
                    sm:w-16
                  "
                >
                  <Image
                    src={order.image}
                    alt={order.name}
                    width={64}
                    height={64}
                    className="h-full w-full object-contain p-1"
                  />
                </div>

                <div className="min-w-0 flex-1">

                  <div className="flex items-start justify-between gap-2">

                    <div className="min-w-0">
                      <h3 className="truncate text-sm font-semibold text-gray-800 sm:text-base">
                        {order.name}
                      </h3>

                      <p className="mt-1 truncate text-xs text-gray-500 sm:text-sm">
                        {order.description}
                      </p>
                    </div>

                    {/* VIEW BUTTON */}
                    <button
                      type="button"
                      title="View Order"
                      className="
                        flex
                        h-8
                        w-8
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        text-gray-400
                        transition
                        hover:bg-purple-50
                        hover:text-purple-600
                      "
                    >
                      →
                    </button>

                  </div>
                </div>
              </div>

              {/* MOBILE INFO */}
              <div
                className="
                  mt-4
                  grid
                  grid-cols-3
                  gap-2
                  rounded-xl
                  bg-gray-50
                  p-3
                  sm:gap-4
                  sm:p-4
                "
              >

                {/* PRICE */}
                <div>
                  <p className="text-[10px] font-medium uppercase tracking-wide text-gray-400 sm:text-[11px]">
                    Price
                  </p>

                  <p className="mt-1 text-xs font-semibold text-gray-800 sm:text-sm">
                    {order.price}
                  </p>
                </div>

                {/* STATUS */}
                <div>
                  <p className="text-[10px] font-medium uppercase tracking-wide text-gray-400 sm:text-[11px]">
                    Status
                  </p>

                  <span
                    className={`
                      mt-1
                      inline-flex
                      rounded-full
                      px-2
                      py-1
                      text-[9px]
                      font-semibold
                      sm:px-2.5
                      sm:text-[10px]
                      ${getStatusStyle(order.status)}
                    `}
                  >
                    {order.status}
                  </span>
                </div>

                {/* DATE */}
                <div>
                  <p className="text-[10px] font-medium uppercase tracking-wide text-gray-400 sm:text-[11px]">
                    Date
                  </p>

                  <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                    {order.date}
                  </p>
                </div>

              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ================= PAGINATION ================= */}
      <div
        className="
          flex
          flex-col
          items-center
          justify-between
          gap-4
          border-t
          border-gray-100
          px-4
          py-4
          sm:flex-row
          sm:px-5
          sm:py-5
          lg:px-6
        "
      >

        {/* PREVIOUS */}
        <button
          type="button"
          onClick={() =>
            setCurrentPage((prev) => prev - 1)
          }
          disabled={currentPage === 1}
          className="
            w-full
            rounded-lg
            border
            border-gray-200
            bg-white
            px-4
            py-2
            text-xs
            font-medium
            text-gray-600
            transition
            hover:border-purple-200
            hover:bg-purple-50
            hover:text-purple-600
            disabled:cursor-not-allowed
            disabled:opacity-40
            sm:w-auto
            sm:text-sm
          "
        >
          ← Previous
        </button>

        {/* PAGE NUMBERS */}
        <div className="flex items-center gap-1.5 sm:gap-2">

          {Array.from(
            { length: totalPages },
            (_, index) => index + 1
          ).map((page) => (
            <button
              key={page}
              type="button"
              onClick={() => setCurrentPage(page)}
              className={`
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-lg
                text-xs
                font-semibold
                transition
                sm:h-9
                sm:w-9
                sm:text-sm
                lg:h-10
                lg:w-10
                ${
                  currentPage === page
                    ? "bg-purple-600 text-white shadow-sm"
                    : "bg-gray-50 text-gray-600 hover:bg-purple-50 hover:text-purple-600"
                }
              `}
            >
              {page}
            </button>
          ))}

        </div>

        {/* NEXT */}
        <button
          type="button"
          onClick={() =>
            setCurrentPage((prev) => prev + 1)
          }
          disabled={currentPage === totalPages}
          className="
            w-full
            rounded-lg
            border
            border-gray-200
            bg-white
            px-4
            py-2
            text-xs
            font-medium
            text-gray-600
            transition
            hover:border-purple-200
            hover:bg-purple-50
            hover:text-purple-600
            disabled:cursor-not-allowed
            disabled:opacity-40
            sm:w-auto
            sm:text-sm
          "
        >
          Next →
        </button>

      </div>
    </div>
  );
};

export default RecentOrder;
