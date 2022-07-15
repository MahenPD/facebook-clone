import {
  Backdrop,
  Box,
  Fade,
  makeStyles,
  Modal,
  Typography,
} from "@material-ui/core";
import React from "react";

function MessageContainsHateModal({ open, handleClose }) {
  const useStyles = makeStyles((theme) => ({
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      padding: 40,
      borderRadius: 20,
    },
  }));

  const classes = useStyles();

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <div className={classes.paper}>
          <h2 id="transition-modal-title">Following message contains hate.</h2>
          <p id="transition-modal-description">
            Refrain from using inappropriate language.
          </p>
        </div>
      </Fade>
    </Modal>
  );
}

export default MessageContainsHateModal;
