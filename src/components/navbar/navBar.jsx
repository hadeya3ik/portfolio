import { Link, useLocation } from "react-router-dom";
import "./navbar.css";

const NavItem = ({ to, children, isActive }) => {
  return (
    <li id="nav-li">
      <Link to={to} className={isActive ? "active" : ""}>
        {children}
      </Link>
    </li>
  );
};

const navItems = [
  { to: "/", text: "home" },
  { to: "/play", text: "play" }
];

const NavBar = () => {
  const location = useLocation();
  return (
    <>
      <nav>
        <ul id="nav">
          {navItems.map((item) => (
            <NavItem
              key={item.to}
              to={item.to}
              isActive={location.pathname === item.to}>
              {item.text}
            </NavItem>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
