import React, { Component } from "react";
import "./button.css";

class Button extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <button
          className={
            this.props.id == this.props.clickedButtonId ? "clicked" : "button"
          }
          onClick={() => this.props.onclick(this.props.id)}
        >
          {this.props.mode}
        </button>
      </React.Fragment>
    );
  }
}

export default Button;
