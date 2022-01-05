import React, { useState } from "react";
import { useParams } from "react-router-dom";

import Navbar from "../Navbar/Navbar";
import MaterialSnackbar from "../Material/MaterialSnackbar";
import ColorBox from "../ColorBox/ColorBox";
import PaletteFooter from "../Palette/PaletteFooter";
import GoBack from "./GoBack";

import { generatePalette } from "../utils/colorHelper";
import { findPalette } from "../utils/findPalette";

const SingleColorPalette = ({ palettes }) => {
  const { colorId, paletteId } = useParams();
  const [format, setFormat] = useState("hex");
  const [snackbarIsOpen, setSnackbarIsOpen] = useState(false);

  // return all shades of a given color
  const gatherShades = (palette) => {
    const shades = [];

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
          background={color[format]}
        />
      );
    });
  };

  const changeFormatHandler = (e) => {
    const newFormat = e.target.value;
    setFormat(newFormat);
    setSnackbarIsOpen(true);
  };

  const palette = generatePalette(findPalette(paletteId, palettes));
  const shades = gatherShades(palette);
  const displayColorboxes = mapColorBoxes(shades);

  return (
    <div className="SingleColorPalette Palette">
      <Navbar
        showSlider={false}
        format={format}
        changeFormatHandler={changeFormatHandler}
      />
      <div className="Palette-colors">
        {displayColorboxes}
        <GoBack id={paletteId} />
      </div>
      <PaletteFooter paletteName={palette.paletteName} emoji={palette.emoji} />
      <MaterialSnackbar
        message={`Format is now set to ${format.toUpperCase()}`}
        isOpen={snackbarIsOpen}
        isOpenHandler={setSnackbarIsOpen}
      />
    </div>
  );
};

export default SingleColorPalette;
