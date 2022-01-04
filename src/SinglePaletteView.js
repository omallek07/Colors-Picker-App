import React, { useState } from "react";
import Palette from "./Palette";
import Navbar from "./Navbar";
import MaterialSnackbar from "./Material/MaterialSnackbar";

const SinglePaletteView = ({ palette }) => {
  const [level, setLevel] = useState(500);
  const [format, setFormat] = useState("hex");
  const [snackbarIsOpen, setSnackbarIsOpen] = useState(false);

  const changeFormatHandler = (e) => {
    const newFormat = e.target.value;
    setFormat(newFormat);
    setSnackbarIsOpen(true);
  };

  const changeLevel = (level) => {
    setLevel(level);
  };
  return (
    <div className="SinglePaletteView">
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

export default SinglePaletteView;
