"use client";

import { useEffect, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

type Product = {
  id: string;
  name: string;
  price: number;
  stock: number;
  image_url: string;
};

const Items = () => {
  const [items, setItems] = useState<Product[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const res = await fetch("/api/products");
        const data = await res.json();
        setItems(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchItem();
  }, []);

  const toggleWishlist = (id: string) => {
    setWishlist((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="h-full rounded-2xl p-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-2">
        {items.map((item) => {
          const isWishlisted = wishlist.includes(item.id);

          return (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition p-4"
            >
              {/* Image + Heart */}
              <div className="relative">
                <div className="w-full h-52 flex items-center justify-center rounded-xl overflow-hidden">
                  <img
                    src={item.image_url || "https://via.placeholder.com/150"}
                    alt={item.name}
                    className="object-cover h-full w-full rounded-xl"
                  />
                </div>

                {/* Heart Icon */}
                <button
                  onClick={() => toggleWishlist(item.id)}
                  className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md hover:scale-110 transition"
                >
                  {isWishlisted ? (
                    <FaHeart className="text-red-500" />
                  ) : (
                    <FaRegHeart className="text-gray-600" />
                  )}
                </button>
              </div>

              {/* Details */}
              <div className="mt-6 flex justify-between ">
                <p className="font-bold text-xl">{item.name}</p>
                <p className="text-gray-900 text-lg">₹ {item.price}</p>
              </div>

              {/* Button */}
              <button className="mt-4 w-full bg-fuchsia-600 text-white py-2 rounded-lg hover:bg-fuchsia-700 transition">
                Add to Cart
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Items;