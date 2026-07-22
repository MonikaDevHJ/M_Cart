"use client";
import { Bell, User } from "lucide-react";

const BuyerNavbar = () => {
  return (
    <div className=" px-3 sm:px-5">
      <div className="flex justify-between items-center">
        {/* Title */}
        <div>
          <p
            className="font-bold 
            text-lg sm:text-xl md:text-2xl"
          >
            Buyer Dashboard
          </p>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3 sm:gap-5">
          {/* Logout Button */}
          <div className="">
            <button className="bg-fuchsia-500 hover:bg-fuchsia-700 p-3  border-fuchsia-500  border-2 rounded-4xl">
              Logout
            </button>
          </div>

          {/* Delet Account */}
          <div className="">
            <button className="bg-red-600 hover:bg-red-500 p-3  border-red-600 border-2 rounded-4xl">
              Delete Account
            </button>
          </div>

          {/* Notification Icon */}
          <div className="cursor-pointer">
            <Bell className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>

          {/* Admin Profile */}
          <div className="flex items-center gap-1 sm:gap-2 cursor-pointer">
            <User className="w-5 h-5 sm:w-6 sm:h-6" />

            {/* Hide text on very small screens */}
            <span className="hidden sm:block font-medium">Profile</span>
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-gray-600 mt-3" />
    </div>
  );
};

export default BuyerNavbar;
