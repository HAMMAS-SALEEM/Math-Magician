/* eslint-disable react/prop-types  */
/* eslint-disable react/prefer-stateless-function  */

import React, { Component } from 'react';

export default class Button extends Component {
  render() {
    const { btn, className } = this.props;
    return (
      <div className={className}>
        <input type="button" className={className} value={btn} />
      </div>
    );
  }
}
