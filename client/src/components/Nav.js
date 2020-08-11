import React from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import SideNav from "./SideNav";
import { makeStyles } from "@material-ui/core/styles";
import {
  createMuiTheme,
  ThemeProvider,
  useTheme,
} from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
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
    padding: theme.spacing(1),
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
    },
    color: theme.palette.text.secondary,
  },
}));

const NavLinks = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid item xs={2}>
        <Link to='/gallery' style={{ textDecoration: "none" }}>
          <Typography className={classes.pages}>Gallery</Typography>
        </Link>
      </Grid>
      <Grid item xs={2}>
        <Link to='/about' style={{ textDecoration: "none" }}>
          <Typography className={classes.pages}>About</Typography>
        </Link>
      </Grid>
      <Grid item xs={2}>
        <Link to='/contact' style={{ textDecoration: "none" }}>
          <Typography className={classes.pages}>Contact</Typography>
        </Link>
      </Grid>
    </React.Fragment>
  );
};

const GridBurger = () => {
  return (
    <React.Fragment>
      <Grid item xs={1}>
        <SideNav />
      </Grid>
    </React.Fragment>
  );
};

const NavBar = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  const classes = useStyles();

  return (
    <Grid
      container
      alignItems='center'
      justify='center'
      spacing={0}
      className={classes.root}>
      {matches ? (
        <Grid item xs={1}>
          <SideNav />
        </Grid>
      ) : null}
      <Grid item xs={matches ? 11 : 12}>
        <Link to='/' style={{ textDecoration: "none" }}>
          <Typography variant='h1' className={classes.title}>
            Melony Mont-Eton
          </Typography>
        </Link>
      </Grid>
      {matches ? null : <NavLinks />}
    </Grid>
  );
};

const theme = createMuiTheme();

const Nav = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
    </ThemeProvider>
  );
};

export default Nav;
