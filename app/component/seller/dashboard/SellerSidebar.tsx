import Image from "next/image";
import mcartlogo4 from "../../../../public/assets/mcartlogo4.png";

import {
  FaHome,
  FaBox,
  FaPlusCircle,
  FaShoppingCart,
  FaMoneyBill,
  FaCog,
} from "react-icons/fa";
import { icons } from "lucide-react";

const SellerSidebar = () => {

const menu = [
  { name : "DashBoard", icon : <FaHome/> },
  {name: "Products", icons : <FaBox/>},
  
]
  return (
    <div className="bg-gray-700 border rounded-2xl p-5 w-64 h-screen">
      
      {/* Logo Section */}
      <div className="flex items-center gap-3">
        <Image src={mcartlogo4} alt="M_Cart Logo" width={50} height={50} />
        <p className="text-white text-2xl font-semibold">Cart</p>
      </div>

      {/* Menu */}
      <div className="mt-10 space-y-4 text-white">

        <div className="flex items-center gap-3 hover:bg-gray-600 p-2 rounded-lg cursor-pointer">
          <FaHome />
          <span>Dashboard</span>
        </div>

        <div className="flex items-center gap-3 hover:bg-gray-600 p-2 rounded-lg cursor-pointer">
          <FaBox />
          <span>Products</span>
        </div>

        <div className="flex items-center gap-3 hover:bg-gray-600 p-2 rounded-lg cursor-pointer">
          <FaPlusCircle />
          <span>Add Product</span>
        </div>

        <div className="flex items-center gap-3 hover:bg-gray-600 p-2 rounded-lg cursor-pointer">
          <FaShoppingCart />
          <span>Orders</span>
        </div>

        <div className="flex items-center gap-3 hover:bg-gray-600 p-2 rounded-lg cursor-pointer">
          <FaMoneyBill />
          <span>Earnings</span>
        </div>

        <div className="flex items-center gap-3 hover:bg-gray-600 p-2 rounded-lg cursor-pointer">
          <FaCog />
          <span>Settings</span>
        </div>

      </div>
    </div>
  );
};

export default SellerSidebar;