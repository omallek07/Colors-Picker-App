import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Palette from "./Palette/Palette";
import Navbar from "./Navbar/Navbar";
import { generatePalette } from "./utils/colorHelper";
import MaterialSnackbar from "./Material/MaterialSnackbar";

const PaletteView = ({ seedColors }) => {
  const { id } = useParams();
  const [level, setLevel] = useState(500);
  const [format, setFormat] = useState("hex");
  const [snackbarIsOpen, setSnackbarIsOpen] = useState(false);

  const findPalette = (id) => {
    return seedColors.find((palette) => palette.id === id);
  };

  const changeFormatHandler = (e) => {
    const newFormat = e.target.value;
    setFormat(newFormat);
    setSnackbarIsOpen(true);
  };

  const changeLevel = (level) => {
    setLevel(level);
  };

  const palette = generatePalette(findPalette(id));

  return (
    <div className="PaletteView">
      <Navbar
        level={level}
        changeLevel={changeLevel}
        format={format}
        changeFormatHandler={changeFormatHandler}
      />
      <Palette format={format} level={level} palette={palette} />
      <MaterialSnackbar
        message={`Format is now set to ${format.toUpperCase()}`}
        isOpen={snackbarIsOpen}
        isOpenHandler={setSnackbarIsOpen}
      />
    </div>
  );
};

export default PaletteView;
