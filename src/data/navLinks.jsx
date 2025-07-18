import {
  LucideBanana,
  LucideBean,
  LucideCarrot,
  LucideLayoutDashboard,
  LucideUsers,
} from "lucide-react";

const iconStyles = "size-5";

export const navLinks = [
  {
    name: "داشبورد",
    icon: <LucideLayoutDashboard className={iconStyles} />,
    path: "/dashboard",
  },
  {
    name: "کاربران",
    icon: <LucideUsers className={iconStyles} />,
    path: "/users",
  },

  // FIXME: Change following items
  {
    name: "تستی",
    icon: <LucideBean className={iconStyles} />,
    path: "/test",
  },
  {
    name: "تستی",
    icon: <LucideBanana className={iconStyles} />,
    path: "/test",
  },
  {
    name: "تستی",
    icon: <LucideCarrot className={iconStyles} />,
    path: "/test",
  },
];
