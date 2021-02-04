import React, { Component } from "react";
import InputFeild from "./InputFeild";
import Sub from "./Sub";
import Sum from "./Sum";

class Standard extends Component {
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
  render() {
    const { firstValue, secondValue, result } = this.state;
    return (
      <div>
        <InputFeild
          firstValue={firstValue}
          secondValue={secondValue}
          result={result}
          handleChange={this.handleChange}
          handleChangeTwo={this.handleChangeTwo}
        />
        <Sub sub={this.sub} />
        <Sum sum={this.sum} />
      </div>
    );
  }
}

export default Standard;
