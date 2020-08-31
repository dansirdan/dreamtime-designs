import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  img: {
    width: "auto",
    maxHeight: "calc(100vh - 300px)",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  }
}));

const Detail = ({detail}) => {
const classes = useStyles();
  return (
      <img
        className={classes.img}
        src={detail.path}
        alt={detail.title}
      />
  );
};

export default Detail;
