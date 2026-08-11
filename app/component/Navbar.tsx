"use client";
import { useEffect, useState } from "react";
import { ShoppingCart, Menu, X, Search } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { setCartItems } from "@/redux/cartSlice";
import { useRouter } from "next/navigation";

import mcartlogo4 from "../../public/assets/mcartlogo4.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  const router = useRouter();
  console.log(search);
  const cartItems = useSelector((state: RootState) => state.cart.items);
  console.log(cartItems);

  const cartCount = cartItems.length;
  const dispatch = useDispatch();

  // Hanlde Search
  const handleSearch = async () => {
    if (!search.trim()) return;

    const res = await fetch(
      `/api/search-category?search=${encodeURIComponent(search)}`
    );

    const product = await res.json();

    if (!product) {
      alert("Product not found");
      return;
    }

    router.push(
      `/${product.selectCategory}?search=${encodeURIComponent(search)}`
    );
  };

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const res = await fetch("/api/cart");
        const data = await res.json();
        //  Here redux also i have been used becauase of Instant UI i need in Butoo
        dispatch(setCartItems(data));
      } catch (error) {
        console.log(error); 
      }
    };

    fetchCartItems();
  }, [dispatch]);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md w-full border-2 rounded-4xl border-fuchsia-700">
      {" "}
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-1 ">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-30">
            <Link href="/">
              <div className="flex gap-2 ">
                <div className="">
                  <Image
                    src={mcartlogo4}
                    alt="M_Cart Logo"
                    width={50}
                    height={50}
                  />
                </div>

                <div className="text-2xl font-bold text-fuchsia-600 cursor-pointer">
                  Cart
                </div>
              </div>
            </Link>

            {/* Search Bar - Hidden on small screens */}
            <div className="hidden md:flex items-center bg-fuchsia-100 rounded-full px-4 py-2 w-96 border border-fuchsia-400">
              <Search className="text-gray-500 w-5 h-6" />
              <input
                type="text"
                placeholder="Search for products..."
                className="bg-fuchsia-50 outline-none px-2 w-full text-sm"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSearch();
                  }
                }}
              />
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-20 font-medium text-gray-700">
            <Link
              href="/seller-signup"
              className="hover:text-fuchsia-600 font-bold text-xl transition"
            >
              Seller
            </Link>
            <Link
              href="/buyer-signup"
              className="hover:text-fuchsia-600 font-bold text-xl transition"
            >
              Buyer
            </Link>

            <Link
              href="/cart"
              className="relative flex items-center gap-2 bg-fuchsia-600 text-white px-4 py-2 rounded-full hover:bg-fuchsia-700 transition"
            >
              <ShoppingCart size={18} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
              Cart
            </Link>
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

          <Link
            href="/seller"
            className="block w-full text-left hover:text-fuchsia-600"
          >
            Seller
          </Link>

          <Link
            href="/buyer-signup"
            className="hover:text-fuchsia-600 font-bold text-xl transition"
          >
            Buyer
          </Link>

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
