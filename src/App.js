import React from "react";
import seedColors from "./seedColors";

import { Route, Routes } from "react-router-dom";

import PaletteView from "./PaletteView";
import AllPalettes from "./AllPalettes/AllPalettes";
import SingleColorPalette from "./SingleColorPalette/SingleColorPalette";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<AllPalettes palettes={seedColors} />} />
        <Route
          exact
          path="/palette/:id"
          element={<PaletteView palettes={seedColors} />}
        />
        <Route
          exact
          path="/palette/:paletteId/:colorId"
          element={<SingleColorPalette palettes={seedColors} />}
        />
      </Routes>
    </div>
  );
}

export default App;
