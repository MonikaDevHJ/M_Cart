const OrderStatus = () => {

   



  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <p className="text-lg font-bold text-gray-800">Order Status Overview</p>
      </div>

      {/* Context */}
      <div className="flex item-center justify-center gap-8 mt-6">
        {/* Donut Chart */}
        <div className="relative w-40 h-40 shrink-0">
          {/* Outer Dount */}
          <div
            className="w-full h-full rounded-full shadow-inner"
            style={{
              background:
                "conic-gradient(#22c55e 0% 66%, #f59e0b 66% 83%, #ec4899 83% 91%, #f43f5e 91% 100%)"
            }}
          >
            {/* Inner Circle */}
            <div className="absolute inset-[18px] bg-white rounded-full flex flex-col items-center justify-center shadow-sm">
              <span className="text-3xl font-bold text-gray-800">12</span>

              <span className="text-xs text-gray-500 mt-1">Total Orders</span>
            </div>
          </div>
        </div>
      </div>


      {/* Status List */}
      <div className="flex-1 space-y-4">


      </div>
    </div>
  );
};

export default OrderStatus;
