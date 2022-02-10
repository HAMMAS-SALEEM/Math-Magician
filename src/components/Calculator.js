/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function  */

import React, { Component } from 'react';
import Button from './Button';
import Screen from './Screen';
import calculate from '../logic/calculate';

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '0',
      next: null,
      operation: null,
    };
  }

  handleClick = (value) => {
    this.setState((prevState) => calculate(prevState, value));
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <>
        <Screen screen="screen" currVal={total} operator={operation} next={next} />
        <Button btn="AC" className="width" eventTarget={this.handleClick} />
        <Button btn="+/-" className="width" eventTarget={this.handleClick} />
        <Button btn="%" className="width" eventTarget={this.handleClick} />
        <Button btn="÷" className="operator width" eventTarget={this.handleClick} />
        <Button btn="7" className="number width" eventTarget={this.handleClick} />
        <Button btn="8" className="number width" eventTarget={this.handleClick} />
        <Button btn="9" className="number width" eventTarget={this.handleClick} />
        <Button btn="x" className="operator width" eventTarget={this.handleClick} />
        <Button btn="4" className="number width" eventTarget={this.handleClick} />
        <Button btn="5" className="number width" eventTarget={this.handleClick} />
        <Button btn="6" className="number width" eventTarget={this.handleClick} />
        <Button btn="-" className="operator width" eventTarget={this.handleClick} />
        <Button btn="1" className="number width" eventTarget={this.handleClick} />
        <Button btn="2" className="number width" eventTarget={this.handleClick} />
        <Button btn="3" className="number width" eventTarget={this.handleClick} />
        <Button btn="+" className="operator width" eventTarget={this.handleClick} />
        <Button btn="0" className="number width button-zero" eventTarget={this.handleClick} />
        <Button btn="." className="width" eventTarget={this.handleClick} />
        <Button btn="=" className="operator width" eventTarget={this.handleClick} />
      </>
    );
  }
}
