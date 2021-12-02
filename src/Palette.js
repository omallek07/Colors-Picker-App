import React, { Component } from "react";
import ColorBox from "./ColorBox";
import "./Palette.css";

class Palette extends Component {
  render() {
    const colorBoxes = this.props.palette.colors.map((color) => {
      return (
        <ColorBox name={color.name} key={color.name} background={color.color} />
      );
    });

    return (
      <div className="Palette">
        <div className="Palette-colors">{colorBoxes}</div>
      </div>
    );
  }
}

export default Palette;
