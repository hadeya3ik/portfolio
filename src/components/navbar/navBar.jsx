import { Link, useLocation } from "react-router-dom";
import "./navbar.css";

const NavItem = ({ to, children, isActive }) => {
  return (
    <li className="nav-li">
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
      <nav className="top-nav">
        <ul className="top-ul">
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
