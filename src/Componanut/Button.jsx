import React, { Component } from "react";

class Button extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <button className="Button" onClick={() => this.props.onclick()}>
          {this.props.mode}
        </button>
      </React.Fragment>
    );
  }
}

export default Button;
