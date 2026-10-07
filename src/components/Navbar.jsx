import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import React from "react";
import "./Navbar.css";

function Navbar() {
  const [menu, setMenu] = useState(false);
  const location = useLocation();

  const closeMenu = () => {
    setMenu(false);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const toggleMenu = () => {
    setMenu((prev) => !prev);
  };

  const navItems = [
    {
      path: "/",
      label: "Home",
    },
    {
      path: "/about",
      label: "About",
    },
    {
      path: "/capabilities",
      label: "Capabilities",
    },
    {
      path: "/solar-epc",
      label: "Solar EPC",
    },
    {
      path: "/execution",
      label: "Execution",
    },
    {
      path: "/projects",
      label: "Projects",
    },
    {
      path: "/leadership",
      label: "Leadership",
    },
  ];

  return (
    <>
      {/* TOP INFORMATION BAR */}
      <div className="topline">
        <span>RENEWABLE RISE ENERGY VENTURE</span>
        <span>CBG Plants • Solar EPC • Sustainable Infrastructure</span>
      </div>

      {/* NAVBAR */}
      <header className="nav-wrap">
        <nav className="nav container">

          {/* LOGO */}
          <Link
            to="/"
            className="brand"
            onClick={closeMenu}
            aria-label="RREV home"
          >
            <img
              className="brand-logo"
              src="/assets/brand/rrev-logo.png"
              alt="RREV — Renewable Rise Energy Venture"
              width="404"
              height="150"
            />
          </Link>

          {/* DESKTOP + MOBILE NAVIGATION */}
          <div className={`nav-links ${menu ? "open" : ""}`}>
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={
                  location.pathname === item.path ? "active" : ""
                }
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            ))}

            <Link
              to="/contact"
              className={`nav-cta ${
                location.pathname === "/contact" ? "active-cta" : ""
              }`}
              onClick={closeMenu}
            >
              Start a Conversation
              <span>↗</span>
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            className={`menu-btn ${menu ? "active" : ""}`}
            onClick={toggleMenu}
            aria-label={menu ? "Close menu" : "Open menu"}
            aria-expanded={menu}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

        </nav>
      </header>
    </>
  );
}

export default Navbar;