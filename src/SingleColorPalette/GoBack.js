import React from "react";
import { Link } from "react-router-dom";

const GoBack = ({ id }) => {
  return (
    <div className="ColorBox GoBack">
      <Link to={`/palette/${id}`} className="back-button">
        Go Back
      </Link>
    </div>
  );
};

export default GoBack;
