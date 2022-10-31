import React from 'react';
import './calculator.css';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="calculator">
        <div className="panel">0</div>
        <div className="buttons">
          <div>AC</div>
          <div>+/-</div>
          <div>%</div>
          <div className="orange">/</div>
          <div>7</div>
          <div>8</div>
          <div>9</div>
          <div className="orange">x</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
          <div className="orange">-</div>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div className="orange">+</div>
          <div className="zero-span">0</div>
          <div>.</div>
          <div className="orange">=</div>
        </div>
      </div>
    );
  }
}
export default Calculator;
