import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
} from "recharts";

import { distributionSummaryData } from "../data/dashboardData";

const DistributionSummary = () => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 h-full">

      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-800">
          Distribution Summary
        </h2>

        <button className="text-sm text-blue-600 hover:underline">
          View Details
        </button>
      </div>

      {/* Chart */}
      <div className="h-52">

        <ResponsiveContainer width="100%" height="100%">

          <PieChart>

            <Pie
              data={distributionSummaryData}
              dataKey="value"
              innerRadius={55}
              outerRadius={80}
              paddingAngle={3}
            >
              {distributionSummaryData.map((item) => (
                <Cell
                  key={item.name}
                  fill={item.color}
                />
              ))}
            </Pie>

            <Tooltip />

          </PieChart>

        </ResponsiveContainer>

      </div>

      {/* Legend */}

      <div className="space-y-3 mt-5">

        {distributionSummaryData.map((item) => (

          <div
            key={item.name}
            className="flex items-center justify-between"
          >

            <div className="flex items-center gap-2">

              <span
                className="w-3 h-3 rounded-full"
                style={{
                  backgroundColor: item.color,
                }}
              ></span>

              <span className="text-sm text-gray-600">
                {item.name}
              </span>

            </div>

            <span className="font-semibold">
              {item.value}%
            </span>

          </div>

        ))}

      </div>

    </div>
  );
};

export default DistributionSummary;