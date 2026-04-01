"use client";

import Image from "next/image";
import mcartlogo4 from "../../../../public/assets/mcartlogo4.png";
import Link from "next/link";
import {
  FaHome,
  FaBox,
  FaPlusCircle,
  FaShoppingCart,
  FaMoneyBill,
  FaCog,
  FaChevronRight
} from "react-icons/fa";

import { usePathname } from "next/navigation";

type MenuItem = {
  name: string;
  icon: React.ReactNode;
  link: string;
};

const SellerSidebar: React.FC = () => {
  const menuItems: MenuItem[] = [
    { name: "DashBoard", icon: <FaHome />, link: "/seller" },
    { name: "Add Products", icon: <FaPlusCircle />, link: "/seller/addproduct" },
    { name: "Products", icon: <FaBox />, link: "/seller/products" },
    { name: "Orders", icon: <FaShoppingCart />, link: "/seller/orders" },
    { name: "Earnings", icon: <FaMoneyBill />, link: "/seller/earnings" },
    { name: "Settings", icon: <FaCog />, link: "/seller/settings" }
  ];

  // ✅ ADDED: get current path
  const pathname = usePathname();

  return (
    <div className="bg-gray-700 text-white h-full md:h-screen lg:h-full w-full md:w-60 lg:w-80 rounded-2xl p-4 sm:p-5">
      <Link href="/">
        <div className="flex items-center gap-2 sm:gap-3">
          <Image src={mcartlogo4} alt="M_Cart Logo" width={40} height={40} />
          <p className="text-lg sm:text-xl lg:text-2xl font-semibold">Cart</p>
        </div>
      </Link>

      <div className="mt-5 space-y-2">
        {menuItems.map((item) => {
          
          // ✅ ADDED: check active route
          const isActive = pathname === item.link;

          return (
            <Link href={item.link} key={item.name}>
              <div
                className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer
                ${isActive ? "bg-fuchsia-700" : "hover:bg-fuchsia-700"}`}
              >
                <span className="text-lg">{item.icon}</span>
                <span>{item.name}</span>

                {/* ✅ ADDED: arrow icon for active */}
                {isActive && <FaChevronRight className="ml-auto" />}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SellerSidebar;