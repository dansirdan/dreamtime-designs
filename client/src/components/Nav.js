import React from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import SideNav from "./SideNav";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

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
        <Box display={{ xs: "none", md: "block" }}>
          <Link to='/gallery' style={{ textDecoration: "none" }}>
            <Typography className={classes.pages}>Gallery</Typography>
          </Link>
        </Box>
      </Grid>
      <Grid item xs={2}>
        <Box display={{ xs: "none", md: "block" }}>
          <Link to='/about' style={{ textDecoration: "none" }}>
            <Typography className={classes.pages}>About</Typography>
          </Link>
        </Box>
      </Grid>
      <Grid item xs={2}>
        <Box display={{ xs: "none", md: "block" }}>
          <Link to='/contact' style={{ textDecoration: "none" }}>
            <Typography className={classes.pages}>Contact</Typography>
          </Link>
        </Box>
      </Grid>
    </React.Fragment>
  );
};

const NavBar = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      alignItems='center'
      justify='center'
      spacing={0}
      className={classes.root}>
      <Grid container item justify='center' xs={12}>
        <Grid item xs={1} md={false}>
          <Box display={{ xs: "inline", md: "none" }}>
            <SideNav />
          </Box>
        </Grid>
        <Grid item xs={11} md={12}>
          <Link to='/' style={{ textDecoration: "none" }}>
            <Typography variant='h1' className={classes.title}>
              Melony Mont-Eton
            </Typography>
          </Link>
        </Grid>
      </Grid>
      <Grid container item justify='center' xs={6}>
        <NavLinks />
      </Grid>
    </Grid>
  );
};

const Nav = () => {
  return <NavBar />;
};

export default Nav;
