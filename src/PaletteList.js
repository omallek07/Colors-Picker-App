import React from "react";
import MiniPalette from "./MiniPalette";

const PaletteList = ({ palettes }) => {
  const palettesView = palettes.map((palette) => {
    return <MiniPalette {...palette} />;
  });

  return (
    <div>
      <h1>React Colors</h1>
      {palettesView}
    </div>
  );
};

export default PaletteList;
