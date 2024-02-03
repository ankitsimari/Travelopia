import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClose = ()=>{
    setMenuOpen(false)
  }


  return (
    <nav>
      {/* Title */}
      <Link to="/" className="title" onClick={handleClose}>
        <span className="firstText">T</span>ravelopia
      </Link>

      {/* Hamburger Menu */}
      <div className="menu" onClick={() => setMenuOpen(prev=>!prev)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* All Links */}
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink onClick={handleClose}  to="/about">About</NavLink>
        </li>
        <li>
          <NavLink onClick={handleClose} to="/services">Services</NavLink>
        </li>
        <li>
          <NavLink onClick={handleClose} to="/gallery">Gallery</NavLink>
        </li>
        <li>
          <NavLink onClick={handleClose} to="/booking">Booking</NavLink>
        </li>
        <li>
          <NavLink onClick={handleClose} to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};