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
  FaChevronRight,
} from "react-icons/fa";

import { usePathname } from "next/navigation";

type MenuItem = {
  name: string;
  icon: React.ReactNode;
  link: string;
};

const SellerSidebar: React.FC = () => {
  const menuItems: MenuItem[] = [
    {
      name: "Dashboard",
      icon: <FaHome />,
      link: "/seller",
    },
    {
      name: "Add Products",
      icon: <FaPlusCircle />,
      link: "/seller/addproduct",
    },
    {
      name: "Products",
      icon: <FaBox />,
      link: "/seller/products",
    },
    {
      name: "Orders",
      icon: <FaShoppingCart />,
      link: "/seller/orders",
    },
    {
      name: "Earnings",
      icon: <FaMoneyBill />,
      link: "/seller/earnings",
    },
    {
      name: "Settings",
      icon: <FaCog />,
      link: "/seller/settings",
    },
  ];

  const pathname = usePathname();

  return (
    <div
      className="
        bg-gray-700
        text-white
        w-full
        md:w-full
        lg:w-full
        h-full
        min-h-screen
        rounded-2xl
        p-4
        sm:p-5
        lg:p-6
      "
    >
      {/* Logo */}
      <Link href="/" className="block">
        <div
          className="
            flex
            items-center
            gap-3
            pb-5
            border-b
            border-gray-600
          "
        >
          <Image
            src={mcartlogo4}
            alt="M_Cart Logo"
            width={45}
            height={45}
            className="object-contain"
          />

          <div>
            <p className="text-xl sm:text-2xl font-bold">
              M_Cart
            </p>

            <p className="text-xs text-gray-400">
              Seller Dashboard
            </p>
          </div>
        </div>
      </Link>

      {/* Menu */}
      <div className="mt-6 space-y-2">
        {menuItems.map((item) => {
          const isActive = pathname === item.link;

          return (
            <Link
              href={item.link}
              key={item.name}
              className="block"
            >
              <div
                className={`
                  flex
                  items-center
                  w-full
                  gap-3
                  px-4
                  py-3
                  rounded-xl
                  cursor-pointer
                  transition-all
                  duration-200
                  ${
                    isActive
                      ? "bg-fuchsia-700 text-white shadow-lg"
                      : "text-gray-200 hover:bg-gray-600 hover:text-white"
                  }
                `}
              >
                {/* Icon */}
                <span className="flex-shrink-0 text-lg">
                  {item.icon}
                </span>

                {/* Name */}
                <span className="flex-1 text-sm sm:text-base font-medium">
                  {item.name}
                </span>

                {/* Arrow */}
                {isActive && (
                  <FaChevronRight className="text-sm flex-shrink-0" />
                )}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SellerSidebar;