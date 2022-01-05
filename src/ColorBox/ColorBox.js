import React, { useState } from "react";
import "./ColorBox.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
import chroma from "chroma-js";
import { Link } from "react-router-dom";

function ColorBox(props) {
  const [copied, setCopied] = useState(false);

  const changeCopyState = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const { name, background, moreUrl } = props;
  const isDarkColor = chroma(background).luminance() <= 0.08;

  return (
    <CopyToClipboard text={background} onCopy={changeCopyState}>
      <div
        style={{ background: background }}
        className={`ColorBox ${isDarkColor ? "ColorDark" : "ColorLight"}`}
      >
        <div
          className={`copy-overlay ${copied && "show"}`}
          style={{ background: background }}
        />
        <div className={`copy-msg ${copied && "show"}`}>
          <h1>copied!</h1>
          <p>{background}</p>
        </div>
        <div className="copy-container">
          <div className="box-content">
            <span>{name}</span>
          </div>
          <button className="copy-button">Copy</button>
        </div>
        {moreUrl && (
          <Link to={moreUrl} onClick={(e) => e.stopPropagation()}>
            <span className="see-more">MORE</span>
          </Link>
        )}
      </div>
    </CopyToClipboard>
  );
}

export default ColorBox;
