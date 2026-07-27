"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

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
  FaChevronRight,
  FaShoppingBag,
  FaBell
} from "react-icons/fa";

type MenuItem = {
  name: string;
  icon: ReactNode;
  link: string;
  badge?: string;
};

const BuyerSidebar = () => {
  const pathName = usePathname();

  const menuItem: MenuItem[] = [
    { name: "Dashboard", icon: <FaHome />, link: "/buyer" },
    { name: "My Orders", icon: <FaBoxOpen />, link: "/buyer/orders" },
    { name: "Wishlist", icon: <FaHeart />, link: "/buyer/wishlist" },
    { name: "Cart", icon: <FaShoppingCart />, link: "/buyer/cart", badge: "3" },
    { name: "Addresses", icon: <FaMapMarkerAlt />, link: "/buyer/addresses" },
    { name: "Profile", icon: <FaUser />, link: "/buyer/profile" },
    { name: "Coupons", icon: <FaTicketAlt />, link: "/buyer/coupons" },
    { name: "Reviews", icon: <FaStar />, link: "/buyer/reviews" },
    { name: "Support", icon: <FaHeadset />, link: "/buyer/support" },
    { name: "Settings", icon: <FaCog />, link: "/buyer/settings" }
  ];

  return (

  
  <aside className="hidden md:flex w-[280px] min-h-screen flex-col rounded-[28px] bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white p-5 shadow-2xl">
    {/* Brand */}
     <Link href="/buyer" className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm">
          <Image src={mcartlogo4} alt="M_Cart Logo" width={80} height={80} />
        </div>
        <div>
          <p className="text-xl font-bold tracking-tight">ShopHub</p>
          <p className="text-xs text-white/60">Buyer Panel</p>
        </div>
      </Link>

  </aside>
  )
};

export default BuyerSidebar;
