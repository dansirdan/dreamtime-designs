import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import DetailNav from "./DetailNav";
import Detail from "./Detail";
import Grid from "@material-ui/core/Grid";
import { IconButton } from "@material-ui/core";
import { Close } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    width: "80%",
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(5),
    outline: "none",
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
    },
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(2),
      width: "100%",
    },
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
          <Grid
            container
            direction='column'
            justify='center'
            alignItems='center'>
            <Grid container item justify='flex-end' xs={12}>
              <IconButton
                edge='end'
                onClick={handleToggleDetail}
                color='inherit'
                size='medium'
                aria-label='close'>
                <Close />
              </IconButton>
            </Grid>
            <Grid item xs={12}>
              <Detail {...props} />
            </Grid>
          </Grid>
          <DetailNav {...props} />
        </div>
      </Fade>
    </Modal>
  );
};

export default DetailModal;
