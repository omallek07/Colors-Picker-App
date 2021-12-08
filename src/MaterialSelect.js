import React from "react";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

const MaterialSelect = ({ changeFormatHandler, format }) => {
  return (
    <div className="select-container">
      <Select value={format} onChange={changeFormatHandler}>
        <MenuItem value="hex">HEX - #FFFFF</MenuItem>
        <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
        <MenuItem value="rgba">RGBa - rgb(255,255,255, 1.0)</MenuItem>
      </Select>
    </div>
  );
};

export default MaterialSelect;
