/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function  */

import React, { useState } from 'react';
import Button from './Button';
import Screen from './Screen';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [val, setVal] = useState({ total: '0', next: null, operation: null });

  const handleClick = (value) => {
    setVal(() => calculate(val, value));
  };
  const { total, next, operation } = val;
  return (
    <>
      <Screen screen="screen" currVal={total} operator={operation} next={next} />
      <Button btn="AC" className="width" eventTarget={handleClick} />
      <Button btn="+/-" className="width" eventTarget={handleClick} />
      <Button btn="%" className="width" eventTarget={handleClick} />
      <Button btn="÷" className="operator width" eventTarget={handleClick} />
      <Button btn="7" className="number width" eventTarget={handleClick} />
      <Button btn="8" className="number width" eventTarget={handleClick} />
      <Button btn="9" className="number width" eventTarget={handleClick} />
      <Button btn="x" className="operator width" eventTarget={handleClick} />
      <Button btn="4" className="number width" eventTarget={handleClick} />
      <Button btn="5" className="number width" eventTarget={handleClick} />
      <Button btn="6" className="number width" eventTarget={handleClick} />
      <Button btn="-" className="operator width" eventTarget={handleClick} />
      <Button btn="1" className="number width" eventTarget={handleClick} />
      <Button btn="2" className="number width" eventTarget={handleClick} />
      <Button btn="3" className="number width" eventTarget={handleClick} />
      <Button btn="+" className="operator width" eventTarget={handleClick} />
      <Button btn="0" className="number width button-zero" eventTarget={handleClick} />
      <Button btn="." className="width" eventTarget={handleClick} />
      <Button btn="=" className="operator width" eventTarget={handleClick} />
    </>
  );
};

export default Calculator;
