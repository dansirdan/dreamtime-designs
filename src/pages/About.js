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
                Melony Mont-Eton
              </Typography>
              <Divider />
              <Typography
                variant='h2'
                component='h3'
                className={classes.header}>
                Artist
              </Typography>
            </Grid>
            <Grid item xs={12} md={10} lg={8}>
            <Typography variant='body1'>
              Drawing, painting, or some form of art creation has always been a part of Melony Mont-
Eton’s life. She grew up living around the world in countries like South America, Thailand,
Indonesia, Greece and the Middle East. Her exposure to this rich tapestry of cultural
influences during her formative years laid the foundation for her unique artistic voice.
                <br />
                <br />
                As a seasoned traveler, Melony draws inspiration from her global experiences and the
scenic landscape of her current home in Colorado. Her artistic philosophy is one of
unrestricted exploration, refusing to confine herself to a singular medium, style, or
concept. For her, life is an ongoing voyage of discovery, and art serves as a medium
through which she can express and navigate this exploration.
              </Typography>
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
                When struck by inspiration, Melony follows a unique process. She transforms her
experiences into a kaleidoscope of colors and shapes within her imagination, creating a
dream-like state. This internal vision serves as the blueprint for her paintings, allowing her
to translate the intangible into tangible masterpieces.
                <br />
                <br />
                Her dedication to artistic excellence was recognized in 2021 when she attained the status
of a Signature Member of the Colorado Watercolor Society. This achievement
underscores her commitment to the watercolor medium and her proficiency in capturing
the essence of her surroundings through her artwork.
                {/* <br/>
                <br/>
                <Typography variant="overline">
                  - Melony Mont-Eton
                </Typography> */}
                <br />
                <br />
                Melony, a registered landscape architect resides in Parker, Colorado. In her 36 year
career she worked on projects across the United States specializing in project
management, training and estimating. Melony engages with a diverse range of art mediums,
including pastels, acrylics, alcohol inks and watercolors. Her story is an inspiration for
those who believe in the transformative power of art and the endless possibilities that
come with a life dedicated to exploration and creativity.
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
