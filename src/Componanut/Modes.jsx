import React, { Component } from "react";
import Button from "./Button";
import Scientfic from "./scientfic";
import Graphics from "./Graphics";
import Standard from "./Standard";

class Modes extends Component {
  state = {
    mode: [<Scientfic />, <Graphics />, <Standard />],
    class: "",
    num: -1,
  };
  handelClick = (id) => {
    this.setState({ num: id });
  };
  // handelClick = () => {
  //   this.setState({ mode: <Scientfic /> });
  // };
  // handelSecondClick = () => {
  //   this.setState({ mode: <Graphics /> });
  // };
  // handelThirdClick = () => {
  //   this.setState({ mode: <Standard /> });
  // };
  render() {
    // const modeOne = "Scientfic",
    //   modeTwo = "Graphic",
    //   modeThree = "Standard";
    const modes = [
      { id: 0, name: "Scientfic" },
      { id: 1, name: "Graphic" },
      { id: 2, name: "Standard" },
    ];
    return (
      <div>
        {modes.map((mode) => (
          <Button
            key={mode.id}
            id={mode.id}
            clickedButtonId={this.state.num}
            mode={mode.name}
            onclick={this.handelClick}
          />
        ))}

        {/* <Button mode={modeOne} onclick={this.handelClick} />
        // <Button mode={modeTwo} onclick={this.handelSecondClick} />
        // <Button mode={modeThree} onclick={this.handelThirdClick} /> */}
        {this.state.mode[this.state.num]}
      </div>
    );
  }
}

export default Modes;
