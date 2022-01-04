import React from "react";
import MiniPalette from "./MiniPalette";
import { withStyles } from "@material-ui/styles";
import { useNavigate } from "react-router-dom";

const styles = {
  root: {
    backgroundColor: "blue",
    height: "100%",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  container: {
    width: "50%",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    flexWrap: "wrap",
  },
  nav: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    color: "white",
  },
  palettes: {
    boxSizing: "border-box",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3, 30%)",
    gridGap: "5%",
  },
};

const AllPalettes = ({ palettes, classes }) => {
  const history = useNavigate();

  const goToPalette = (id) => {
    history(`/palette/${id}`);
  };

  const palettesView = palettes.map((palette) => {
    const { id } = palette;
    return <MiniPalette key={id} {...palette} onClickHandler={goToPalette} />;
  });

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <nav className={classes.nav}>
          <h1>React Colors</h1>
        </nav>
        <div className={classes.palettes}>{palettesView}</div>
      </div>
    </div>
  );
};

export default withStyles(styles)(AllPalettes);
