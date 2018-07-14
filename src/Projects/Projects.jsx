import React, { Component } from 'react';

import HoverText from './HoverText/HoverText';
import './projects.css';

export default class Projects extends Component {
  render() {
    return (
      <div className="container projects">
        <HoverText />
        <div className="section">
          <div className="columns container projects-grid">
            <div className="column projects-grid-item">hi</div>
            <div className="column projects-grid-item">hi</div>
          </div>
        </div>
      </div>
    );
  }
}
