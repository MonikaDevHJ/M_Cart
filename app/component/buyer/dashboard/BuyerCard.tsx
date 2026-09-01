"use client";
import Link from "next/link";


import {
  ShoppingBag,
  PackageCheck,
  Truck,
  Heart,
} from "lucide-react";

const BuyerCard = () => {
  const cards = [
    {
      title: "Total Orders",
      count: 12,
      linkText: "View all orders",
      icon: ShoppingBag,
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
      linkColor: "text-purple-600",
      Link : "/myorder"
    },
    {
      title: "Delivered Orders",
      count: 8,
      linkText: "View details",
      icon: PackageCheck,
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
      linkColor: "text-green-600",
      Link : "/delivered"
    },
    {
      title: "In Transit",
      count: 2,
      linkText: "Track orders",
      icon: Truck,
      iconBg: "bg-orange-100",
      iconColor: "text-orange-500",
      linkColor: "text-orange-500",
      Link : "/trnasit"
    },
    {
      title: "Wishlist Items",
      count: 16,
      linkText: "View wishlist",
      icon: Heart,
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      linkColor: "text-blue-600",
      Link : "/wishlist"
    },
  ];

  return (
    <div className="mt-1 sm:mt-4 lg:mt-6 px-1 sm:px-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map((card, index) => {
          const Icon = card.icon;

          return (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl shadow-sm p-4 flex items-center gap-4 min-h-[120px] hover:shadow-md transition-shadow"
            >
              {/* ICON */}
              <div
                className={`w-14 h-14 rounded-full flex items-center justify-center shrink-0 ${card.iconBg}`}
              >
                <Icon
                  size={25}
                  className={card.iconColor}
                />
              </div>

              {/* CONTENT */}
              <div className="flex flex-col">
                <p className="text-sm text-gray-500 font-medium">
                  {card.title}
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-1">
                  {card.count}
                </h2>

                <Link href={card.Link}
                  className={`text-sm font-medium mt-1 text-left hover:underline ${card.linkColor}`}
                >
                  {card.linkText}
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BuyerCard;