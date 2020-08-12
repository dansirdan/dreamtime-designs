import React from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import {
  useMediaQuery,
  createMuiTheme,
  ThemeProvider,
  useTheme,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import HomeNav from "../components/HomeNav";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    textDecoration: "none",
    fontSize: "1rem",
    padding: theme.spacing(2),
  },
  div: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const MainContainer = () => {
  const theme = useTheme();
  const mobileUI = useMediaQuery(theme.breakpoints.down("sm"));
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={12} md={6}>
          <Card style={{ height: mobileUI ? "50vh" : "100vh" }}>
            <CardMedia
              style={{ height: "100%" }}
              image='images/1.jpg'
              title='Stand In'
            />
          </Card>
        </Grid>
        <Grid container item xs={12} md={6}>
          {/* <Container
            maxWidth='md'
            style={{
              backgroundColor: "#cfe8fc",
              height: mobileUI ? "50vh" : "100vh",
            }}> */}
            <Grid item xs={12}>
              <Typography variant='h2' className={classes.title}>Dreamtime Designs</Typography>
            </Grid>
            <Grid item>
            <HomeNav />
            </Grid>
          {/* </Container> */}
        </Grid>
      </Grid>
    </div>
  );
};

const theme = createMuiTheme();

const Home = () => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <MainContainer />
    </ThemeProvider>
  );
};

export default Home;
