import { NavLink } from "react-router-dom";

const SidebarItem = ({ title, path, icon: Icon, isOpen }) => {
  return (
    <NavLink
      to={path}
      title={!isOpen ? title : undefined}
      className={({ isActive }) =>
        `flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 mb-0.5 group relative
        ${isActive
          ? "bg-[#0b6b46] text-white"
          : "text-green-100 hover:bg-[#084e36] hover:text-white"
        }
        ${!isOpen ? "justify-center lg:justify-center" : ""}`
      }
    >
      <Icon size={19} className="shrink-0" />
      {isOpen && (
        <span className="text-sm font-medium whitespace-nowrap">{title}</span>
      )}

      {/* Tooltip when collapsed */}
      {!isOpen && (
        <div className="absolute left-full ml-2 px-2 py-1 bg-[#0b6b46] text-white text-xs rounded-md
          opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap z-50 transition-opacity">
          {title}
        </div>
      )}
    </NavLink>
  );
};

export default SidebarItem;