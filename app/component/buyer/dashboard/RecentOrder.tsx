const RecentOrder = () => {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-4 sm:p-5">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div>
          <h2 className="text-lg sm:text-xl font-bold text-gray-800">
            Recent Orders
          </h2>

          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            Track your recent purchases
          </p>
        </div>

        <button className="text-sm font-semibold text-purple-600 hover:text-purple-700 hover:underline transition">
          View All
        </button>
      </div>

      {/* Table Header */}
      <div className="hidden md:grid grid-cols-12 gap-4 px-4 py-3 bg-gray-50 rounded-lg text-xs font-semibold text-gray-500 uppercase tracking-wide">
        <div className="col-span-5">Product</div>

        <div className="col-span-2">Price</div>

        <div className="col-span-2">Status</div>

        <div className="col-span-2">Date</div>

        <div className="col-span-1 text-center">View</div>
      </div>


      {/* Orders */}
      <div className="mt-2 divide-y divide-gray-100">
        

      </div>
    </div>
  );
};

export default RecentOrder;
