"use client"
import { useState } from "react";
import { ShoppingCart, Menu, X, Search } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <div className="flex items-center gap-8">
            <h1 className="text-3xl font-bold text-fuchsia-600 cursor-pointer">
              M_Cart
            </h1>

            {/* Search Bar - Hidden on small screens */}
            <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2 w-80">
              <Search className="text-gray-500 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for products..."
                className="bg-transparent outline-none px-2 w-full text-sm"
              />
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 font-medium text-gray-700">
            <button className="hover:text-fuchsia-600 font-bold text-xl transition">
              Buyer
            </button>

            <button className="hover:text-fuchsia-600 font-bold text-xl transition">
              Seller
            </button>

            <button className="flex items-center gap-2 bg-fuchsia-600 text-white px-4 py-2 rounded-full hover:bg-fuchsia-700 transition">
              <ShoppingCart size={18} />
              Cart
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setOpen(!open)}>
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden px-4 pb-4 space-y-4 bg-white shadow">
          
          <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">
            <Search className="text-gray-500 w-5 h-5" />
            <input
              type="text"
              placeholder="Search products..."
              className="bg-transparent outline-none px-2 w-full text-sm"
            />
          </div>

          <button className="block w-full font-bold text-left hover:text-fuchsia-600">
            Buyer
          </button>

          <button className="block w-full text-left hover:text-fuchsia-600">
            Seller
          </button>

          <button className="flex items-center gap-2 bg-fuchsia-600 text-white px-4 py-2 rounded-full w-fit">
            <ShoppingCart size={18} />
            Cart
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;