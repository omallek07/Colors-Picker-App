import React from "react";
import ColorBox from "../ColorBox/ColorBox";
import PaletteFooter from "./PaletteFooter";
import "./Palette.css";

function Palette({ palette, level, format }) {
  const { colors, paletteName, emoji, id } = palette;
  const colorBoxes = colors[level].map((color) => {
    return (
      <ColorBox
        name={color.name}
        key={color.id}
        background={color[format]}
        moreUrl={`/palette/${id}/${color.id}`}
      />
    );
  });

  return (
    <div className="Palette">
      <div className="Palette-colors">{colorBoxes}</div>
      <PaletteFooter paletteName={paletteName} emoji={emoji} />
    </div>
  );
}

export default Palette;
