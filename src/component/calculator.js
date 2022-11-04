import React from 'react';
import './calculator.css';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '0',
      next: null,
      operation: null,
    };
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleKeyPress = (e) => {
    const { total, next, operation } = this.state;
    const obj = { total, next, operation };
    const result = calculate(obj, e.target.value);
    if (e.target.value === 'AC') {
      this.setState(() => ({
        total: '0',
        next: result.next,
        operation: result.operation,
      }));
    } else {
      this.setState(() => ({
        total: result.total,
        next: result.next,
        operation: result.operation,
      }));
    }
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="calculator">
        <div className="panel">
          {total}
          {operation}
          {next}
        </div>
        <div className="buttons">
          <button type="button" value="AC" onClick={this.handleKeyPress}>AC</button>
          <button type="button" value="+/-" onClick={this.handleKeyPress}>+/-</button>
          <button type="button" value="%" onClick={this.handleKeyPress}>%</button>
          <button type="button" value="÷" onClick={this.handleKeyPress} className="orange">÷</button>
          <button type="button" value="7" onClick={this.handleKeyPress}>7</button>
          <button type="button" value="8" onClick={this.handleKeyPress}>8</button>
          <button type="button" value="9" onClick={this.handleKeyPress}>9</button>
          <button type="button" value="x" onClick={this.handleKeyPress} className="orange">x</button>
          <button type="button" value="4" onClick={this.handleKeyPress}>4</button>
          <button type="button" value="5" onClick={this.handleKeyPress}>5</button>
          <button type="button" value="6" onClick={this.handleKeyPress}>6</button>
          <button type="button" value="-" onClick={this.handleKeyPress} className="orange">-</button>
          <button type="button" value="1" onClick={this.handleKeyPress}>1</button>
          <button type="button" value="2" onClick={this.handleKeyPress}>2</button>
          <button type="button" value="3" onClick={this.handleKeyPress}>3</button>
          <button type="button" value="+" onClick={this.handleKeyPress} className="orange">+</button>
          <button type="button" value="0" onClick={this.handleKeyPress} className="zero-span">0</button>
          <button type="button" value="." onClick={this.handleKeyPress}>.</button>
          <button type="button" value="=" onClick={this.handleKeyPress} className="orange">=</button>
        </div>
      </div>
    );
  }
}
export default Calculator;
