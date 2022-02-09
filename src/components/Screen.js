/* eslint-disable react/prop-types  */
/* eslint-disable react/prefer-stateless-function  */

import React, { Component } from 'react';

export default class Screen extends Component {
  render() {
    const { currVal, operator, next } = this.props;
    return (
      <div className="screen">
        {currVal}
        {operator}
        {next}
      </div>
    );
  }
}
