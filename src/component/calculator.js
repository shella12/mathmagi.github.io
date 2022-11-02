import React from 'react';
import Panel from './panel';
import './calculator.css';
import calculate from '../logic/calculate';
import operate from '../logic/operate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
      panel: '',
    };
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleKeyPress = (e) => {
    this.setState((state) => ({
      panel: state.panel + e.target.value,
    }));
    console.log(e.target.value);
    const { total, next, operation } = this.state;
    const obj = {
      t: total,
      n: next,
      o: operation,
    };
    const result = calculate(obj, e.target.value);
    console.log(result);
    if ((operation === null && result.operation === null)
     || (operation === null && !result.operation)) {
      if (total === null) {
        this.setState(() => ({
          total: result.next,
        }));
      } else {
        this.setState((state) => ({
          total: state.total + result.next,
        }));
      }
      console.log(total);
    } else if (result.operation && result.operation !== null) {
      if (operation === null) {
        this.setState(() => ({
          operation: result.operation,
        }));
      } else if (operation !== null && next === null) {
        this.setState(() => ({
          operation: result.operation,
        }));
      } else {
        this.setState((state) => ({
          total: operate(Number(state.total), Number(state.next), state.operation),
          next: null,
          operation: result.operation,
        }));
      }
      console.log(operation);
    } else {
      if (next === null) {
        this.setState(() => ({
          next: result.next,
        }));
      } else {
        this.setState((state) => ({
          next: state.next + result.next,
        }));
      }
      console.log(next);
    }
    console.log(`${total} , ${next} , ${operation}`);
  }

  render() {
    const { panel } = this.state;
    return (
      <div className="calculator">
        <div className="panel"><Panel panel={panel} /></div>
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
