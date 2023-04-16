import { Home, MyList, AboutUs, Categories } from "../pages";
import { Route } from "../types";

export const routes: Route[] = [
  {
    id: 1,
    to: "/",
    path: "/",
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
    to: "/mylist",
    path: "/mylist",
    Component: MyList,
    name: "My List",
  },
  {
    id: 4,
    to: "/aboutus",
    path: "/aboutus",
    Component: AboutUs,
    name: "About Us",
  },
];
