import { Bell, User } from "lucide-react";

const SellerNavbar = () => {
  return (
    <div className="mt-2">
      <div className="flex justify-between items-center">
        
        {/* Title */}
        <div>
          <p className="font-bold text-2xl">Seller Dashboard</p>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-5">
          
          {/* Notification Icon */}
          <div className="cursor-pointer">
            <Bell className="w-6 h-6 " />
          </div>

          {/* Admin Profile */}
          <div className="flex items-center gap-2 cursor-pointer">
            <User className="w-6 h-6 " />
            <span className=" font-medium">Admin</span>
          </div>

        </div>
      </div>

      <hr className="bg-white mt-3" />
    </div>
  );
};

export default SellerNavbar;