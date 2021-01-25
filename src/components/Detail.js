import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  img: {
    maxWidth: "100%",
    width: "auto",
    maxHeight: "calc(100vh - 300px)",
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
