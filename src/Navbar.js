import React from "react";
import Slider from "./Slider";
import { Link } from "react-router-dom";
import MaterialSelect from "./Material/MaterialSelect";
import "./Navbar.css";

const Navbar = ({ level, changeLevel, format, changeFormatHandler }) => {
  return (
    <header className="Navbar">
      <div className="logo">
        <Link to="/">reactcolorpicker</Link>
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
