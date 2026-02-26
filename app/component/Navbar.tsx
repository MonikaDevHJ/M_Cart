import React from "react";
import { Search, ShoppingCart, } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-8">
            <p className="text-2xl font-bold text-fuchsia-600 cursor-pointer">
              M_Cart
            </p>

            {/* Search Bar - Hidden on small screens */}
            <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2 w-80">
              <Search className="text-gray-500 w-5 h-5" />
              <input
                type="text"
                placeholder="Search For Products...."
                className="bg-transparent outline-none px-2 w-full text-sm"
              />
            </div>
          </div>

          {/* DeskTop Menu */}
          <div className="hidden md:flex items-center gap-8 font-medium text-gray-700">
            <button className="hover:text-fuchsia-600 transition">Buyer</button>
            <button className="hover:text-fuchsia-600 transition">Seller</button>
            <button className="flex items-center gap-2 bg-fuchsia-600 text-white px-4 py-2 rounded-full hover:bg-fuchsia-700 transition">
              <ShoppingCart size={18} />Cart
            </button>



          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
