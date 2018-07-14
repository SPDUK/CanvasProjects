import React, { Component } from 'react';

import './hovertext.css';

export default class HoverText extends Component {
  componentDidMount() {
    const hero = document.querySelector('html');
    const text = hero.querySelector('h1');

    hero.addEventListener('mousemove', this.shadow);
  }

  componentWillUnmount() {
    const hero = document.querySelector('html');
    // window.removeEventListener('mousemove', this.shadow);
  }
  // shadow(e) {
  //   console.log(e);
  // }

  render() {
    return (
      <div className="hero">
        <div className="hero-body">
          <h1>Quick Projects</h1>
        </div>
      </div>
    );
  }
}
