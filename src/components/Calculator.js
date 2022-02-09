/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function  */

import React, { Component } from 'react';
import Button from './Button';
import Screen from './Screen';
import calculate from '../logic/calculate';

export default class Calculator extends Component {
  render() {
    return (
      <>
        <Screen />
        <Button btn="AC" className="width" onclick={calculate()} />
        <Button btn="+/-" className="width" />
        <Button btn="%" className="width" />
        <Button btn="÷" className="operator width" />
        <Button btn="7" className="number width" />
        <Button btn="8" className="number width" />
        <Button btn="9" className="number width" />
        <Button btn="x" className="operator width" />
        <Button btn="4" className="number width" />
        <Button btn="5" className="number width" />
        <Button btn="6" className="number width" />
        <Button btn="-" className="operator width" />
        <Button btn="1" className="number width" />
        <Button btn="2" className="number width" />
        <Button btn="3" className="number width" />
        <Button btn="+" className="operator width" />
        <Button btn="0" className="number width button-zero" />
        <Button btn="." className="width" />
        <Button btn="=" className="operator width" />
      </>
    );
  }
}
