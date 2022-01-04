import React from "react";
import seedColors from "./seedColors";
import { Route, Routes } from "react-router-dom";
import PaletteList from "./PaletteList";
import SinglePaletteView from "./SinglePaletteView";
import { generatePalette } from "./utils/colorHelper";

import "./App.css";

function App() {
  const findPalette = (id) => {
    return seedColors.find((palette) => palette.id === id);
  };

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<PaletteList palettes={seedColors} />} />
        <Route
          exact
          path="/palette/:id"
          element={(routeProps) => (
            <SinglePaletteView
              palette={generatePalette(findPalette(routeProps.match.params.id))}
            />
          )}
        />
      </Routes>
    </div>
  );
}

export default App;
