"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";

type Product = {
  id: string;
  productImage: string | null;
  productName: string;
  productPrice: number;
  offerPercent: number;
  productSize: string;
};

type WishlistItem = {
  id: string;
  productId: string;
  product: Product;
};

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([]);

  // Fetch Wishlist
  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        const res = await fetch("/api/wishlist");

        if (!res.ok) {
          throw new Error("Failed to fetch wishlist");
        }

        const data = await res.json();

        setWishlistItems(data);
      } catch (error) {
        console.log("Wishlist fetch error:", error);
      }
    };

    fetchWishlist();
  }, []);

  // Remove from Wishlist
  const removeFromWishlist = async (productId: string) => {
    try {
      const res = await fetch(`/api/wishlist/${productId}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        throw new Error("Failed to remove wishlist item");
      }

      // Remove item from UI immediately
      setWishlistItems((prev) =>
        prev.filter((item) => item.productId !== productId)
      );
    } catch (error) {
      console.log("Remove wishlist error:", error);
    }
  };

  return (
    <div className="h-full w-full rounded-2xl p-8">
      {wishlistItems.length === 0 ? (
        <div className="flex items-center justify-center h-60">
          <p className="text-xl font-semibold text-gray-500">
            Your Wishlist is Empty ❤️
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {wishlistItems.map((item) => {
            const product = item.product;

            const discountAmount =
              (product.productPrice * product.offerPercent) / 100;

            const finalPrice =
              product.productPrice - discountAmount;

            return (
              <div
                key={item.id}
                className="bg-gray-400 rounded-2xl shadow-lg hover:shadow-xl transition p-4"
              >
                {/* Image + Heart */}
                <div className="relative border border-r-fuchsia-600">
                  {/* Image */}
                  <div className="w-full h-50 flex items-center justify-center rounded-xl overflow-hidden">
                    <Image
                      src={
                        product.productImage ||
                        "/placeholder-product.png"
                      }
                      alt={product.productName}
                      width={300}
                      height={200}
                      className="object-cover h-full w-full rounded-xl"
                    />
                  </div>

                  {/* Heart Icon */}
                  <button
                    onClick={() =>
                      removeFromWishlist(product.id)
                    }
                    className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md hover:scale-110 transition"
                  >
                    <FaHeart className="text-red-500" />
                  </button>
                </div>

                {/* Details */}
                <div className="mt-6">
                  {/* Product Name + Price */}
                  <div className="flex justify-between">
                    {/* Product Name */}
                    <div>
                      <p className="font-bold text-xl">
                        {product.productName}
                      </p>
                    </div>

                    {/* Product Price */}
                    <div className="text-right">
                      <p className="font-bold text-lg text-green-600">
                        ₹ {finalPrice}
                      </p>

                      {/* Original Price */}
                      {product.offerPercent > 0 && (
                        <>
                          <p className="line-through text-gray-500 text-sm">
                            ₹ {product.productPrice}
                          </p>

                          {/* Offer */}
                          <p className="text-red-500 text-sm font-semibold">
                            {product.offerPercent}% OFF
                          </p>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Size + Rating */}
                  <div className="mt-1 flex items-center justify-between">
                    {/* Product Size */}
                    <p className="text-gray-900 text-lg font-medium">
                      Size: {product.productSize}
                    </p>

                    {/* Ratings */}
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-400 text-lg">
                        ★
                      </span>

                      <span className="text-sm font-semibold text-gray-700">
                        4.5
                      </span>

                      <span className="text-xs text-gray-500">
                        (120 Reviews)
                      </span>
                    </div>
                  </div>

                  {/* Add To Cart Button */}
                  <div className="mt-4">
                    <button
                      className="w-full p-2 rounded-lg bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-semibold transition"
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Wishlist;