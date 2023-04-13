import { NavLink } from "react-router-dom";
import { routes } from "../routes/routes";

const Navbar = () => {
  return (
    <nav>
      <ul>
        {routes.map((route) => {
          const { id, to, name } = route;
          return (
            <li key={id}>
              <NavLink to={to}>{name}</NavLink>
            </li>
          );
        })}
      </ul>
      {/* <NavigationLinks /> */}
    </nav>
  );
};

export default Navbar;
