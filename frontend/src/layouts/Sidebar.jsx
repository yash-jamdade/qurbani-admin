import { UserCircle2, ChevronDown, ChevronRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { sidebarMenu } from "../shared/constants/sidebarMenu";
import SidebarItem from "./SidebarItem";

const QurbaniLogo = () => (
  <svg width="44" height="44" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="100" rx="14" fill="#0f5132"/>
    <rect x="10" y="62" width="80" height="22" rx="2" fill="#c8930a"/>
    <rect x="14" y="44" width="20" height="22" rx="2" fill="#f5c518"/>
    <rect x="40" y="36" width="20" height="30" rx="2" fill="#f5c518"/>
    <rect x="66" y="44" width="20" height="22" rx="2" fill="#f5c518"/>
    <ellipse cx="24" cy="44" rx="11" ry="8" fill="#f5c518"/>
    <ellipse cx="50" cy="35" rx="12" ry="9" fill="#f5c518"/>
    <ellipse cx="76" cy="44" rx="11" ry="8" fill="#f5c518"/>
    <rect x="48" y="14" width="4" height="22" rx="2" fill="#f5c518"/>
    <ellipse cx="50" cy="13" rx="5" ry="5" fill="#f5c518"/>
    <rect x="22" y="68" width="7" height="14" rx="3" fill="#a07208"/>
    <rect x="46" y="68" width="8" height="18" rx="4" fill="#a07208"/>
    <rect x="71" y="68" width="7" height="14" rx="3" fill="#a07208"/>
    <path d="M68,8 A9,9 0 1 1 61,18 A6,6 0 1 0 68,8Z" fill="#f5c518"/>
    <polygon points="82,6 83.5,11 89,11 85,14 86.5,19 82,16 77.5,19 79,14 75,11 80.5,11" fill="#f5c518"/>
  </svg>
);

const Sidebar = ({ isOpen, setIsOpen }) => {
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-20 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside
        className={`
          fixed lg:static inset-y-0 left-0 z-30
          flex flex-col h-screen
          bg-[#022d20] border-r border-[#0b4b35] text-white
          transition-all duration-300 ease-in-out
          ${isOpen ? "w-64" : "w-0 lg:w-16"}
          overflow-hidden
        `}
      >
        {/* Logo */}
        <div className="px-3 py-5 border-b border-[#0b4b35] flex items-center gap-3 min-w-[256px] lg:min-w-0">
          <div className="shrink-0">
            <QurbaniLogo />
          </div>
          <div className={`transition-all duration-300 overflow-hidden ${isOpen ? "opacity-100 w-auto" : "opacity-0 w-0 lg:hidden"}`}>
            <h1 className="text-xl font-bold text-yellow-300 leading-tight whitespace-nowrap">Qurbani</h1>
            <p className="text-xs text-green-300 tracking-wide whitespace-nowrap">Admin Panel</p>
          </div>
        </div>

        {/* Navigation - hidden scrollbar */}
        <nav
          className="flex-1 px-2 py-4 overflow-y-auto"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <style>{`nav::-webkit-scrollbar { display: none; }`}</style>

          {sidebarMenu.map((section) => (
            <div key={section.section} className="mb-1">
              {isOpen && (
                <p className="text-[10px] font-semibold text-green-600 uppercase tracking-widest px-3 py-1.5">
                  {section.section}
                </p>
              )}
              {!isOpen && <div className="my-1 mx-2 border-t border-[#0b4b35]" />}

              {section.items.map((item) => (
                <SidebarItem
                  key={item.path}
                  title={item.title}
                  path={item.path}
                  icon={item.icon}
                  isOpen={isOpen}
                />
              ))}
            </div>
          ))}
        </nav>

        {/* User Profile */}
        <div className="border-t border-[#0b4b35] p-3 shrink-0">
          <div className="flex items-center gap-3">
            <UserCircle2 size={36} className="text-green-300 shrink-0" />
            <div className={`flex-1 overflow-hidden transition-all duration-300 ${isOpen ? "opacity-100" : "opacity-0 w-0 lg:hidden"}`}>
              <h3 className="text-sm font-semibold text-white whitespace-nowrap">Admin User</h3>
              <p className="text-xs text-green-300 whitespace-nowrap">Super Admin</p>
            </div>
            {isOpen && <ChevronDown size={14} className="text-green-400 shrink-0" />}
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;