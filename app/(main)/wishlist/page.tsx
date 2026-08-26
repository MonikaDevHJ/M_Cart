"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { setWishlistItems } from "@/redux/wishlistSlice";

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
  const [addCart, setAddedCart] = useState<string[]>([]);
  const [useRole, setUserRole] = useState("");

  const dispatch = useDispatch();

  const wishlistItems = useSelector((state: RootState) => state.wishlist.items);

  const { isSignedIn } = useUser();

  // =========================
  // Fetch User Role
  // =========================
  useEffect(() => {
    const fetchUserRole = async () => {
      try {
        const res = await fetch("/api/user-role");

        if (!res.ok) {
          throw new Error("Failed to fetch user role");
        }

        const data = await res.json();

        if (data?.role) {
          setUserRole(data.role);
        }
      } catch (error) {
        console.log("User role error:", error);
      }
    };

    if (isSignedIn) {
      fetchUserRole();
    }
  }, [isSignedIn]);

  // =========================
  // Fetch Wishlist
  // =========================
  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        const res = await fetch("/api/wishlist");

        if (!res.ok) {
          throw new Error("Failed to fetch wishlist");
        }

        const data = await res.json();
        console.log("WishList API:", data);

        dispatch(setWishlistItems(data));
      } catch (error) {
        console.log("Wishlist fetch error:", error);
      }
    };

    if (isSignedIn) {
      fetchWishlist();
    }
  }, [isSignedIn, dispatch]);

  // =========================
  // Fetch Existing Cart Items
  // =========================
  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const res = await fetch("/api/cart");

        if (!res.ok) {
          throw new Error("Failed to fetch cart");
        }

        const data = await res.json();

        const cartProductIds = data.map(
          (item: { productId: string }) => item.productId
        );

        setAddedCart(cartProductIds);
      } catch (error) {
        console.log("Cart fetch error:", error);
      }
    };

    if (isSignedIn) {
      fetchCartItems();
    }
  }, [isSignedIn]);

  // =========================
  // Add Product To Cart
  // =========================
  const itemAddedToCart = async (item: Product) => {
    // Already in cart
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

      console.log("Cart response:", data);

      if (!res.ok) {
        throw new Error(data?.message || "Failed to add item to cart");
      }

      // Update button
      setAddedCart((prev) => [...prev, item.id]);

      // Notify Navbar / Cart
      window.dispatchEvent(new Event("cartUpdated"));
    } catch (error) {
      console.log("Add to cart error:", error);
    }
  };

  // =========================
  // Remove From Wishlist
  // =========================
  const removeFromWishlist = async (productId: string) => {
    try {
      const res = await fetch(`/api/wishlist/${productId}`, {
        method: "DELETE"
      });

      const data = await res.json();

      console.log("DELETE STATUS:", res.status);
      console.log("DELETE RESPONSE:", data);

      if (!res.ok) {
        throw new Error(data?.message || "Failed to remove wishlist item");
      }

      // Remove from UI immediately
      dispatch(
        setWishlistItems(
          wishlistItems.filter((item) => item.productId !== productId)
        )
      );
    } catch (error) {
      console.log("Remove wishlist error:", error);
    }
  };

  // =========================
  // UI
  // =========================
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
            // IMPORTANT:
            // item = WishlistItem
            // item.product = Product
            const product = item.product;

            const discountAmount =
              (product.productPrice * product.offerPercent) / 100;

            const finalPrice = product.productPrice - discountAmount;

            const isAddedToCart = addCart.includes(product.id);

            return (
              <div
                key={item.id}
                className="bg-gray-400 rounded-2xl shadow-lg hover:shadow-xl transition p-4"
              >
                {/* ================= IMAGE + HEART ================= */}
                <div className="relative border border-r-fuchsia-600">
                  <div className="w-full h-50 flex items-center justify-center rounded-xl overflow-hidden">
                    <Image
                      src={product.productImage || "/placeholder-product.png"}
                      alt={product.productName}
                      width={300}
                      height={200}
                      className="object-cover h-full w-full rounded-xl"
                    />
                  </div>

                  {/* Remove Wishlist */}
                  <button
                    onClick={() => removeFromWishlist(product.id)}
                    className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md hover:scale-110 transition"
                  >
                    <FaHeart className="text-red-500" />
                  </button>
                </div>

                {/* ================= DETAILS ================= */}
                <div className="mt-6">
                  {/* Product Name + Price */}
                  <div className="flex justify-between">
                    <div>
                      <p className="font-bold text-xl">{product.productName}</p>
                    </div>

                    <div className="text-right">
                      {/* Final Price */}
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

                  {/* ================= SIZE + RATING ================= */}
                  <div className="mt-1 flex items-center justify-between">
                    <p className="text-gray-900 text-lg font-medium">
                      Size: {product.productSize}
                    </p>

                    <div className="flex items-center gap-1">
                      <span className="text-yellow-400 text-lg">★</span>

                      <span className="text-sm font-semibold text-gray-700">
                        4.5
                      </span>

                      <span className="text-xs text-gray-500">
                        (120 Reviews)
                      </span>
                    </div>
                  </div>

                  {/* ================= ADD TO CART ================= */}

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
                      disabled={isAddedToCart}
                      onClick={() => itemAddedToCart(product)}
                      className={`mt-4 w-full p-2 rounded-lg transition text-white font-semibold ${
                        isAddedToCart
                          ? "bg-green-600 cursor-not-allowed"
                          : "bg-fuchsia-600 hover:bg-fuchsia-700"
                      }`}
                    >
                      {isAddedToCart ? "Item Added In Cart ✅" : "Add To Cart"}
                    </button>
                  )}
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
