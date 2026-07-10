"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const Amount = () => {
  const cartItems = useSelector(
    (state: RootState) => state.cart.items
  );

  // Calculate Total MRP
  const totalMRP = cartItems.reduce((total: number, item: any) => {
    return total + item.product.productPrice * item.quantity;
  }, 0);

  const deliveryFee = 0;
  const platformFee = 50;
  const discount = 2000;

  const totalAmount = totalMRP + deliveryFee + platformFee - discount;
  return (
    <div className="w-full">
      <div className="bg-white rounded-xl shadow-md p-5 sticky top-5">
        {/* Heading */}
        <div className="border-b pb-3 mb-4">
          <h2 className="text-lg font-semibold text-gray-800">Price Details</h2>
        </div>

        {/* Price Details */}
        <div className="space-y-4">
          {/* MRP */}
          <div className="flex items-center justify-between text-sm sm:text-base">
            <p className="text-gray-600">MRP</p>
            <p className="font-medium">₹{totalMRP}</p>
          </div>

          {/* Delivery Fee */}
          <div className="flex items-center justify-between text-sm sm:text-base">
            <p className="text-gray-600">Delivery Fee</p>
            <p className="font-medium text-green-600">
              {deliveryFee === 0 ? "FREE" : `₹${deliveryFee}`}
            </p>
          </div>

          {/* Platform Fee */}
          <div className="flex items-center justify-between text-sm sm:text-base">
            <p className="text-gray-600">Platform Fee</p>
            <p className="font-medium">₹{platformFee}</p>
          </div>

          {/* Discount */}
          <div className="flex items-center justify-between text-sm sm:text-base">
            <p className="text-gray-600">Discount</p>
            <p className="font-medium text-green-600">- ₹{discount}</p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t my-5"></div>

        {/* Total */}
        <div className="flex items-center justify-between mb-5">
          <p className="text-lg font-semibold text-gray-800">Total Amount</p>

          <p className="text-xl font-bold text-black">₹{totalAmount}</p>
        </div>

        {/* Savings */}
        <div className="bg-green-100 text-green-700 text-sm rounded-lg p-3 mb-5">
          You saved ₹{discount} on this order 🎉
        </div>

        {/* Button */}
        <button className="w-full bg-black hover:bg-gray-800 transition-all duration-300 text-white py-3 rounded-lg font-medium">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Amount;
