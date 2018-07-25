import React, { Component } from 'react';
import Navbar from '../../Hoc/Navbar/Navbar';
import ReactAux from '../../Hoc/ReactAux/ReactAux';

import './VisualizedSort.css';
import SortItem from './SortItem/SortItem';

export default class VisualizedSort extends Component {
  constructor() {
    super();
    this.state = {
      currentNum: 0
    };
  }
  randomizeItems = () => {
    const sItems = document.querySelectorAll('.sort-item');
    for (let i = 0; i < sItems.length; i += 1) {
      this.setState({
        currentNum: 0
      });
      sItems[i].style.order = 0;
      sItems[i].style.order = Math.floor(Math.random() * sItems.length) + 1;
      sItems[i].style.background = 'rgb(245, 245, 242)';
    }
  };

  sort = () => {
    const sItems = document.querySelectorAll('.sort-item');
    for (let i = 0; i < sItems.length; i += 1) {
      setTimeout(() => {
        if (i === 49) {
          this.setState({
            currentNum: 'Completed!'
          });
        } else {
          this.setState({
            currentNum: i + 1
          });
        }
        sItems[i].style.order = sItems[i].innerHTML;
        sItems[i].style.background = 'rgb(142, 255, 127)';
      }, 300 * i);
    }
  };

  render() {
    return (
      <ReactAux>
        <Navbar />
        <div className="container">
          <div className="sort">
            <p className="is-size-4">
              Current number being sorted:{' '}
              <span className="is-size-3">{this.state.currentNum}</span>
            </p>
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
          <p>If you click too much you'll break it.</p>
          <p>
            Loops through each item, then uses flexbox order to position it in
            the correct position.
          </p>
        </div>
      </ReactAux>
    );
  }
}
