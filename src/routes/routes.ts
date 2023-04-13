import { Home, Plans, AboutUs, Categories } from "../pages";
import { Route } from "../types";

export const routes: Route[] = [
  {
    id: 1,
    to: "/home",
    path: "/home",
    Component: Home,
    name: "Home",
  },
  {
    id: 2,
    to: "/categories",
    path: "/categories",
    Component: Categories,
    name: "Categories",
  },
  {
    id: 3,
    to: "/plans",
    path: "/plans",
    Component: Plans,
    name: "Plans",
  },
  {
    id: 4,
    to: "/aboutus",
    path: "/aboutus",
    Component: AboutUs,
    name: "About Us",
  },
];
