import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
} from "recharts";

import { orderStatusData } from "../data/dashboardData";

const OrderStatus = () => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 h-full">

      <h2 className="text-lg font-semibold text-gray-800 mb-6">
        Order Status
      </h2>

      <div className="h-56">

        <ResponsiveContainer width="100%" height="100%">
          <PieChart>

            <Pie
              data={orderStatusData}
              dataKey="value"
              innerRadius={60}
              outerRadius={85}
              paddingAngle={3}
            >
              {orderStatusData.map((item) => (
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

      <div className="space-y-3 mt-4">

        {orderStatusData.map((item) => (

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

export default OrderStatus;