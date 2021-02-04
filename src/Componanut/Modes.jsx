import React, { Component } from "react";
import Button from "./Button";
import Scientfic from "./scientfic";
import Graphics from "./Graphics";

class Modes extends Component {
  state = {
    mode: "",
  };
  handelClick = () => {
    this.setState({ mode: <Scientfic /> });
  };
  handelSecondClick = () => {
    this.setState({ mode: <Graphics /> });
  };
  render() {
    const modeOne = "Scientfic",
      modeTwo = "Graphic";
    return (
      <div>
        {/* {modes.map((mode) => (
          <Button key={mode.id} mode={mode.name} onclick={this.handelClick} /> */}
        <Button mode={modeOne} onclick={this.handelClick} />
        <Button mode={modeTwo} onclick={this.handelSecondClick} />
        {this.state.mode}
      </div>
    );
  }
}

export default Modes;
