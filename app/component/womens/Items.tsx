"use client";

import { useEffect, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/cartSlice";
import { it } from "node:test";

type Product = {
  id: string;

  productImage: string;
  productName: string;
  productPrice: number;
  productSize: string;
  stockQuantity: number;
  image_url: string;
};

const Items = () => {
  const [items, setItems] = useState<Product[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [addCart, setAddedCart] = useState<string[]>([]);
  const dispatch = useDispatch();

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
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const itemAddedToCart = (item: Product) => {
    console.log("Button Clicked")
    // Check if Already Added
    if (!addCart.includes(item.id)) {
      setAddedCart((prev) => [...prev, item.id]);
      // this line Will Sending the Wholde Product To Store
      dispatch(addToCart(item))
      console.log("Disptahced Product", item)
    }
  };

  return (
    <div className="h-full rounded-2xl p-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-2">
        {items.map((item) => {
          const isWishlisted = wishlist.includes(item.id);

          return (
            <div
              key={item.id}
              className="bg-gray-400 rounded-2xl shadow-lg hover:shadow-xl transition p-4 "
            >
              {/* Image + Heart */}
              <div className="relative border border-r-fuchsia-600 ">
                <div className="w-60 h-50 flex items-center justify-center rounded-xl overflow-hidden">
                  <img
                    src={item.productImage || "https://via.placeholder.com/150"}
                    alt={item.productName}
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
                <p className="font-bold text-xl">{item.productName}</p>
                <p className="text-gray-900 text-lg">₹ {item.productPrice}</p>
              </div>
              <div className="mt-1 flex items-center justify-between">
                {/* Product Size */}
                <p className="text-gray-900 text-lg font-medium">
                  Size: {item.productSize}
                </p>

                {/* Ratings */}
                <div className="flex items-center gap-1">
                  <span className="text-yellow-400 text-lg">★</span>
                  <span className="text-sm font-semibold text-gray-700">
                    4.5
                  </span>

                  <span className="text-xs text-gray-500">(120 Reviews)</span>
                </div>
              </div>

              {/* Button */}
              <button
                onClick={() => itemAddedToCart(item)}
                className={`mt-4 w-full p-2 rounded-lg transition text-white font-semibold ${
                  addCart.includes(item.id)
                    ? "bg-green-600"
                    : "bg-fuchsia-600 hover:bg-fuchsia-700"
                }`}
              >
                {addCart.includes(item.id)
                  ? "Item Added In Cart ✅"
                  : "Add To Cart"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Items;
