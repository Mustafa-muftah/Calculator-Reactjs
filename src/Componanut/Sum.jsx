import React, { Component } from "react";
class Sum extends Component {
  state = {};
  render() {
    return (
      <div>
        <button onClick={this.props.sum}>+</button>
      </div>
    );
  }
}

export default Sum;
