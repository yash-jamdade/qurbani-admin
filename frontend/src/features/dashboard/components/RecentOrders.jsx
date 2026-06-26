import { recentOrdersData } from "../data/dashboardData";

const getStatusStyle = (status) => {
  switch (status) {
    case "Completed":
      return "bg-green-100 text-green-700";
    case "Processing":
      return "bg-blue-100 text-blue-700";
    case "Pending":
      return "bg-yellow-100 text-yellow-700";
    default:
      return "bg-gray-100 text-gray-700";
  }
};

const RecentOrders = () => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 h-full">

      <div className="flex items-center justify-between mb-5">
        <h2 className="text-lg font-semibold">
          Recent Orders
        </h2>

        <button className="text-blue-600 text-sm font-medium hover:underline">
          View All
        </button>
      </div>

      <div className="space-y-4">

        {recentOrdersData.map((order) => (

          <div
            key={order.id}
            className="border rounded-lg p-4 hover:bg-gray-50 transition"
          >

            <div className="flex justify-between">

              <div>

                <h3 className="font-semibold">
                  {order.id}
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  {order.customer}
                </p>

                <p className="text-sm text-gray-500">
                  {order.animal}
                </p>

              </div>

              <div className="text-right">

                <h3 className="font-semibold">
                  {order.amount}
                </h3>

                <span
                  className={`inline-block mt-2 px-3 py-1 rounded-full text-xs font-medium ${getStatusStyle(
                    order.status
                  )}`}
                >
                  {order.status}
                </span>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
};

export default RecentOrders;