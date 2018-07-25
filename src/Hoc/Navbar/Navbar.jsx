import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

// toggle navbar
const toggleBurger = () => {
  const burgerIcon = document.getElementById('burger');
  const dropMenu = document.getElementById('navMenu');
  if (dropMenu.classList.contains('is-active')) {
    dropMenu.classList.add('is-closed');
  } else {
    dropMenu.classList.remove('is-closed');
  }
  burgerIcon.classList.toggle('is-active');
  dropMenu.classList.toggle('is-active');
};

const Navbar = () => (
  <nav className="navbar is-white">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/projects" className="navbar-item">
          <strong>Quick Projects!</strong>
        </Link>
        <a
          id="burger"
          role="button"
          tabIndex="-1"
          onKeyDown={toggleBurger}
          className="navbar-burger"
          data-target="navMenu"
          aria-label="menu"
          aria-expanded="false"
          onClick={toggleBurger}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>
      {/* if the menu is clicked (including any element inside it) it will toggle it closed */}
      {/* eslint-disable-next-line */}
      <div
        onClick={toggleBurger}
        tabIndex="-1"
        role="button"
        id="navMenu"
        className="navbar-menu"
      >
        <Link to="/snake" className="navbar-item">
          Snake{' '}
          <span aria-label="snake" role="img">
            🐍
          </span>
        </Link>
        <Link to="/gravity" className="navbar-item">
          Gravity{' '}
          <span aria-label="gravity" role="img">
            🌌
          </span>
        </Link>
        <Link to="/bouncingballs" className="navbar-item">
          Bouncing Balls{' '}
          <span aria-label="gravity" role="img">
            🔴
          </span>
        </Link>
        <Link to="/visualizedsort" className="navbar-item">
          Visualized Sort{' '}
          <span aria-label="gravity" role="img">
            📈
          </span>
        </Link>
        <div className="navbar-end">
          <a className="navbar-item" href="https://github.com/SPDUK">
            Github{' '}
            <span aria-label="house" role="img">
              🏡
            </span>
          </a>
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;
