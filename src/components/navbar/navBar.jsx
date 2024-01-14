import { Link, useLocation } from "react-router-dom";
import "./navbar.css";
import { MdOutlineLightMode, MdLightMode } from "react-icons/md";
import { useContext } from 'react';
import ModeContext from './../../pages/modeContext';

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
  const { isDarkMode, toggleTheme } = useContext(ModeContext);

  return (
    <>
      <nav>
        <ul id="nav">
          {navItems.map((item) => (
            <NavItem
              key={item.to}
              to={item.to}
              isActive={location.pathname === item.to}
            >
              {item.text}
            </NavItem>
          ))}
          <li id="mode_button" onClick={toggleTheme}>
            {isDarkMode ? (
              <MdLightMode size={40} />) : ( <MdOutlineLightMode size={40} />
            )}
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;