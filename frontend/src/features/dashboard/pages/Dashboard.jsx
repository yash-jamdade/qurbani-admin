import {
  Package,
  DollarSign,
  Beef,
  CheckCircle2,
  Gift,
  Users,
} from "lucide-react";

import StatCard from "../components/StatCard";
import OrdersChart from "../components/OrdersChart";
import OrderStatus from "../components/OrderStatus";
import RecentOrders from "../components/RecentOrders";
import AnimalSummary from "../components/AnimalSummary";
import TopVendors from "../components/TopVendors";
import DistributionSummary from "../components/DistributionSummary";
import PaymentOverview from "../components/PaymentOverview";

const Dashboard = () => {
  const stats = [
    {
      title: "Total Orders",
      value: "2,458",
      percentage: "+18.6%",
      description: "vs last period",
      icon: Package,
      iconBgColor: "bg-green-100",
      iconColor: "text-green-700",
    },
    {
      title: "Total Revenue",
      value: "SAR 623,450",
      percentage: "+23.4%",
      description: "vs last period",
      icon: DollarSign,
      iconBgColor: "bg-green-100",
      iconColor: "text-green-700",
    },
    {
      title: "Animals Assigned",
      value: "1,842",
      percentage: "+15.3%",
      description: "vs last period",
      icon: Beef,
      iconBgColor: "bg-orange-100",
      iconColor: "text-orange-600",
    },
    {
      title: "Qurbani Completed",
      value: "1,523",
      percentage: "+20.1%",
      description: "vs last period",
      icon: CheckCircle2,
      iconBgColor: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      title: "Distributions",
      value: "12,540",
      percentage: "+17.2%",
      description: "vs last period",
      icon: Gift,
      iconBgColor: "bg-purple-100",
      iconColor: "text-purple-600",
    },
    {
      title: "Active Users",
      value: "5,632",
      percentage: "+12.7%",
      description: "vs last period",
      icon: Users,
      iconBgColor: "bg-cyan-100",
      iconColor: "text-cyan-600",
    },
  ];

  return (
    <div className="space-y-6">

      {/* Dashboard Heading */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">
          Dashboard
        </h1>

        <p className="text-gray-500 mt-1">
          Welcome back! Here's what's happening with your platform.
        </p>
      </div>

      {/* Statistics Cards */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6">
        {stats.map((item) => (
          <StatCard
            key={item.title}
            title={item.title}
            value={item.value}
            percentage={item.percentage}
            description={item.description}
            icon={item.icon}
            iconBgColor={item.iconBgColor}
            iconColor={item.iconColor}
          />
        ))}
      </div>

      {/* Row 2 */}
      <div className="grid grid-cols-12 gap-6">

        

        <div className="col-span-12 lg:col-span-6 h-140">
        <OrdersChart />
      </div>

        <div className="col-span-12 lg:col-span-3 h-140">
        <OrderStatus />
      </div>
        
        {/* <div className="col-span-12 lg:col-span-3 h-110 rounded-xl border border-gray-200 bg-white p-6">
          Recent Orders
        </div> */}

        <div className="col-span-12 lg:col-span-3 h-140">
        <RecentOrders />
        </div>
        

      </div>

      {/* Row 3 */}
      <div className="grid grid-cols-12 gap-6">

        {/* <div className="col-span-12 lg:col-span-4 h-72 rounded-xl border border-gray-200 bg-white p-6">
          Animal Summary
        </div> */}

        <div className="col-span-12 lg:col-span-4">
        <AnimalSummary />
        </div>

        {/* <div className="col-span-12 lg:col-span-4 h-72 rounded-xl border border-gray-200 bg-white p-6">
          Top Vendors
        </div> */}
        <div className="col-span-12 lg:col-span-4">
        <TopVendors />
        </div>

        {/* <div className="col-span-12 lg:col-span-4 h-72 rounded-xl border border-gray-200 bg-white p-6">
          Distribution Summary
        </div> */}
        <div className="col-span-12 lg:col-span-4">
        <DistributionSummary />
        </div>

      </div>

      {/* Payment Overview */}
      {/* <div className="rounded-xl border border-gray-200 bg-white p-6 h-80">
        Payment Overview
      </div> */}
      <PaymentOverview />

    </div>
  );
};

export default Dashboard;