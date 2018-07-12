import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => (
  <nav className="navbar is-primary">
    <div className="container">
      <div className="navbar-brand">
        <a href="/" className="navbar-item">
          <strong>Canvas Stuff!</strong>
        </a>
        <Link to="/snake" className="navbar-item">
          Snake
        </Link>
        <Link to="/gravity" className="navbar-item">
          Gravity
        </Link>
      </div>
      <div className="navbar-end">
        <a className="navbar-item" href="https://github.com/SPDUK">
          My Github | SPDUK 🏡
        </a>
      </div>
    </div>
  </nav>
);

export default Navbar;
