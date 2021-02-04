import React, { Component } from "react";
import Divide from "./Divide";
import InputFeild from "./InputFeild";
import Sub from "./Sub";
class Graphics extends Component {
  state = { firstValue: "", secondValue: "", result: "" };
  handleChange = (e) => {
    this.setState({ firstValue: Number(e.target.value) });
  };
  handleChangeTwo = (e) => {
    this.setState({ secondValue: Number(e.target.value) });
  };
  sub = () => {
    const sub = this.state.firstValue - this.state.secondValue;

    this.setState({ result: sub });
  };
  divide = () => {
    const divide = this.state.firstValue / this.state.secondValue;

    this.setState({ result: divide });
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
        <Divide divide={this.divide} />
      </div>
    );
  }
}

export default Graphics;
