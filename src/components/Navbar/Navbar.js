import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navitems from './Navitems';
import '../../css/Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const handleIcon = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            <img className="logo" src="/img/Deetslogo.png" /> Deets
          </Link>
          <Navitems />
          <div className="menu-icon" onClick={handleIcon}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
        </div>
      </nav>
      <div className={click ? 'mobile-menu show' : 'mobile-menu'}>
        <Navitems />
      </div>
    </>
  );
}

export default Navbar;
