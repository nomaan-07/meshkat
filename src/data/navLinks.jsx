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
    id: 1,
    name: "داشبورد",
    icon: <LucideLayoutDashboard className={iconStyles} />,
    path: "/dashboard",
  },
  {
    id: 2,
    name: "کاربران",
    icon: <LucideUsers className={iconStyles} />,
    path: "/users",
  },

  // FIXME: Change following items
  {
    id: 3,
    name: "تستی",
    icon: <LucideBean className={iconStyles} />,
    path: "/test",
  },
  {
    id: 4,
    name: "تستی",
    icon: <LucideBanana className={iconStyles} />,
    path: "/test",
  },
  {
    id: 5,
    name: "تستی",
    icon: <LucideCarrot className={iconStyles} />,
    path: "/test",
  },
];
