import React from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import SideNav from "./SideNav";
import { ListItemLink } from "./ListItemLink";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    // flexGrow: 1,
    boxShadow: 'none'
  },
  title: {
    textDecoration: "none",
    fontSize: "3rem",
    padding: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
    },
    [theme.breakpoints.down("sm")]: {
      textAlign: "left",
      fontSize: "1.2rem",
    },
    color: theme.palette.text.secondary,
  },
  pages: {
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
    },
    color: theme.palette.text.secondary,
  },
}));

const NavLinks = () => {
  return (
    <Grid container >
      <Grid item>
        <Box display={{ xs: "none", md: "block" }}>
          <ListItemLink to='/gallery' primary='Gallery' />
        </Box>
      </Grid>
      <Grid item>
        <Box display={{ xs: "none", md: "block" }}>
          <ListItemLink to='/about' primary='About' />
        </Box>
      </Grid>
      <Grid item>
        <Box display={{ xs: "none", md: "block" }}>
          <ListItemLink to='/contact' primary='Contact' />
        </Box>
      </Grid>
    </Grid>
  );
};

const NavBar = () => {
  const classes = useStyles();

  return (
    <AppBar position='static' color='inherit' className={classes.root}>
      <ToolBar disableGutters>
        <Box display={{ xs: "inline", md: "none" }}>
          <SideNav />
        </Box>
        <Grid container spacing={0} justify='center' className={classes.root}>
          <Grid item xs={12}>
            <Link to='/' style={{ textDecoration: "none" }}>
              <Typography variant='h1' className={classes.title}>
                Dream Time Designs
              </Typography>
            </Link>
          </Grid>
          <Grid item>
            <NavLinks />
          </Grid>
        </Grid>
      </ToolBar>
    </AppBar>
  );
};

const Nav = () => {
  return <NavBar />;
};

export default Nav;
