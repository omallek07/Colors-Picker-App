import React from "react";
import { useParams } from "react-router-dom";

import ColorBox from "../ColorBox/ColorBox";
import { generatePalette } from "../utils/colorHelper";
import { findPalette } from "../utils/findPalette";

const SingleColorPalette = ({ palettes }) => {
  const { colorId, paletteId } = useParams();

  // return all shades of a given color
  const gatherShades = () => {
    const shades = [];
    const palette = generatePalette(findPalette(paletteId, palettes));

    for (const levels in palette.colors) {
      const colorMatch = palette.colors[levels].find(
        (color) => color.id === colorId
      );
      if (colorMatch) {
        shades.push(colorMatch);
      }
    }
    return shades.slice(1);
  };

  const mapColorBoxes = (shades) => {
    return shades.map((color) => {
      return (
        <ColorBox
          name={color.name}
          key={color.name}
          background={color["hex"]}
        />
      );
    });
  };

  const shades = gatherShades();
  const displayColorboxes = mapColorBoxes(shades);

  return (
    <div className="Palette">
      <h1>Single Color Palette</h1>
      <div className="Palette-colors">{displayColorboxes}</div>
    </div>
  );
};

export default SingleColorPalette;
