import React from "react";
import Slider from "./Slider";
import MaterialSelect from "./Material/MaterialSelect";
import "./Navbar.css";

const Navbar = ({ level, changeLevel, format, changeFormatHandler }) => {
  return (
    <header className="Navbar">
      <div className="logo">
        <a href="#">reactcolorpicker</a>
      </div>
      <Slider level={level} changeLevel={changeLevel} />
      <MaterialSelect
        format={format}
        changeFormatHandler={changeFormatHandler}
      />
    </header>
  );
};

export default Navbar;
