import React, { Component } from 'react';

import './sortitem.css';

// TODO: eslint seems to think this is a good idea even though it's not, reformat it later
const arr = [8, 6, 10, 4, 5, 2, 7, 1, 9, 3];

export default class SortItem extends Component {
  test() {
    const sItems = document.getElementsByClassName('sort-item');
    console.log(sItems);
  }
  render() {
    return (
      <ul onClick={this.test} className="sort container">
        {arr.map(i => <li className="sort-item">{i}</li>)}
      </ul>
    );
  }
}
