import React from "react";
import seedColors from "./seedColors";

import { Route, Routes } from "react-router-dom";

import SinglePaletteView from "./SinglePaletteView";
import AllPalettes from "./AllPalettes/AllPalettes";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<AllPalettes palettes={seedColors} />} />
        <Route
          exact
          path="/palette/:id"
          element={<SinglePaletteView seedColors={seedColors} />}
        />
      </Routes>
    </div>
  );
}

export default App;
