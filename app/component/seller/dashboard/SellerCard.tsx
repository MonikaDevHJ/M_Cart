"use client";
import Link from "next/link";
import {
  FaEye,
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
      color: "bg-blue-500",
      link: "seller/products"
    },
    {
      title: "Total Orders",
      value: stats.totalOrders,
      icon: <FaShoppingCart />,
      color: "bg-green-500",
      link: "seller/orders"
    },
    {
      title: "Total Revenue",
      value: stats.totaleRevenue,
      icon: <FaRupeeSign />,
      color: "bg-purple-500",
      link: "seller/earnings"
    },
    {
      title: "Pending Orders",
      value: stats.pendingOrders,
      icon: <FaExclamationCircle />,
      color: "bg-orange-500",
      link: "seller/orders"
    }
  ];

  return (
    <div className="mt-1 lg:mt-6 sm:mt-10 px-1 sm:px-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map((card, index) => {
          const CardUI = (
            <div
              className={`
                ${card.color} text-white
                rounded-2xl p-4 sm:p-5
                shadow-md hover:shadow-xl
                transition duration-300 
                hover:scale-[1.03]
                cursor-pointer
                relative group
              `}
            >
              {/* View Badge */}
              {card.link && (
                <div
                  className="
                    absolute top-3 right-3 
                    flex items-center gap-1
                    bg-white/20 backdrop-blur-sm 
                    px-2 py-1 rounded-full 
                    text-xs font-medium
                     group-hover:opacity-100
                    transition
                  "
                >
                  <FaEye className="text-xs" />
                  <span>View</span>
                </div>
              )}

              {/* Top Section */}
              <div className="flex items-center gap-5">
                <div className="text-xl sm:text-2xl">{card.icon}</div>
                <p className="text-sm sm:text-base font-medium">{card.title}</p>
              </div>

              {/* Value */}
              <p className="mt-4 text-2xl sm:text-3xl font-bold">
                {card.value}
              </p>
            </div>
          );

          return card.link ? (
            <Link key={index} href={`/${card.link}`}>
              {CardUI}
            </Link>
          ) : (
            <div key={index}>{CardUI}</div>
          );
        })}
      </div>
    </div>
  );
};

export default SellerCard;
