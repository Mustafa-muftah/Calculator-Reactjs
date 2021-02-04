import React, { Component } from "react";

class Divide extends Component {
  state = {};
  render() {
    return <button onClick={this.props.divide}>%</button>;
  }
}

export default Divide;
