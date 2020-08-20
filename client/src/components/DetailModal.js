import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import DetailNav from "./DetailNav";
import Detail from "./Detail";

const useStyles = makeStyles(theme => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    width: "80%",
    backgroundColor: theme.palette.background.paper,
    justifyContent: "center",
    padding: theme.spacing(5),
  },
}));

const DetailModal = props => {
  const classes = useStyles();

  const { showDetail, handleToggleDetail } = props;

  return (
    <Modal
      aria-labelledby='transition-modal-title'
      aria-describedby='transition-modal-description'
      className={classes.modal}
      open={showDetail}
      onClose={handleToggleDetail}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}>
      <Fade in={showDetail}>
        <div className={classes.paper}>
          <Detail {...props}/>
          <DetailNav {...props}/>
        </div>
      </Fade>
    </Modal>
  );
};

export default DetailModal;
