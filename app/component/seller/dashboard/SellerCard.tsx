"use client";

import {
  FaBox,
  FaShoppingCart,
  FaRupeeSign,
  FaExclamationCircle
} from "react-icons/fa";

import { useState, useEffect } from "react";

const SellerCard = () => {
  const [stats, setStats] = useState({
    totalProducts: 0,
    totalOrders: 0,
    totaleRevenue: 0,
    pendingOrders: 0
  });

  // Fetch Data
  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch("/api/products");
        const data = await res.json();

        setStats({
          totalProducts: data.length,
          totalOrders: 0,
          totaleRevenue: 0,
          pendingOrders: 0
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetchStats();
  }, []);

  const cards = [
    {
      title: "Total Products",
      value: stats.totalProducts,
      icon: <FaBox />,
      color: "bg-blue-500"
    },
    {
      title: "Total Orders",
      value: stats.totalOrders,
      icon: <FaShoppingCart />,
      color: "bg-green-500"
    },
    {
      title: "Total Revenue",
      value: stats.totaleRevenue,
      icon: <FaRupeeSign />,
      color: "bg-purple-500"
    },
    {
      title: "Pending Orders",
      value: stats.pendingOrders,
      icon: <FaExclamationCircle />,
      color: "bg-orange-500"
    }
  ];

  return (
    <div className="mt-1 lg:mt-6 sm:mt-10 px-1 sm:px-0">
      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`
              ${card.color} text-white
              rounded-2xl p-4 sm:p-5
              shadow-md hover:shadow-xl
              transition duration-300
              cursor-pointer
            `}
          >
            {/* Top Section */}
            <div className="flex items-center gap-5 ">
              <div className="text-xl sm:text-2xl">{card.icon}</div>

              <p className="text-sm sm:text-base font-medium text-right">
                {card.title}
              </p>
            </div>

            {/* Value */}
            <p className="mt-4 text-2xl sm:text-3xl font-bold">{card.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SellerCard;
