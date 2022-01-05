import React from "react";

const PaletteFooter = ({ paletteName, emoji }) => {
  return (
    <footer className="Palette-footer">
      {paletteName}
      {emoji && <span className="emoji">{emoji}</span>}
    </footer>
  );
};

export default PaletteFooter;
