import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { Divider } from "@material-ui/core";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles(theme => ({
  header: {
    textDecoration: "none",
    fontSize: "2rem",
    textAlign: "left",
    color: theme.palette.text.secondary,
  },
}));

const About = () => {
  const classes = useStyles();

  return (
    <Container
      maxWidth='lg'
      style={{
        height: "100%",
        flexGrow: 1,
        padding: 20,
        alignItems: "center",
      }}>
      <Fade in={true}>
        <Grid container>
          <Grid container item justify='center' xs={12} spacing={2}>
            <Grid item xs={12} md={10} lg={8}>
              <Typography
                variant='h2'
                component='h3'
                className={classes.header}>
                  About the Artist
              </Typography>
              <Divider />
            </Grid>
            <Grid item xs={12} md={10} lg={8}>
              <img
                style={{
                  maxHeight: "60%",
                  maxWidth: "50%",
                  float: "left",
                  marginRight: 20,
                  marginBottom: 10,
                }}
                src='images/artist/about.jpg'
                alt='Stand In'
              />
              <Typography variant='body1'>
                I can’t remember any time in my life when I wasn’t drawing or
                interested in some form of art creation. It helped that I grew
                up living around the world in countries like South America,
                Thailand, Indonesia, Greece and the Middle East. Exploring art
                across the world and having the luxury of seeing different
                styles as well as studying under local artists helped create my
                artistic foundation at a young age.
                <br />
                <br />
                Today, traveling the world and in my own backyard of Colorado, I
                find my inspirations to paint. I try not to limit myself to one
                medium, style or concept. Life is about exploration which I love
                to do through art.
                <br />
                <br />
                When inspiration hits, I love taking the experience and breaking
                it down into colors and shapes in my imagination first. You have
                to see it inwardly first in a dream like state before it can
                manifest here in the physical world. This inner vision is what
                energizes me to eventually sit down and dream my paintings to
                life.
                <br />
                <br />
                My purpose is to try and capture in my paintings that moment in
                time when I know everything is in its rightful place in the
                universe.
                <br />
                <br />
                On my website I have displayed paintings available for sale or
                prints and several card series from some of my favorite
                paintings. Also, if you are interested in commissioning a piece
                please feel free to email me at the contact information below.
                {/* <br/>
                <br/>
                <Typography variant="overline">
                  - Melony Mont-Eton
                </Typography> */}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Fade>
    </Container>
  );
};

export default About;
