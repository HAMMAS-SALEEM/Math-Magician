/* eslint-disable react/prop-types  */
/* eslint-disable react/prefer-stateless-function  */

import React, { Component } from 'react';

const eventTarget = (event) => console.log(event.target.value);

export default class Button extends Component {
  render() {
    const { btn, className } = this.props;
    return (
      <div className={className}>
        <input type="button" onClick={eventTarget} className={className} value={btn} />
      </div>
    );
  }
}
