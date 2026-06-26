import { Star } from "lucide-react";
import { topVendorsData } from "../data/dashboardData";

const TopVendors = () => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 h-full">

      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-800">
          Top Vendors
        </h2>

        <button className="text-sm text-blue-600 hover:underline">
          View All
        </button>
      </div>

      {/* Vendor List */}
      <div className="space-y-5">

        {topVendorsData.map((vendor) => (

          <div
            key={vendor.id}
            className="flex items-center justify-between border-b border-gray-100 pb-4 last:border-0 last:pb-0"
          >

            <div>

              <h3 className="font-semibold text-gray-800">
                {vendor.name}
              </h3>

              <p className="text-sm text-gray-500 mt-1">
                {vendor.orders} Orders
              </p>

            </div>

            <div className="text-right">

              <p className="font-semibold text-gray-800">
                {vendor.revenue}
              </p>

              <div className="flex items-center justify-end gap-1 mt-1">
                <Star
                  size={15}
                  className="fill-yellow-400 text-yellow-400"
                />

                <span className="text-sm text-gray-600">
                  {vendor.rating}
                </span>
              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
};

export default TopVendors;