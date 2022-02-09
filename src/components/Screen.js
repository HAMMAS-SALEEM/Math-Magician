/* eslint-disable react/prop-types  */
/* eslint-disable react/prefer-stateless-function  */
/* eslint-disable react/destructuring-assignment  */

import React, { Component } from 'react';

export default class Screen extends Component {
  constructor() {
    super();
    this.state = {
      currVal: 0,
    };
  }

  render() {
    return (
      <div className="screen">{this.state.currVal}</div>
    );
  }
}
