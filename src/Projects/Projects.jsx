import React, { Component } from 'react';

import HoverText from './HoverText/HoverText';
import './projects.css';

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
