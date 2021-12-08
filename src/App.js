import React, { useState } from "react";
import seedColors from "./seedColors";
import Palette from "./Palette";
import Navbar from "./Navbar";
import { generatePalette } from "./colorHelper";
import "./App.css";

function App() {
  const [level, setLevel] = useState(500);
  const [format, setFormat] = useState("hex");

  const changeFormatHandler = (e) => {
    const newFormat = e.target.value;
    setFormat(newFormat);
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
    </div>
  );
}

export default App;
