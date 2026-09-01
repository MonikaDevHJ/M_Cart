"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, type ReactNode } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "@/redux/store";
import { setCartItems } from "@/redux/cartSlice";
import { setWishlistItems } from "@/redux/wishlistSlice";


import mcartlogo4 from "../../../../public/assets/mcartlogo4.png";

import {
  FaHome,
  FaBoxOpen,
  FaHeart,
  FaShoppingCart,
  FaMapMarkerAlt,
  FaUser,
  FaTicketAlt,
  FaStar,
  FaHeadset,
  FaCog,
  FaChevronRight
} from "react-icons/fa";

type MenuItem = {
  name: string;
  icon: ReactNode;
  link: string;
  badge?: string;
};

const BuyerSideBar = () => {
  const pathname = usePathname();

  // Get cart items from Redux
  const cartItems = useSelector((state: RootState) => state.cart.items);
  // Get cart count
  const cartCount = cartItems.length;

  // Get WishLits Item from Redux
  const wishlistItems = useSelector((state: RootState) => state.wishlist.items);

  // Get Wishlist Item Count
  const wishlistCount = wishlistItems.length;

  const dispatch = useDispatch();

  // Fetch cart items from API
  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const res = await fetch("/api/cart");

        const data = await res.json();

        // Store cart items in Redux
        dispatch(setCartItems(data));
      } catch (error) {
        console.log(error);
      }
    };

    fetchCartItems();
  }, [dispatch]);

  // Fetch wishlist Items from api

  useEffect(() => {
    const fetchWishlistItems = async () => {
      try {
        const res = await fetch("/api/wishlist");

        if (!res.ok) {
          throw new Error("Failed to fetch wishList Items");
        }

        const data = await res.json();
        dispatch(setWishlistItems(data));
      } catch (error) {
        console.log("Wishlist fetch error", error);
      }
    };
    fetchWishlistItems();
  }, [dispatch]);

  const menuItems: MenuItem[] = [
    {
      name: "Dashboard",
      icon: <FaHome />,
      link: "/buyer"
    },
    {
      name: "My Orders",
      icon: <FaBoxOpen />,
      link: "/myorder"
    },
    {
      name: "Wishlist",
      icon: <FaHeart />,
      link: "/wishlist",
      badge: wishlistCount > 0 ? wishlistCount.toString() : undefined,

    },
    {
      name: "Cart",
      icon: <FaShoppingCart />,
      link: "/cart",
      badge: cartCount > 0 ? cartCount.toString() : undefined
    },
    {
      name: "Addresses",
      icon: <FaMapMarkerAlt />,
      link: "/cart"
    },
    {
      name: "Profile",
      icon: <FaUser />,
      link: "/buyerprofile"
    },
    {
      name: "Coupons",
      icon: <FaTicketAlt />,
      link: "/buyer/coupons"
    },
    {
      name: "Reviews",
      icon: <FaStar />,
      link: "/buyer/reviews"
    },
    {
      name: "Support",
      icon: <FaHeadset />,
      link: "/buyer/support"
    },
    {
      name: "Settings",
      icon: <FaCog />,
      link: "/buyer/settings"
    }
  ];

  return (
    <aside className="hidden md:flex w-[280px] min-h-screen flex-col rounded-[28px] bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white p-5 shadow-2xl h-full">
      {/* BRAND */}
      <Link href="./" className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm">
          <Image src={mcartlogo4} alt="M_Cart Logo" width={30} height={30} />
        </div>

        <div>
          <p className="text-xl font-bold tracking-tight">M_Cart</p>

          <p className="text-xs text-white/60">Buyer Panel</p>
        </div>
      </Link>

      {/* MENU */}
      <nav className="mt-8 space-y-2">
        {menuItems.map((item) => {
          const isActive =
            pathname === item.link || pathname.startsWith(item.link + "/");

          return (
            <Link
              href={item.link}
              key={item.name}
              className={`group flex items-center gap-3 rounded-2xl px-4 py-3 transition-all duration-200 ${
                isActive
                  ? "bg-gradient-to-r from-violet-600 to-fuchsia-500 shadow-lg shadow-violet-500/20"
                  : "hover:bg-white/8 text-white/85 hover:text-white"
              }`}
            >
              <span className="text-lg opacity-95">{item.icon}</span>

              <span className="text-sm font-medium flex-1">{item.name}</span>

              {/* CART BADGE */}
              {item.badge ? (
                <span className="min-w-6 h-6 px-2 rounded-full bg-violet-500 text-[11px] font-bold flex items-center justify-center">
                  {item.badge}
                </span>
              ) : isActive ? (
                <FaChevronRight className="text-xs opacity-90" />
              ) : null}
            </Link>
          );
        })}
      </nav>

      {/* BOTTOM CARD */}
      <div className="mt-auto pt-6">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-violet-500 via-purple-500 to-fuchsia-500 p-5 shadow-lg">
          <div className="absolute -right-5 -top-5 h-20 w-20 rounded-full bg-white/10 blur-xl" />

          <div className="absolute right-5 top-5 text-yellow-300 text-xl">
            ☀️
          </div>

          <p className="text-lg font-bold">Big Summer Sale</p>

          <p className="mt-2 text-sm text-white/85 leading-6">
            Up to 50% off on top brands
          </p>

          <button className="mt-5 w-full rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-violet-700 transition hover:bg-white/90">
            Shop Now
          </button>
        </div>
      </div>
    </aside>
  );
};

export default BuyerSideBar;
