// navigation
type SubMenuItem = {
  id: number;
  label: string;
  href: string;
};

type NavLink = {
  id: string;
  href: string;
  key: string;
  label: string;
  subMenu?: SubMenuItem[];
};

export const navLinks: NavLink[] = [
  {
    id: "1",
    href: "/",
    key: "home",
    label: "Home",
  },
  {
    id: "2",
    href: "/collection",
    key: "Shop",
    label: "Shop",
  },
]
