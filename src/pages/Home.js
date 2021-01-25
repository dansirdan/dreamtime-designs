import React from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import HomeNav from "../components/HomeNav";
import Fade from "@material-ui/core/Fade";


const useStyles = makeStyles(theme => ({
  title: {
    textDecoration: "none",
    fontSize: "1rem",
    padding: theme.spacing(2),
  },
}));

const MainContainer = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={0}>
      <Fade in={true}>
      <Grid item xs={12} md={6}>
        {/*  hide on screens smaller than md */}
        <Box display={{ xs: "none", md: "block" }}>
          <Card style={{ height: "100vh" }} square={true} elevation={0}>
            <CardMedia
              style={{ height: "100%" }}
              image='https://dreamtimedesigns.s3-us-west-2.amazonaws.com/images/1.jpg'
              title='Stand In'
            />
          </Card>
        </Box>
        {/* hide on screens wider than md */}
        <Box display={{ xs: "block", md: "none" }}>
          <Card style={{ height: "50vh" }} square={true} elevation={0}>
            <CardMedia
              style={{ height: "100%" }}
              image='https://dreamtimedesigns.s3-us-west-2.amazonaws.com/images/1.jpg'
              title='Stand In'
            />
          </Card>
        </Box>
      </Grid>
        </Fade>
      <Grid container item xs={12} md={6}>
        <Grid item xs={12}>
          <Typography variant='h2' className={classes.title}>
            Dream Time Designs by
          </Typography>
        </Grid>
        <Grid item>
          <HomeNav />
        </Grid>
      </Grid>
    </Grid>
  );
};

const Home = () => {
  return <MainContainer />;
};

export default Home;
