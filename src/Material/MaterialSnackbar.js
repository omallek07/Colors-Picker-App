import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

const MaterialSnackbar = ({ isOpen, isOpenHandler, message }) => {
  return (
    <Snackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      open={isOpen}
      autoHideDuration={3000}
      ContentProps={{
        "aria-describedby": "message-id",
      }}
      onClose={() => isOpenHandler(false)}
      message={<span id="message-id">{message}</span>}
      action={[
        <IconButton
          onClick={() => isOpenHandler(!isOpen)}
          color="inherit"
          key="close"
          aria-label="close"
        >
          <CloseIcon />
        </IconButton>,
      ]}
    />
  );
};

export default MaterialSnackbar;
