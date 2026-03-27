"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", sales: 14000 },
  { name: "Feb", sales: 27000 },
  { name: "Mar", sales: 23000 },
  { name: "Apr", sales: 38000 },
  { name: "May", sales: 25000 },
  { name: "Jun", sales: 35000 },
];

const SellerGraph = () => {
  return (
    <div className="mt-4 sm:mt-8 lg:mt-10 bg-white rounded-2xl shadow-sm border p-3 sm:p-5">
      
      {/* Title */}
      <h2 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-700 mb-3 sm:mb-4">
        Sales Overview
      </h2>

      {/* Chart */}
      <div className="w-full h-[100px] sm:h-[220px] lg:h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            
            {/* Grid */}
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />

            {/* X Axis */}
            <XAxis
              dataKey="name"
              tick={{ fontSize: 15, fill: "#6b7280" }}
              axisLine={false}
              tickLine={false}
            />

            {/* Y Axis */}
            <YAxis
              tick={{ fontSize: 15, fill: "#6b7280" }}
              axisLine={false}
              tickLine={false}
            />

            {/* Tooltip */}
            <Tooltip
              contentStyle={{
                borderRadius: "10px",
                border: "none",
                boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                fontSize: "12px",
              }}
            />

            {/* Line */}
            <Line
              type="monotone"
              dataKey="sales"
              stroke="#3b82f6"
              strokeWidth={2.5}
              dot={{ r: 3 }}
              activeDot={{ r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SellerGraph;