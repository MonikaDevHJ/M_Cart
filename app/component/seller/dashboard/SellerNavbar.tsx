"use client";
import { Bell, User } from "lucide-react";
import { useClerk } from "@clerk/nextjs";

const SellerNavbar = () => {
  const { signOut } = useClerk();

  const logoutClick = async () => {
    const confirmLogout = window.confirm("Are you sure you want to logout?");

    if (!confirmLogout) return;

    await signOut({
      redirectUrl: "/"
    });
  };

  const deleteAccount = ()=>{
    
  }

  return (
    <div className=" px-3 sm:px-5">
      <div className="flex justify-between items-center">
        {/* Title */}
        <div>
          <p
            className="font-bold 
            text-lg sm:text-xl md:text-2xl"
          >
            Seller Dashboard
          </p>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3 sm:gap-5">
          {/* Logout Button */}
          <div className="">
            <button
              onClick={logoutClick}
              className="bg-fuchsia-500 hover:bg-fuchsia-700 p-3  border-fuchsia-500  border-2 rounded-4xl"
            >
              Logout
            </button>
          </div>

          {/* Delet Account */}
          <div className="">
            <button 
            onClick={deleteAccount}
            className="bg-red-600 hover:bg-red-500 p-3  border-red-600 border-2 rounded-4xl">
              Delete

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
            <span className="hidden sm:block font-medium">Admin</span>
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-gray-600 mt-3" />
    </div>
  );
};

export default SellerNavbar;

function signOut(arg0: { redirect: string }) {
  throw new Error("Function not implemented.");
}
