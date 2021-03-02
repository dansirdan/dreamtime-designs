import React from "react";
import { Link } from "react-router-dom";
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
  title: {
    border: "solid black 1px",
    textDecoration: "none",
    fontSize: "2rem",
    marginTop: theme.spacing(3),
    padding: theme.spacing(2),
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem",
    },
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
              <div
                style={{
                  float: "left",
                  width: "50%",
                  display: "flex",
                  flexDirection: "column",
                }}>
                <img
                  style={{
                    padding: 10,
                    margin: "auto",
                    maxHeight: "60%",
                    maxWidth: "70%",
                  }}
                  src='images/artist/about.jpg'
                  alt='Stand In'
                />
                <Typography
                  variant='caption'
                  style={{ margin: "auto", padding: 5 }}>
                  Plein Air Painting on the Isle of Skye, Scotland
                </Typography>
              </div>
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
                manifest it here in the physical world. The inner vision that
                emerges is what energizes me to eventually sit down and dream my
                paintings to life.
                <br />
                <br />
                When I see a scene that catches my eye, whether it is the color,
                the composition, or the subject matter, I try and look beyond
                those ideas and see it with my heart. My purpose is to try and
                capture in my paintings that moment in time when I know
                everything is in its rightful place in the universe.
                {/* <br/>
                <br/>
                <Typography variant="overline">
                  - Melony Mont-Eton
                </Typography> */}
              </Typography>
            </Grid>
            <Grid item xs={12} md={10} lg={8}>
              <hr />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <img
                  style={{
                    padding: 10,
                    margin: "auto",
                    maxHeight: "50%",
                    maxWidth: "50%",
                    minWidth: "50%",
                    borderRadius: "50%",
                  }}
                  src='images/artist/melony-portrait.jpg'
                  alt='The artist, Melony Mont-Eton'
                />
              </div>
              <hr />
            </Grid>
            <Grid item xs={12} md={10} lg={8}>
              <Typography
                variant='body1'
                style={{ margin: "auto", paddingBottom: 10 }}>
                On my website I have displayed paintings available for sale or
                prints and several card series from some of my favorite
                paintings. Also, if you are interested in commissioning a piece
                please feel free to email me at the contact information below.
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              md={10}
              lg={8}
              style={{ marginTop: 20, marginBottom: 20 }}>
              <Link to='/contact' style={{ textDecoration: "none" }}>
                <Typography variant='h1' className={classes.title}>
                  Contact Me
                </Typography>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Fade>
    </Container>
  );
};

export default About;
