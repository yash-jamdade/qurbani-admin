import { UserCircle2 } from "lucide-react";
import { sidebarMenu } from "../shared/constants/sidebarMenu";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
  return (
    // <aside className="w-64 bg-white border-r border-gray-200 flex flex-col h-screen">
    <aside className="w-64 bg-[#022d20] border-r border-[#0b4b35] flex flex-col h-screen text-white">

      {/* Logo Section */}
      {/* <div className="h-20 flex items-center justify-center border-b border-gray-200"> */}
      <div className="px-5 py-6 border-b border-[#0b4b35]">
        {/*
        <h1 className="text-2xl font-bold text-blue-600">
          Admin Panel
        </h1>
        */}
        <div>
          <h1 className="text-3xl font-bold text-yellow-300">
        Qurbani
          </h1>

          <p className="text-gray-300 text-sm">
        Admin Panel
          </p>
</div>
      </div>

      {/* Navigation */}
      {/* <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
       */}
       <nav className="flex-1 px-3 py-5 overflow-y-auto">
        {sidebarMenu.map((item) => (
          <SidebarItem
            key={item.path}
            title={item.title}
            path={item.path}
            icon={item.icon}
          />
        ))}
      </nav>

      {/* User Profile */}
      {/* <div className="border-t border-gray-200 p-4"> */}
      <div className="border-t border-[#0b4b35] p-4">
        <div className="flex items-center gap-3">
          {/* <UserCircle2 size={42} className="text-gray-500" /> */}
          <UserCircle2 size={42} className="text-green-300" />

          <div>
            {/* <h3 className="text-sm font-semibold"> */}
            <h3 className="text-sm font-semibold text-white">
              Admin User
            </h3>

            {/* <p className="text-xs text-gray-500"> */}
            <p className="text-xs text-green-200">
              Administrator
            </p>
          </div>
        </div>
      </div>

    </aside>
  );
};

export default Sidebar;