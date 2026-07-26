const OrderStatus = () => {
  const orderStatus = [
    {
      name: "Delivered",
      count: 8,
      percentage: 66,
      color: "#22c55e",
    },
    {
      name: "In Transit",
      count: 2,
      percentage: 17,
      color: "#f59e0b",
    },
    {
      name: "Pending",
      count: 1,
      percentage: 8,
      color: "#ec4899",
    },
    {
      name: "Cancelled",
      count: 1,
      percentage: 8,
      color: "#f43f5e",
    },
  ];

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5">
      {/* HEADER */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold text-gray-800">
          Order Status Overview
        </h2>
      </div>

      {/* CONTENT */}
      <div className="flex items-center justify-center gap-8 mt-6">
        {/* DONUT CHART */}
        <div className="relative w-40 h-40 shrink-0">
          {/* OUTER DONUT */}
          <div
            className="w-full h-full rounded-full shadow-inner"
            style={{
              background:
                "conic-gradient(#22c55e 0% 66%, #f59e0b 66% 83%, #ec4899 83% 91%, #f43f5e 91% 100%)",
            }}
          >
            {/* INNER CIRCLE */}
            <div className="absolute inset-[18px] bg-white rounded-full flex flex-col items-center justify-center shadow-sm">
              <span className="text-3xl font-bold text-gray-800">
                12
              </span>

              <span className="text-xs text-gray-500 mt-1">
                Total Orders
              </span>
            </div>
          </div>
        </div>

        {/* STATUS LIST */}
        <div className="flex-1 space-y-4">
          {orderStatus.map((status) => (
            <div
              key={status.name}
              className="flex items-center justify-between"
            >
              {/* STATUS NAME */}
              <div className="flex items-center gap-2">
                <span
                  className="w-2.5 h-2.5 rounded-full"
                  style={{
                    backgroundColor: status.color,
                  }}
                />

                <span className="text-sm font-medium text-gray-600">
                  {status.name}
                </span>
              </div>

              {/* COUNT */}
              <span className="text-sm font-semibold text-gray-700">
                {status.count} ({status.percentage}%)
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrderStatus;