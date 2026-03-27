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
    <div className="mt-10 bg-white rounded-2xl shadow-sm border p-5">
      
      {/* Title */}
      <h2 className="text-lg font-semibold text-gray-700 mb-4">
        Sales Overview
      </h2>

      {/* Chart */}
      <div className="w-full h-[250px]">
        <ResponsiveContainer>
          <LineChart data={data}>
            
            {/* Grid (light lines like image) */}
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />

            {/* X Axis */}
            <XAxis
              dataKey="name"
              tick={{ fontSize: 12, fill: "#6b7280" }}
              axisLine={false}
              tickLine={false}
            />

            {/* Y Axis */}
            <YAxis
              tick={{ fontSize: 12, fill: "#6b7280" }}
              axisLine={false}
              tickLine={false}
            />

            {/* Tooltip */}
            <Tooltip
              contentStyle={{
                borderRadius: "10px",
                border: "none",
                boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
              }}
            />

            {/* Line */}
            <Line
              type="monotone"
              dataKey="sales"
              stroke="#3b82f6"
              strokeWidth={3}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SellerGraph;