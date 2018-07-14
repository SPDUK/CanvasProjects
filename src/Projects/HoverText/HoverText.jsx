import React, { Component } from 'react';

import './hovertext.css';

export default class HoverText extends Component {
  componentDidMount() {
    const hero = document.querySelector('html');
    hero.addEventListener('mousemove', this.shadow);
  }

  componentWillUnmount() {
    const hero = document.querySelector('html');
    hero.removeEventListener('mousemove', this.shadow);
  }
  shadow(e) {
    const hero = document.querySelector('html');
    const { offsetWidth: width, offsetHeight: height } = hero;
    const distance = 20;
    let { offsetX: x, offsetY: y } = e;
    if (this !== e.target) {
      x += e.target.offsetLeft;
      y += e.target.offsetTop;
    }
    const xDistance = Math.round((x / width) * distance - distance / 2);
    const yDistance = Math.round((y / height) * distance - distance / 2);

    const text = document.getElementById('text');
    text.style.textShadow = `${xDistance}px ${yDistance}px 20px #222222af`;
  }

  render() {
    return (
      <div className="hero">
        <div className="hero-body">
          <h1 id="text">Quick Projects</h1>
          <div className="hero-underline" />
        </div>
      </div>
    );
  }
}
