import React from "react";
import Drawer from "@material-ui/core/Drawer";
import { SideNavDetail } from "./NavDetails.js";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import { IconButton } from "@material-ui/core";

// TODO REVIEW STYLES
const useStyles = makeStyles(theme => ({
  root: {
    width: 300,
    maxWidth: 500,
    backgroundColor: theme.palette.background.paper,
  },
  menuButton: {
    marginRight: theme.spacing(5),
  },
}));

export default function TemporaryDrawer() {
  const [state, setState] = React.useState(false);
  const classes = useStyles();

  const toggleDrawer = open => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState(open);
  };

  return (
    <div>
      <IconButton
        edge={false}
        className={classes.menuButton}
        onClick
        onClick={toggleDrawer(true)}
        color='inherit'
        aria-label='menu'>
        <MenuIcon />
      </IconButton>
      <Drawer open={state} onClose={toggleDrawer(false)}>
        <div
          className={classes.root}
          role='presentation'
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}>
          <SideNavDetail />
        </div>
      </Drawer>
    </div>
  );
}
