"use client";
import Link from "next/link";


import { Bell, LogOut, Trash2, UserCircle2 } from "lucide-react";

const BuyerNavbar = () => {
  return (
    <header className="px-1 sm:px-4 lg:px-1 pt-3">
      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm px-4 sm:px-5 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* LEFT SIDE */}
          <div>
            <h1 className="text-lg sm:text-2xl font-bold text-gray-900">
              Buyer Dashboard
            </h1>
            <p className="hidden sm:block text-sm text-gray-500 mt-1">
              Track your orders, wishlist, and offers
            </p>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Notification */}
            <button className="relative flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 transition">
              <Bell className="w-5 h-5 text-gray-700" />
              <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-purple-600 text-white text-[10px] font-bold flex items-center justify-center">
                2
              </span>
            </button>

            {/* Profile */}
            <Link href="buyerprofile" className="flex items-center gap-2 sm:gap-3 px-3 py-2 rounded-full bg-gray-100 hover:bg-gray-200 transition">
              <div className="w-9 h-9 rounded-full bg-purple-100 flex items-center justify-center">
                <UserCircle2 className="w-5 h-5 text-purple-600" />
              </div>
              <div className="hidden md:block text-left">
                <p className="text-sm font-semibold text-gray-900 leading-4">
                  Monika
                </p>
                <p className="text-xs text-gray-500">Buyer</p>
              </div>
            </Link>

            {/* Logout */}
            <button className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-fuchsia-600 hover:bg-fuchsia-700 text-white transition">
              <LogOut className="w-4 h-4" />
              <span className="hidden sm:inline text-sm font-medium">
                Logout
              </span>
            </button>

            {/* Delete */}
            <button className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-red-600 hover:bg-red-700 text-white transition">
              <Trash2 className="w-4 h-4" />
              <span className="hidden sm:inline text-sm font-medium">
                Delete Account
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default BuyerNavbar;