import React, { Component } from 'react';
import Navbar from '../../Hoc/Navbar/Navbar';
import ReactAux from '../../Hoc/ReactAux/ReactAux';

import './VisualizedSort.css';
import SortItem from './SortItem/SortItem';

export default class VisualizedSort extends Component {
  randomizeItems() {
    const sItems = document.querySelectorAll('.sort-item');
    for (let i = 0; i < sItems.length; i++) {
      sItems[i].style.order = 0;
      sItems[i].style.order = Math.floor(Math.random() * sItems.length) + 1;
      sItems[i].style.background = 'rgb(180, 180, 180)';
    }
  }

  // eslint-disable-next-line
    sort() {
    const sItems = document.querySelectorAll('.sort-item');
    for (let i = 0; i < sItems.length; i++) {
      setTimeout(() => {
        sItems[i].style.order = sItems[i].innerHTML;
        sItems[i].style.background = 'rgb(142, 255, 127)';
      }, 300 * i);
    }
  }

  render() {
    return (
      <ReactAux>
        <Navbar />
        <div className="container">
          <div className="sort">
            <SortItem randomizeItems={this.randomizeItems} />
          </div>
          <div className="sort-buttons">
            <div onClick={this.randomizeItems} className="button is-warning">
              Randomize Numbers
            </div>
            <div onClick={this.sort} className="button is-success">
              Sort Numbers
            </div>
          </div>
        </div>
      </ReactAux>
    );
  }
}
