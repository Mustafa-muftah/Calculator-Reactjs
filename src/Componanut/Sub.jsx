import React, { Component } from "react";

class Sub extends Component {
  state = {};
  render() {
    return <button onClick={this.props.sub}>-</button>;
  }
}

export default Sub;
