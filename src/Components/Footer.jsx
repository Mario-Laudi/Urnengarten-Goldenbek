import React from "react";
import "./Footer.css"; // Für die Styling-Datei
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <nav className="footer-nav">
        <ul className="nav-list">
          <li className="nav-item">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/About" className="nav-link">
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/Services" className="nav-link">
              Services
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/ContactForm" className="nav-link">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
