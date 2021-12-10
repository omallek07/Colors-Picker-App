import React, { useState } from "react";
import seedColors from "./seedColors";
import { Route, Switch } from "react-router-dom";
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

  const findPalette = (id) => {
    return seedColors.find((palette) => palette.id === id);
  };

  return (
    <div className="App">
      <Navbar
        level={level}
        changeLevel={changeLevel}
        format={format}
        changeFormatHandler={changeFormatHandler}
      />
      <Switch>
        <Route exact path="/" render={() => <h1>HOME</h1>} />
        <Route
          exact
          path="/palette/:id"
          render={(routeProps) => (
            <Palette
              level={level}
              palette={generatePalette(findPalette(routeProps.match.params.id))}
              format={format}
            />
          )}
        />
      </Switch>
      <MaterialSnackbar
        message={`Format is now set to ${format.toUpperCase()}`}
        isOpen={snackbarIsOpen}
        isOpenHandler={setSnackbarIsOpen}
      />
    </div>
  );
}

export default App;
