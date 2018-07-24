import React, { Component } from 'react';

import './sortitem.css';

// TODO: eslint seems to think this is a good idea even though it's not, reformat it later
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default class SortItem extends Component {
  componentDidMount() {
    this.randomizeItems();
  }
  randomizeItems() {
    const sItems = document.querySelectorAll('.sort-item');
    for (let i = 0; i < sItems.length; i++) {
      sItems[i].style.order = Math.floor(Math.random() * sItems.length) + 1;
    }
  }

  sort() {
    const sItems = document.querySelectorAll('.sort-item');
    for (let i = 0; i < sItems.length; i++) {
      setTimeout(() => {
        sItems[i].style.order = sItems[i].innerHTML;
        sItems[i].style.background = 'rgb(142, 255, 127)';
      }, 1000 * i);
    }
  }
  render() {
    return (
      <ul onClick={this.sort} className="sort container">
        {arr.map(i => (
          <li key={i} className="sort-item">
            {i}
          </li>
        ))}
      </ul>
    );
  }
}
