import React, { Component } from 'react';

import './sortitem.css';

// TODO: eslint seems to think this is a good idea even though it's not, reformat it later
const arr = [8, 6, 10, 4, 5, 2, 7, 1, 9, 3];

export default class SortItem extends Component {
  test() {
    const sItems = document.querySelectorAll('.sort-item');
    for (let i = 0; i < sItems.length; i++) {
      sItems[i].style.order = Math.floor(Math.random() * sItems.length) + 1;
      console.log(sItems[i]);
    }
  }
  render() {
    return (
      <ul onClick={this.test} className="sort container">
        {arr.map(i => (
          <li key={i} className="sort-item">
            {i}
          </li>
        ))}
      </ul>
    );
  }
}
