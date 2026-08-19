"use client";

import { useEffect, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";

type Product = {
  id: string;

  productImage: string | null;
  productName: string;
  productPrice: number;
  offerPercent: number;
  productSize: string;
  stockQuantity: number;
};

const Items = ({ items }: { items: Product[] }) => {
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [addCart, setAddedCart] = useState<string[]>([]);
  const [useRole, setUserRole] = useState("");

  useEffect(() => {
    const fetchUserRole = async () => {
      try {
        const res = await fetch("/api/user-role");
        const data = await res.json();

        if (data?.role) {
          setUserRole(data.role);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchUserRole();
  }, []);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const res = await fetch("/api/cart");
        const data = await res.json();

        const cartProductIds = data.map((item: any) => item.productId);

        setAddedCart(cartProductIds);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCartItems();
  }, []);

  const toggleWishlist = async (id: string) => {
    const isWishlisted = wishlist.includes(id);

    try {
      if (isWishlisted) {
        // REMOVE FROM WISHLIST
        const res = await fetch(`/api/wishlist/${id}`, {
          method: "DELETE"
        });

        if (!res.ok) {
          throw new Error("Failed to remove wishlist");
        }

        setWishlist((prev) => prev.filter((item) => item !== id));
      } else {
        // ADD TO WISHLIST
        const res = await fetch("/api/wishlist", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            productId: id
          })
        });

        if (!res.ok) {
          throw new Error("Failed to add wishlist");
        }

        setWishlist((prev) => [...prev, id]);
      }
    } catch (error) {
      console.log("Wishlist error:", error);
    }
  };

  const itemAddedToCart = async (item: Product) => {
    if (addCart.includes(item.id)) {
      alert("Item already added to cart");
      return;
    }

    try {
      const res = await fetch("/api/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          productId: item.id
        })
      });

      const data = await res.json();

      console.log(data);

      // Just update button state
      setAddedCart((prev) => [...prev, item.id]);

      // Refresh navbar/cart page
      window.dispatchEvent(new Event("cartUpdated"));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchWishlistItems = async () => {
      try {
        const res = await fetch("/api/wishlist");

        const data = await res.json();

        const wishlistProductIds = data.map((item: any) => item.productId);

        setWishlist(wishlistProductIds);
      } catch (error) {
        console.log(error);
      }
    };

    fetchWishlistItems();
  }, []);

  const { isSignedIn } = useUser();
  console.log("user Role", useRole);

  return (
    <div className="h-full rounded-2xl p-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-2">
        {items.map((item) => {
          const isWishlisted = wishlist.includes(item.id);
          const discountAmout = (item.productPrice * item.offerPercent) / 100;
          const finalPrice = item.productPrice - discountAmout;

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
                  onClick= { ()=> {
                    if(!isSignedIn){
                      alert("Please Login to add items to wishList");
                      return;

                    }
                    toggleWishlist(item.id)
                  } }
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
                <div className="text-right">
                  <p className="font-bold text-lg text-green-600">
                    ₹ {finalPrice}
                  </p>

                  {item.offerPercent > 0 && (
                    <>
                      <p className="line-through text-gray-500 text-sm">
                        ₹ {item.productPrice}
                      </p>

                      <p className="text-red-500 text-sm font-semibold">
                        {item.offerPercent}% OFF
                      </p>
                    </>
                  )}
                </div>
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

              {!isSignedIn ? (
                <Link href="/buyer-signup">
                  <button className="mt-4 w-full p-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold">
                    Login To Buy
                  </button>
                </Link>
              ) : useRole === "seller" ? (
                <button
                  disabled
                  className="mt-4 w-full p-2 rounded-lg bg-gray-500 cursor-not-allowed text-white font-semibold"
                >
                  Seller Cannot Buy
                </button>
              ) : (
                <button
                  disabled={addCart.includes(item.id)}
                  onClick={() => itemAddedToCart(item)}
                  className={`mt-4 w-full p-2 rounded-lg transition text-white font-semibold ${
                    addCart.includes(item.id)
                      ? "bg-green-600 cursor-not-allowed"
                      : "bg-fuchsia-600 hover:bg-fuchsia-700"
                  }`}
                >
                  {addCart.includes(item.id)
                    ? "Item Added In Cart ✅"
                    : "Add To Cart"}
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Items;
