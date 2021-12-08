import React from "react";
import ColorBox from "./ColorBox";

import "./Palette.css";

function Palette({ palette, level, format }) {
  const colorBoxes = palette.colors[level].map((color) => {
    return (
      <ColorBox name={color.name} key={color.id} background={color[format]} />
    );
  });

  return (
    <div className="Palette">
      <div className="Palette-colors">{colorBoxes}</div>
    </div>
  );
}

export default Palette;
