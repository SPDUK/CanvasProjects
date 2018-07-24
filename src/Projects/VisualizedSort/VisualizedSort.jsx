import React, { Component } from 'react';
import Navbar from '../../Hoc/Navbar/Navbar';
import ReactAux from '../../Hoc/ReactAux/ReactAux';

import './VisualizedSort.css';
import SortItem from './SortItem/SortItem';

export default class VisualizedSort extends Component {
  render() {
    return (
      <ReactAux>
        <Navbar />
        <div className="container sort">
          <SortItem />
        </div>
      </ReactAux>
    );
  }
}
