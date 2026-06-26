import {
  LayoutDashboard,
  ShoppingBag,
  PawPrint,
  Truck,
  Users,
  Share2,
  Video,
  CalendarClock,
  MapPin,
  QrCode,
  CreditCard,
  RefreshCcw,
  DollarSign,
  Wallet,
  Bell,
  FileText,
  MessageSquare,
  BarChart2,
  LineChart,
  Settings,
  Shield,
  Activity,
} from "lucide-react";

export const sidebarMenu = [
  {
    section: "Management",
    items: [
      { title: "Dashboard", path: "/", icon: LayoutDashboard },
      { title: "Orders", path: "/orders", icon: ShoppingBag },
      { title: "Animals", path: "/animals", icon: PawPrint },
      { title: "Vendors", path: "/vendors", icon: Truck },
      { title: "Users", path: "/users", icon: Users },
      { title: "Distributions", path: "/distributions", icon: Share2 },
    ],
  },
  {
    section: "Operations",
    items: [
      { title: "Live Qurbani", path: "/live-qurbani", icon: Video },
      { title: "Slots & Scheduling", path: "/slots", icon: CalendarClock },
      { title: "Locations", path: "/locations", icon: MapPin },
      { title: "QR / Barcode", path: "/qr-barcode", icon: QrCode },
    ],
  },
  {
    section: "Payments",
    items: [
      { title: "Transactions", path: "/transactions", icon: CreditCard },
      { title: "Refunds", path: "/refunds", icon: RefreshCcw },
      { title: "Payouts", path: "/payouts", icon: DollarSign },
      { title: "Payment Methods", path: "/payment-methods", icon: Wallet },
    ],
  },
  {
    section: "Content & Communication",
    items: [
      { title: "Notifications", path: "/notifications", icon: Bell },
      { title: "Templates", path: "/templates", icon: FileText },
      { title: "Support Messages", path: "/support", icon: MessageSquare },
    ],
  },
  {
    section: "Reports & Analytics",
    items: [
      { title: "Reports", path: "/reports", icon: BarChart2 },
      { title: "Analytics", path: "/analytics", icon: LineChart },
    ],
  },
  {
    section: "Settings",
    items: [
      { title: "System Settings", path: "/system-settings", icon: Settings },
      { title: "Roles & Permissions", path: "/roles", icon: Shield },
      { title: "Activity Logs", path: "/activity-logs", icon: Activity },
    ],
  },
];