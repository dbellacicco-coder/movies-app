import { Home, MyList } from "../pages";
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
    to: "/mylist",
    path: "/mylist",
    Component: MyList,
    name: "My List",
  },
];
