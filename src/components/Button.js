/* eslint-disable react/prefer-stateless-function  */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */

import React, { Component } from 'react';

export default class Button extends Component {
  render() {
    const { btn, className, eventTarget } = this.props;
    return (
      <div className={className}>
        <input type="button" onClick={() => eventTarget(btn)} className={className} value={btn} />
      </div>
    );
  }
}
