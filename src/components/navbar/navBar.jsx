import { Link, useLocation } from "react-router-dom";
import "./navbar.css";
import { MdOutlineLightMode, MdLightMode } from "react-icons/md";
import { useState } from "react";
import { useEffect } from "react";

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
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    document.body.classList.toggle('dark-theme', isDarkMode);
    document.body.classList.toggle('light-theme', !isDarkMode);

    // Save the preference to localStorage
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

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
          <li onClick={toggleTheme}>
            {isDarkMode ? (
              <MdLightMode size={40} />
            ) : (
              <MdOutlineLightMode size={40} />
            )}
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;