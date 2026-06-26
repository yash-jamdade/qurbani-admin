import {
  Bell,
  Search,
  RefreshCw,
  Download,
  ChevronDown,
} from "lucide-react";

const Header = () => {
  return (
    <header className="h-20 bg-white border-b border-gray-200 px-8 flex items-center justify-between">

      {/* Left Section */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800">
          Dashboard
        </h1>

        <p className="text-sm text-gray-500 mt-1">
          Welcome back! Here's what's happening today.
        </p>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">

        {/* Search */}
        <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2 w-72">
          <Search size={18} className="text-gray-500" />

          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none ml-2 w-full text-sm"
          />
        </div>

        {/* Date Filter */}
        <button className="flex items-center gap-2 border border-gray-300 rounded-lg px-4 py-2 hover:bg-gray-50 transition">
          <span className="text-sm">
            This Month
          </span>

          <ChevronDown size={18} />
        </button>

        {/* Refresh */}
        <button className="p-2 rounded-lg border border-gray-300 hover:bg-gray-100 transition">
          <RefreshCw size={18} />
        </button>

        {/* Export */}
        <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
          <Download size={18} />

          Export
        </button>

        {/* Notification */}
        <button className="relative p-2 rounded-lg border border-gray-300 hover:bg-gray-100 transition">
          <Bell size={20} />

          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

      </div>

    </header>
  );
};

export default Header;