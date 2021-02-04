import React, { Component } from "react";

class InputFeild extends Component {
  state = {};
  render() {
    return (
      <div>
        <form action="">
          <input
            type="text"
            value={this.props.firstValue}
            onChange={(e) => this.props.handleChange(e)}
          />
          <input
            type="text"
            value={this.props.secondValue}
            onChange={(e) => this.props.handleChangeTwo(e)}
          />
          <span>{this.props.result}</span>
        </form>
      </div>
    );
  }
}

export default InputFeild;
