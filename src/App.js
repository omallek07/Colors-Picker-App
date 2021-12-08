import React, { useState } from "react";
import seedColors from "./seedColors";
import Palette from "./Palette";
import Navbar from "./Navbar";
import MaterialSnackbar from "./Material/MaterialSnackbar";

import { generatePalette } from "./utils/colorHelper";
import "./App.css";

function App() {
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
    <div className="App">
      <Navbar
        level={level}
        changeLevel={changeLevel}
        format={format}
        changeFormatHandler={changeFormatHandler}
      />
      <Palette
        level={level}
        palette={generatePalette(seedColors[4])}
        format={format}
      />
      <MaterialSnackbar
        message={`Format is now set to ${format.toUpperCase()}`}
        isOpen={snackbarIsOpen}
        isOpenHandler={setSnackbarIsOpen}
      />
    </div>
  );
}

export default App;
