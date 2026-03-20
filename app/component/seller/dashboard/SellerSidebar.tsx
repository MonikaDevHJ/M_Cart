import Image from "next/image";
import Mcartlogo1 from "../../../../public/assets/Mcartlogo1.png";
import mcartlogo2 from "../../../../public/assets/mcartlogo2.png"

const SellerSidebar = () => {
  return (
    <div className="bg-gray-700 border rounded-2xl p-4 w-64 h-screen">
      
      {/* Logo Section */}
      <div className="flex items-center gap-2">
        <Image 
          src={mcartlogo2} 
          alt="M_Cart Logo" 
          width={40} 
          height={40} 
        />

        <p className="text-white text-lg font-semibold">M_Cart</p>
      </div>

      {/* Menu */}
      <div className="mt-10 space-y-4 text-white">

        <p className="hover:bg-gray-600 p-2 rounded-lg cursor-pointer">
          Dashboard
        </p>

        <p className="hover:bg-gray-600 p-2 rounded-lg cursor-pointer">
          Products
        </p>

        <p className="hover:bg-gray-600 p-2 rounded-lg cursor-pointer">
          Add Product
        </p>

        <p className="hover:bg-gray-600 p-2 rounded-lg cursor-pointer">
          Earnings
        </p>

        <p className="hover:bg-gray-600 p-2 rounded-lg cursor-pointer">
          Settings
        </p>

      </div>
    </div>
  );
};

export default SellerSidebar;