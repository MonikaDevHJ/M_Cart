"use client";

import { Bell, User } from "lucide-react";
import { useClerk } from "@clerk/nextjs";

const SellerNavbar = () => {
  const { signOut } = useClerk();

  const logoutClick = async () => {
    const confirmLogout = window.confirm(
      "Are you sure you want to logout?"
    );

    if (!confirmLogout) return;

    await signOut({
      redirectUrl: "/",
    });
  };

  const deleteAccount = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete your Whole data and account?"
    );

    if (!confirmDelete) return;

    const response = await fetch("/api/delete-account", {
      method: "DELETE",
    });

    const data = await response.json();

    if (data.success) {
      alert("Account deleted successfully");
      window.location.href = "/";
    } else {
      alert(data.message);
    }
  };

  return (
    <div
      className="
        w-full
        border
        border-gray-200
        bg-white
        rounded-2xl
        shadow-sm
        px-3
        py-3
        sm:px-5
        sm:py-4
        lg:px-6
      "
    >
      <div className="flex items-center justify-between gap-3">

        {/* ================= LEFT : TITLE ================= */}
        <div className="min-w-0">
          <p
            className="
              font-bold
              text-gray-800
              text-base
              sm:text-lg
              md:text-xl
              lg:text-2xl
              truncate
            "
          >
            Seller Dashboard
          </p>

          <p className="hidden sm:block text-xs md:text-sm text-gray-500 mt-0.5">
            Manage your store and products
          </p>
        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div
          className="
            flex
            items-center
            gap-2
            sm:gap-3
            md:gap-4
            flex-shrink-0
          "
        >
          {/* ================= LOGOUT ================= */}
          <button
            onClick={logoutClick}
            className="
              bg-fuchsia-600
              hover:bg-fuchsia-700
              text-white
              font-medium
              text-xs
              sm:text-sm
              px-3
              py-2
              sm:px-4
              sm:py-2.5
              rounded-xl
              transition-all
              duration-200
              shadow-sm
              hover:shadow-md
              whitespace-nowrap
            "
          >
            Logout
          </button>

          {/* ================= DELETE ACCOUNT ================= */}
          <button
            onClick={deleteAccount}
            className="
              bg-red-600
              hover:bg-red-700
              text-white
              font-medium
              text-xs
              sm:text-sm
              px-3
              py-2
              sm:px-4
              sm:py-2.5
              rounded-xl
              transition-all
              duration-200
              shadow-sm
              hover:shadow-md
              whitespace-nowrap
            "
          >
            <span className="hidden sm:inline">
              Delete Account
            </span>

            <span className="sm:hidden">
              Delete
            </span>
          </button>

          {/* ================= NOTIFICATION ================= */}
          <button
            className="
              relative
              flex
              items-center
              justify-center
              w-9
              h-9
              sm:w-10
              sm:h-10
              rounded-xl
              bg-gray-100
              hover:bg-gray-200
              transition-all
              duration-200
            "
          >
            <Bell
              className="
                w-4
                h-4
                sm:w-5
                sm:h-5
                text-gray-700
              "
            />

            {/* Notification Dot */}
            <span
              className="
                absolute
                top-1
                right-1
                w-2
                h-2
                bg-red-500
                rounded-full
                border-2
                border-white
              "
            />
          </button>

          {/* ================= PROFILE ================= */}
          <button
            className="
              flex
              items-center
              gap-2
              bg-gray-100
              hover:bg-gray-200
              px-2
              py-2
              sm:px-3
              rounded-xl
              transition-all
              duration-200
            "
          >
            <div
              className="
                flex
                items-center
                justify-center
                w-7
                h-7
                sm:w-8
                sm:h-8
                rounded-full
                bg-fuchsia-100
              "
            >
              <User
                className="
                  w-4
                  h-4
                  sm:w-5
                  sm:h-5
                  text-fuchsia-600
                "
              />
            </div>

            <span className="hidden md:block font-medium text-sm text-gray-700">
              Admin
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SellerNavbar;