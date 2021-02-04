import React, { Component } from "react";
class Multiply extends Component {
  state = {};
  render() {
    return (
      <div>
        <button onClick={this.props.multiply}>x</button>
      </div>
    );
  }
}

export default Multiply;
