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
    <div className=" h-full rounded-2xl">
      {/* <h1 className="text-2xl font-bold text-fuchsia-700">
        Pick Your Dress
      </h1> */}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-2 ">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-2xl hover:shadow-xl  transition p-4"
          >
            {/* Image */}
            <div className="w-full h-50  flex items-center justify-center rounded-xl overflow-hidden   p-5">
              <img
                src={item.image_url || "https://via.placeholder.com/150"}
                alt={item.name}
                className="object-cover h-44 w-full rounded-4xl"
              />
            </div>

            {/* Details */}
            <div className="mt-4">
              <p className="font-semibold">{item.name}</p>
              <p className="text-gray-500 text-sm">₹ {item.price}</p>
            </div>

            <button className="mt-4 w-full bg-fuchsia-600 text-white py-2 rounded-lg hover:bg-fuchsia-700">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Items;