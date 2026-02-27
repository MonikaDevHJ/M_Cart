'use client';


import React from "react";
import Link from "next/link";

const Main = () => {
  const cards = [
    { image: "/assets/Womens_image.jpg", label: "Womens" },
    { image: "/assets/Men_image.jpg", label: "Men" },
    { image: "/assets/Grocery_image.jpg", label: "Grocery" },
    { image: "/assets/Mobiles_images.jpg", label: "Mobiles" },
    { image: "/assets/Gifts_image.jpg", label: "Gifts" },
    { image: "/assets/Makeup_image.jpg", label: "Makeup" }
    // Add more cards if you want!
  ];


  return (
    <div className="p-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5">
        {cards.map((card, index) => (
          <Link
            key={index}
            href={`/${card.label.toLowerCase()}`}
          >
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-4 h-40 w-full flex flex-col items-center justify-center transition-transform duration-300 transform hover:scale-110"
            >
              <img
                src={card.image}
                alt={card.label}
                className="h-28 w-32 object-cover rounded-md"
              />
              <p className="text-center mt-2 font-semibold">{card.label}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Main;
