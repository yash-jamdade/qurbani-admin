import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

import {
  paymentOverviewData,
  paymentTrendData,
  recentTransactions,
} from "../data/dashboardData";

const PaymentOverview = () => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">

      {/* Header */}

      <div className="flex items-center justify-between mb-8">

        <div>

          <h2 className="text-xl font-semibold">
            Payment Overview
          </h2>

          <p className="text-gray-500 text-sm">
            Revenue and payment statistics
          </p>

        </div>

      </div>

      {/* Summary */}

      <div className="grid grid-cols-4 gap-5 mb-8">

        <div className="rounded-lg bg-gray-50 p-4">
          <p className="text-gray-500 text-sm">
            Total Revenue
          </p>

          <h3 className="text-2xl font-bold mt-2">
            {paymentOverviewData.totalRevenue}
          </h3>
        </div>

        <div className="rounded-lg bg-gray-50 p-4">
          <p className="text-gray-500 text-sm">
            Payments
          </p>

          <h3 className="text-2xl font-bold mt-2">
            {paymentOverviewData.totalPayments}
          </h3>
        </div>

        <div className="rounded-lg bg-gray-50 p-4">
          <p className="text-gray-500 text-sm">
            Success Rate
          </p>

          <h3 className="text-2xl font-bold mt-2">
            {paymentOverviewData.successRate}
          </h3>
        </div>

        <div className="rounded-lg bg-gray-50 p-4">
          <p className="text-gray-500 text-sm">
            Pending
          </p>

          <h3 className="text-2xl font-bold mt-2">
            {paymentOverviewData.pendingPayments}
          </h3>
        </div>

      </div>

      {/* Chart */}

      <div className="h-72 mb-8">

        <ResponsiveContainer width="100%" height="100%">

          <AreaChart data={paymentTrendData}>

            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="month" />

            <YAxis />

            <Tooltip />

            <Area
              type="monotone"
              dataKey="amount"
              stroke="#2563EB"
              fill="#BFDBFE"
            />

          </AreaChart>

        </ResponsiveContainer>

      </div>

      {/* Transactions */}

      <div>

        <h3 className="font-semibold text-lg mb-4">
          Recent Transactions
        </h3>

        <div className="space-y-3">

          {recentTransactions.map((transaction) => (

            <div
              key={transaction.id}
              className="flex justify-between border rounded-lg p-4"
            >

              <div>

                <p className="font-medium">
                  {transaction.customer}
                </p>

                <p className="text-sm text-gray-500">
                  {transaction.id}
                </p>

              </div>

              <div className="text-right">

                <p className="font-semibold">
                  {transaction.amount}
                </p>

                <p
                  className={`text-sm ${
                    transaction.status === "Success"
                      ? "text-green-600"
                      : "text-yellow-600"
                  }`}
                >
                  {transaction.status}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
};

export default PaymentOverview;