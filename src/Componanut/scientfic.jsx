import React, { Component } from "react";
import InputFeild from "./InputFeild";
import Sum from "./Sum";
import Multiply from "./Multiply";

class Scientfic extends Component {
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
  multiply = () => {
    const multiply = this.state.firstValue * this.state.secondValue;

    this.setState({ result: multiply });
  };

  render() {
    const { firstValue, secondValue, result } = this.state;
    return (
      <div>
        <InputFeild
          firstvalue={firstValue}
          secondvalue={secondValue}
          result={result}
          handleChange={this.handleChange}
          handleChangeTwo={this.handleChangeTwo}
        />
        <Sum sum={this.sum} />
        <Multiply multiply={this.multiply} />
      </div>
    );
  }
}

export default Scientfic;
