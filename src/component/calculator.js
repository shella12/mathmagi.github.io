import React, { useState } from 'react';
import './calculator.css';
import calculate from '../logic/calculate';

function Calculator() {
  const [total, setTotal] = useState('0');
  const [next, setNext] = useState(null);
  const [operation, setOperation] = useState(null);

  const handleKeyPress = (e) => {
    const obj = { total, next, operation };
    const result = calculate(obj, e.target.value);
    if (e.target.value === 'AC') {
      setTotal('0');
      setNext(result.next);
      setOperation(result.operation);
    } else {
      setTotal(result.total);
      setNext(result.next);
      setOperation(result.operation);
    }
  };
  return (

    <div className="main-content">
      <div className="text">Let&apos;s do some maths!</div>
      <div className="calculator">
        <div className="panel">
          {total}
          {operation}
          {next}
        </div>
        <div className="buttons">
          <button type="button" value="AC" onClick={handleKeyPress}>AC</button>
          <button type="button" value="+/-" onClick={handleKeyPress}>+/-</button>
          <button type="button" value="%" onClick={handleKeyPress}>%</button>
          <button type="button" value="÷" onClick={handleKeyPress} className="orange">÷</button>
          <button type="button" value="7" onClick={handleKeyPress}>7</button>
          <button type="button" value="8" onClick={handleKeyPress}>8</button>
          <button type="button" value="9" onClick={handleKeyPress}>9</button>
          <button type="button" value="x" onClick={handleKeyPress} className="orange">x</button>
          <button type="button" value="4" onClick={handleKeyPress}>4</button>
          <button type="button" value="5" onClick={handleKeyPress}>5</button>
          <button type="button" value="6" onClick={handleKeyPress}>6</button>
          <button type="button" value="-" onClick={handleKeyPress} className="orange">-</button>
          <button type="button" value="1" onClick={handleKeyPress}>1</button>
          <button type="button" value="2" onClick={handleKeyPress}>2</button>
          <button type="button" value="3" onClick={handleKeyPress}>3</button>
          <button type="button" value="+" onClick={handleKeyPress} className="orange">+</button>
          <button type="button" value="0" onClick={handleKeyPress} className="zero-span">0</button>
          <button type="button" value="." onClick={handleKeyPress}>.</button>
          <button type="button" value="=" onClick={handleKeyPress} className="orange">=</button>
        </div>
      </div>
    </div>
  );
}
export default Calculator;
