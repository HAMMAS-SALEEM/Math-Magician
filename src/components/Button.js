/* eslint-disable react/prefer-stateless-function  */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */

import React, { Component } from 'react';

export default class Button extends Component {
  render() {
    const { btn, className, eventTarget } = this.props;
    return (
      <div className={className}>
        <button type="button" className={className} onClick={() => eventTarget(btn)}>{btn}</button>
      </div>
    );
  }
}
