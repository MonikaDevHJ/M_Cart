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
    { name: "DashBoard", icon: <FaHome /> },
    { name: "Products", icon: <FaBox /> },
    { name: "Add Products", icon: <FaPlusCircle /> },
    { name: "Orders", icon: <FaShoppingCart /> },
    { name: "Earnings", icon: <FaMoneyBill /> },
    { name: "Settings", icon: <FaCog /> }
  ];
  return (
    <div className="bg-gray-700 border rounded-2xl p-5 w-64 h-screen">
      {/* Logo Section */}
      <Link href="/">
        <div className="flex items-center gap-3">
          <Image src={mcartlogo4} alt="M_Cart Logo" width={50} height={50} />

          <p className="text-white text-2xl font-semibold">Cart</p>
        </div>
      </Link>

      <div className=" mt-5">
        {/* Menu */}
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3 hover:bg-fuchsia-700 p-2 rounded-lg cursor-pointer"
          >
            {item.icon}
            <span className="text-xl">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SellerSidebar;
