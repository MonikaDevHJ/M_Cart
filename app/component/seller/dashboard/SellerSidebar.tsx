import Image from "next/image";
import mcartlogo4 from "../../../../public/assets/mcartlogo4.png";
import Link from "next/link";

import {
  FaHome,
  FaBox,
  FaPlusCircle,
  FaShoppingCart,
  FaMoneyBill,
  FaCog
} from "react-icons/fa";

const SellerSidebar = () => {
  const menuItems = [
    { name: "DashBoard", icon: <FaHome />, link: "/seller/dashboard" },
    {
      name: "Add Products",
      icon: <FaPlusCircle />,
      link: "/seller/addproduct"
    },
    { name: "Products", icon: <FaBox />, link: "/seller/products" },
    { name: "Orders", icon: <FaShoppingCart />, link: "/seller/orders" },
    { name: "Earnings", icon: <FaMoneyBill />, link: "/seller/earnings" },
    { name: "Settings", icon: <FaCog />, link: "/seller/settings" }
  ];
  return (
    <div
      className="
        bg-gray-700 text-white 
        h-full md:h-screen lg:h-screen
        w-full md:w-60 lg:w-72 
        rounded-2xl p-4 sm:p-5
      "
    >
      {/* Logo */}
      <Link href="/">
        <div className="flex items-center gap-2 sm:gap-3">
          <Image
            src={mcartlogo4}
            alt="M_Cart Logo"
            width={40}
            height={40}
            className="sm:w-12 sm:h-12"
          />
          <p className="text-lg sm:text-xl lg:text-2xl font-semibold">Cart</p>
        </div>
      </Link>

      {/* Menu */}
      <div className="mt-5 space-y-2">
        {menuItems.map((item, index) => (
          <Link href={item.link} key={index}>
            <div className="flex items-center gap-3 p-2 rounded-lg cursor-pointer hover:bg-fuchsia-700">
              <span className="text-lg">{item.icon}</span>
              <span>{item.name}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SellerSidebar;
