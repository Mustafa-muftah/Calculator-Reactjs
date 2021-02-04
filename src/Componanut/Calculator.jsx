import React, { Component } from "react";

import { Route, Switch } from "react-router-dom";

class Calculator extends Component {
  state = { firstValue: "", secondValue: "", result: "" };
  handleChange = (e) => {
    this.setState({ firstValue: Number(e.target.value) });
  };
  handleChangeTwo = (e) => {
    this.setState({ secondValue: Number(e.target.value) });
  };
  sum = () => {
    const sum = this.state.firstValue + this.state.secondValue;

    this.setState({ result: sum });
  };
  sub = () => {
    const sub = this.state.firstValue - this.state.secondValue;

    this.setState({ result: sub });
  };
  multiply = () => {
    const multiply = this.state.firstValue * this.state.secondValue;

    this.setState({ result: multiply });
  };
  divide = () => {
    const divide = this.state.firstValue / this.state.secondValue;

    this.setState({ result: divide });
  };
  render() {
    return (
      <div>
        <form action="">
          <input
            type="text"
            value={this.state.firstValue}
            onChange={this.handleChange}
          />
          <input
            type="text"
            value={this.state.secondValue}
            onChange={this.handleChangeTwo}
          />
          <span> {this.state.result}</span>
        </form>
        <button onClick={this.sum}>+</button>
        <button onClick={this.sub}>-</button>
        <button onClick={this.multiply}>x</button>
        <button onClick={this.divide}>%</button>
      </div>
    );
  }
}

export default Calculator;
