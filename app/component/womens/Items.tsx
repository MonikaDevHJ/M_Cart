"use client";

import { useEffect, useState } from "react";

type Product = {
  id: string;
  name: string;
  price: number;
  stock: number;
  image_url: string;
};

const Items = () => {
  const [items, setItems] = useState<Product[]>([]);

  const Card = [
    {
      image: "Kurtha Image",
      Name: "Kurtha",
      Amout: "Red Color"
    },
    {
      image: "Jeans Image ",
      Name: "Kurtha",
      Amout: "Red Color"
    }
  ];

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

  return (
    <div className="p-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-4 cursor-pointer"
          >
            {/* Image */}
            <div className="w-full h-48 bg-gray-100 flex items-center justify-center rounded-xl overflow-hidden">
              <img
                src="https://via.placeholder.com/150"
                alt={item.name}
                className="object-cover h-full"
              />
            </div>

            {/* Product Details */}
            <div className="mt-4 space-y-1">
              <p className="font-semibold text-lg">{item.price}</p>
              <p className="text-gray-500 text-sm">{item.image_url}</p>
            </div>

            {/* Button */}
            <button className="mt-4 w-full bg-fuchsia-600 text-white py-2 rounded-lg hover:bg-fuchsia-700 transition">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Items;
