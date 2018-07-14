import React, { Component } from 'react';

import './projects.css';
import HoverText from './HoverText/HoverText';

export default class Projects extends Component {
  render() {
    return (
      <div className="container projects">
        <HoverText />
        <div className="columns projects-grid">
          <div className="column projects-grid-item" />
          <div className="column projects-grid-item" />
          <div className="column projects-grid-item" />
        </div>
      </div>
    );
  }
}
