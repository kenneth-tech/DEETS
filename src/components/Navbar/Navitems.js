import React from "react";
import { Link } from "react-router-dom";

function navItems() {
  return (
    <ul className="nav-menu">
      <li className="nav-item">
        <Link to="/" className="nav-links">
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/features" className="nav-links">
          Features
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/commands" className="nav-links">
          Commands
        </Link>
      </li>
      <li className="nav-item paypal">
        <Link to="/commands" className="nav-links">
          <i class="fab fa-paypal"></i> Paypal Me
        </Link>
      </li>
    </ul>
  );
}

export default navItems;
