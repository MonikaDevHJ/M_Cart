"use client";

import { useState } from "react";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";

const BuyerProfile = () => {
  const [isEditOpen, setIsEditOpen] = useState(false);

  const { user } = useUser();

  // Card Data
  // Later we will replace count with actual API/database data
  const cards = [
    {
      icon: "📦",
      name: "My Orders",
      details: "View your order history",
      count: 5,
      link: "/buyer/orders",
      linkText: "View Orders",
    },
    {
      icon: "❤️",
      name: "Wishlist",
      details: "Your saved items",
      count: 10,
      link: "/buyer/wishlist",
      linkText: "View Wishlist",
    },
    {
      icon: "📍",
      name: "My Location",
      details: "Manage delivery address",
      count: null,
      link: "/buyer/address",
      linkText: "Manage Address",
    },
    {
      icon: "🛒",
      name: "My Cart",
      details: "Your cart items",
      count: 5,
      link: "/buyer/cart",
      linkText: "View Cart",
    },
  ];

  return (
    <div>
      {/* ================= PROFILE HEADER ================= */}
      <div className="mt-10 bg-white border border-gray-200 rounded-2xl p-10 flex items-center justify-between shadow-sm">
        {/* Profile Information */}
        <div className="flex items-center gap-8">
          {/* Profile Image */}
          <div className="w-28 h-28 rounded-full bg-fuchsia-100 flex items-center justify-center">
            <span className="text-5xl">👤</span>
          </div>

          {/* Information */}
          <div>
            <p className="text-2xl font-bold text-gray-800">
              Monika H J
            </p>

            <p className="text-gray-500 mt-1">
              {user?.primaryEmailAddress?.emailAddress}
            </p>

            <p className="text-gray-500 mt-1">
              +91 8296612973
            </p>
          </div>
        </div>

        {/* Edit Button */}
        <button
          onClick={() => setIsEditOpen(true)}
          className="border border-fuchsia-700 text-fuchsia-900 hover:bg-fuchsia-700 hover:text-white px-6 py-3 rounded-xl font-semibold transition"
        >
          ✏️ Edit Profile
        </button>
      </div>

      {/* ================= CARD SECTION ================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
          >
            {/* Top Section */}
            <div className="flex items-start justify-between">
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-fuchsia-100 flex items-center justify-center">
                <span className="text-xl">{card.icon}</span>
              </div>

              {/* Count */}
              {card.count !== null && (
                <div className="text-2xl font-bold text-fuchsia-800">
                  {card.count}
                </div>
              )}
            </div>

            {/* Card Details */}
            <div className="mt-5">
              <p className="font-bold text-gray-800 text-lg">
                {card.name}
              </p>

              <p className="text-sm text-gray-500 mt-1">
                {card.details}
              </p>
            </div>

            {/* Link */}
            <div className="mt-5 pt-4 border-t border-gray-100">
              <Link
                href={card.link}
                className="text-fuchsia-700 font-semibold text-sm hover:text-fuchsia-900 flex items-center gap-2"
              >
                {card.linkText}

                <span className="text-lg transition-transform">
                  →
                </span>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* ================= PERSONAL INFORMATION ================= */}
      <div className="mt-8 bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-800">
          Personal Information
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-fuchsia-600 focus:ring-1 focus:ring-fuchsia-600"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-fuchsia-600 focus:ring-1 focus:ring-fuchsia-600"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Phone
            </label>

            <input
              type="tel"
              placeholder="Enter your phone number"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-fuchsia-600 focus:ring-1 focus:ring-fuchsia-600"
            />
          </div>

          {/* Location */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Location
            </label>

            <input
              type="text"
              placeholder="Enter your location"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-fuchsia-600 focus:ring-1 focus:ring-fuchsia-600"
            />
          </div>
        </div>

        {/* Save Button */}
        <div className="mt-7">
          <button className="bg-fuchsia-800 hover:bg-fuchsia-700 text-white px-6 py-3 rounded-xl font-semibold transition">
            Save Changes
          </button>
        </div>
      </div>

      {/* ================= ACCOUNT SETTINGS ================= */}
      <div className="mt-8 bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-800">
          Account Settings
        </h2>

        <div className="mt-6">
          {/* Change Password */}
          <div className="flex items-center justify-between py-5 border-b border-gray-200 cursor-pointer hover:bg-gray-50 px-3 rounded-xl">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-fuchsia-100 flex items-center justify-center">
                🔒
              </div>

              <div>
                <p className="font-semibold text-gray-800">
                  Change Password
                </p>

                <p className="text-sm text-gray-500 mt-1">
                  Update your password for better security
                </p>
              </div>
            </div>

            <span className="text-gray-500 text-xl">
              →
            </span>
          </div>

          {/* Notifications */}
          <div className="flex items-center justify-between py-5 border-b border-gray-200 cursor-pointer hover:bg-gray-50 px-3 rounded-xl">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-yellow-100 flex items-center justify-center">
                🔔
              </div>

              <div>
                <p className="font-semibold text-gray-800">
                  Notifications
                </p>

                <p className="text-sm text-gray-500 mt-1">
                  Manage your notification preferences
                </p>
              </div>
            </div>

            <span className="text-gray-500 text-xl">
              →
            </span>
          </div>

          {/* Logout */}
          <div className="flex items-center justify-between py-5 cursor-pointer hover:bg-gray-50 px-3 rounded-xl">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center">
                🚪
              </div>

              <div>
                <p className="font-semibold text-gray-800">
                  Logout
                </p>

                <p className="text-sm text-gray-500 mt-1">
                  Sign out from your account
                </p>
              </div>
            </div>

            <span className="text-gray-500 text-xl">
              →
            </span>
          </div>
        </div>
      </div>

      {/* ================= EDIT PROFILE MODAL ================= */}
      {isEditOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-lg rounded-2xl p-8 shadow-xl">
            {/* Modal Header */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-800">
                Edit Profile
              </h2>

              <button
                onClick={() => setIsEditOpen(false)}
                className="text-gray-500 hover:text-gray-800 text-2xl"
              >
                ✕
              </button>
            </div>

            {/* Modal Content */}
            <div className="space-y-5">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-fuchsia-600"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone
                </label>

                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-fuchsia-600"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Enter Your Email
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-fuchsia-600"
                />
              </div>
            </div>

            {/* Modal Buttons */}
            <div className="flex justify-end gap-3 mt-7">
              <button
                onClick={() => setIsEditOpen(false)}
                className="px-5 py-3 rounded-xl border border-gray-300 hover:bg-gray-50"
              >
                Cancel
              </button>

              <button className="px-5 py-3 rounded-xl bg-fuchsia-800 hover:bg-fuchsia-700 text-white">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BuyerProfile;