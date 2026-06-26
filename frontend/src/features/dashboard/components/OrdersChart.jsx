import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

import { ChevronDown } from "lucide-react";
import { ordersOverviewData } from "../data/dashboardData";

const OrdersChart = () => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 h-full">

      {/* Header */}
      <div className="flex items-center justify-between mb-6">

        <div>
          <h2 className="text-lg font-semibold text-gray-800">
            Orders Overview
          </h2>

          <p className="text-sm text-gray-500">
            Daily orders during Qurbani season
          </p>
        </div>

        <button className="flex items-center gap-2 border border-gray-300 rounded-lg px-4 py-2 text-sm hover:bg-gray-50">
          Last 7 Days
          <ChevronDown size={18} />
        </button>

      </div>

      {/* Chart */}

      <div className="h-[300px]">

        <ResponsiveContainer width="100%" height="100%">

          <LineChart data={ordersOverviewData}>

            <CartesianGrid
              strokeDasharray="3 3"
            />

            <XAxis
              dataKey="day"
            />

            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="orders"
              stroke="#2563EB"
              strokeWidth={3}
              dot={{
                r: 4,
              }}
              activeDot={{
                r: 7,
              }}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
};

export default OrdersChart;