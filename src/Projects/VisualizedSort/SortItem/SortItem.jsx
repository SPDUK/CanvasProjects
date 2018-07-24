import React, { Component } from 'react';

import './sortitem.css';

const arr = [];
for (let i = 0; i < 100; i += 1) {
  arr.push(i);
}
export default class SortItem extends Component {
  render() {
    return <ul>{arr.map(i => <li>{i}</li>)}</ul>;
  }
}
