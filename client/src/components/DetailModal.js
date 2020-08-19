import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles(theme => ({
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    paper: {
      width: "80%",
  
      backgroundColor: theme.palette.background.paper,
      // border: "2px solid #000",
      justifyContent: "center",
      // boxShadow: theme.shadows[5],
      padding: theme.spacing(5),
    },
  }));

const DetailModal = props =>{
    const classes = useStyles();

    const {showDetail, handleToggleDetail, detail, handleChangeDetail} = props;

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
            <p>Collection: {detail._id}</p>
            <p>Title: {detail.title}</p>
            <p>Description: {detail.description}</p>
            <p>Size:{detail.size}</p>
            <button onClick={handleChangeDetail} data-value={'next'}>
            NEXT
          </button>
          <button onClick={handleChangeDetail} data-value={'prev'}>
            BACK
          </button>
          </div>
        </Fade>
      </Modal>
    )
} 

export default DetailModal;