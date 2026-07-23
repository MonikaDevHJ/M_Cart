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
      
    </div>
  );
};

export default RecentOrder;
