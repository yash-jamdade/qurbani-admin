import {
  Bell,
  Search,
  RefreshCw,
  Download,
  ChevronDown,
  Menu,
} from "lucide-react";

const Header = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <header className="h-20 bg-white border-b border-gray-200 px-6 flex items-center justify-between gap-4">
      
      {/* Left Section */}
      <div className="flex items-center gap-4">
        {/* Sidebar Toggle Button */}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 rounded-lg text-gray-500 hover:bg-gray-100 hover:text-gray-700 transition-colors shrink-0"
          aria-label="Toggle sidebar"
        >
          <Menu size={22} />
        </button>

        <div>
          <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
          <p className="text-sm text-gray-500 mt-0.5">
            Welcome back! Here's what's happening today.
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-3">
        {/* Search */}
        <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2 w-64">
          <Search size={18} className="text-gray-500 shrink-0" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none ml-2 w-full text-sm"
          />
        </div>

        {/* Date Filter */}
        <button className="flex items-center gap-2 border border-gray-300 rounded-lg px-4 py-2 hover:bg-gray-50 transition whitespace-nowrap">
          <span className="text-sm">This Month</span>
          <ChevronDown size={16} />
        </button>

        {/* Refresh */}
        <button className="p-2 rounded-lg border border-gray-300 hover:bg-gray-100 transition">
          <RefreshCw size={18} />
        </button>

        {/* Export */}
        <button className="flex items-center gap-2 bg-[#0b6b46] text-white px-4 py-2 rounded-lg hover:bg-[#0b6b46] transition whitespace-nowrap">
          <Download size={18} />
          <span className="text-sm font-medium">Export</span>
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