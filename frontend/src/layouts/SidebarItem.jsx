import { NavLink } from "react-router-dom";

const SidebarItem = ({ title, path, icon: Icon }) => {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
          isActive
            ? "bg-[#0b6b46] text-white shadow-md"
            : "text-green-100 hover:bg-[#084e36] hover:text-white"
        }`
      }
    >
      <Icon size={20} />
      <span className="text-sm font-medium">{title}</span>
    </NavLink>
  );
};

export default SidebarItem;