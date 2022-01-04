import React from "react";

import SliderTool from "rc-slider";
import "rc-slider/assets/index.css";
import "./Slider.css";

const Slider = ({ level, changeLevel }) => {
  return (
    <div className="slider-container">
      <span>Level: {level}</span>
      <div className="slider">
        <SliderTool
          defaultValue={level}
          min={100}
          max={900}
          step={100}
          onAfterChange={changeLevel}
        />
      </div>
    </div>
  );
};

export default Slider;
