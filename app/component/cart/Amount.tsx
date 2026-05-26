const Amount = () => {
  return (
    <div className="w-full">
      <div className="bg-white rounded-xl shadow-md p-5 sticky top-5">

        {/* Heading */}
        <div className="border-b pb-3 mb-4">
          <h2 className="text-lg font-semibold text-gray-800">
            Price Details
          </h2>
        </div>

        {/* Price Details */}
        <div className="space-y-4">

          <div className="flex items-center justify-between text-sm sm:text-base">
            <p className="text-gray-600">MRP</p>
            <p className="font-medium">₹29,800</p>
          </div>

          <div className="flex items-center justify-between text-sm sm:text-base">
            <p className="text-gray-600">Delivery Fee</p>
            <p className="font-medium text-green-600">FREE</p>
          </div>

          <div className="flex items-center justify-between text-sm sm:text-base">
            <p className="text-gray-600">Platform Fee</p>
            <p className="font-medium">₹50</p>
          </div>

          <div className="flex items-center justify-between text-sm sm:text-base">
            <p className="text-gray-600">Discount</p>
            <p className="font-medium text-green-600">- ₹2,000</p>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t my-5"></div>

        {/* Total */}
        <div className="flex items-center justify-between mb-5">
          <p className="text-lg font-semibold text-gray-800">
            Total Amount
          </p>

          <p className="text-xl font-bold text-black">
            ₹27,850
          </p>
        </div>

        {/* Savings */}
        <div className="bg-green-100 text-green-700 text-sm rounded-lg p-3 mb-5">
          You saved ₹2,000 on this order 🎉
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