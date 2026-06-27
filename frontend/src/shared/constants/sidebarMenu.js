import {
  LayoutDashboard,
  ShoppingBag,
  PawPrint,
  Users,
  Truck,
  FileBarChart2,
  Settings,
} from "lucide-react";

export const sidebarMenu = [
  {
    title: "Dashboard",
    path: "/",
    icon: LayoutDashboard,
  },
  {
    title: "Orders",
    path: "/orders",
    icon: ShoppingBag,
  },
  {
    title: "Animals",
    path: "/animals",
    icon: PawPrint,
  },
  {
    title: "Vendors",
    path: "/vendors",
    icon: Truck,
  },
  {
    title: "Users",
    path: "/users",
    icon: Users,
  },
  {
    title: "Reports",
    path: "/reports",
    icon: FileBarChart2,
  },
  {
    title: "Settings",
    path: "/settings",
    icon: Settings,
  },
];