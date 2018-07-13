import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

// Bulma navbar toggle
// document.addEventListener('DOMContentLoaded', () => {
//   const $navbarBurgers = Array.prototype.slice.call(
//     document.querySelectorAll('.navbar-burger'),
//     0
//   );
//   if ($navbarBurgers.length > 0) {
//     $navbarBurgers.forEach(el => {
//       el.addEventListener('click', () => {
//         const { target } = el.dataset;
//         const $target = document.getElementById(target);
//         el.classList.toggle('is-active');
//         $target.classList.toggle('is-active');
//       });
//     });
//   }
// });

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
  <nav className="navbar is-primary">
    <div className="container">
      <div className="navbar-brand">
        <a href="/" className="navbar-item">
          <strong>Canvas Stuff!</strong>
        </a>
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
      <div id="navMenu" className="navbar-menu">
        <Link to="/snake" className="navbar-item">
          Snake
          <span aria-label="house" role="img">
            🐍
          </span>
        </Link>
        <Link to="/gravity" className="navbar-item ">
          Gravity{' '}
          <span aria-label="house" role="img">
            🌌
          </span>
        </Link>
        <div className="navbar-end">
          <a className="navbar-item" href="https://github.com/SPDUK">
            Github
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
