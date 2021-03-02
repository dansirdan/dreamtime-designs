import React from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { ListItemLink } from "./ListItemLink";
import {
  createMuiTheme,
  ThemeProvider,
  // useTheme,
} from "@material-ui/core/styles";
// import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    maxHeight: "20vh",
  },
  title: {
    textDecoration: "none",
    fontSize: "3rem",
    marginTop: theme.spacing(3),
    padding: theme.spacing(2),
    textAlign: "left",
    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem",
    },
    color: theme.palette.text.secondary,
  },
  pages: {
    textAlign: "left",
    color: theme.palette.text.secondary,
    // padding: theme.spacing(2),
  },
  navs: {},
}));

const NavLinks = () => {
  return (
    <Grid container>
      <Grid item>
        <ListItemLink to='/gallery' primary='Gallery' />
      </Grid>
      <Grid item>
        <ListItemLink to='/about' primary='About' />
      </Grid>
      <Grid item>
        <ListItemLink to='/contact' primary='Contact' />
      </Grid>
    </Grid>
  );
};

const MainNav = () => {
  const classes = useStyles();

  return (
    <Grid container direction="row" alignItems="center" justify="center">
      <Grid item xs={6} sm={4} md={2} lg={3} xl={6}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <img
            style={{
              height: "auto",
              marginLeft: 10,
              width: "100%",
              borderRadius: "50%",
            }}
            src='images/logo.jpeg'
            alt='Dream Time Designs logo'
          />
        </div>
      </Grid>
      <Grid
        container
        item
        alignItems='center'
        xs={12}
        sm={8}
        md={10}
        lg={9}
        xl={12}
        spacing={0}
        className={classes.root}>
        <Grid item xs={12}>
          <Link to='/' style={{ textDecoration: "none" }}>
            <Typography variant='h1' className={classes.title}>
              Melony Mont-Eton
            </Typography>
          </Link>
        </Grid>
        <Grid container item xs={9} sm={8} md={7}>
          <NavLinks />
        </Grid>
      </Grid>
    </Grid>
  );
};

const theme = createMuiTheme();

const HomeNav = () => {
  return (
    <ThemeProvider theme={theme}>
      <MainNav />
    </ThemeProvider>
  );
};

export default HomeNav;
