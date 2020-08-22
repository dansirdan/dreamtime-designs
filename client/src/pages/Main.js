import React, { useEffect, useState } from "react";
import GalleryContainer from "../components/GalleryContainer";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import CollectionCard from "../components/CollectionCard";
import currentCollections from "../utils/currect_collections";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Divider from "@material-ui/core/Divider";
import API from "../utils/API";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles(theme => ({
  header: {
    textDecoration: "none",
    fontSize: "2rem",
    padding: theme.spacing(2),
    textAlign: "left",
    color: theme.palette.text.secondary,
  },
  heading2: {
    textDecoration: "none",
    padding: theme.spacing(2),
    fontSize: "2rem",
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const Main = () => {
  const classes = useStyles();
  const theme = useTheme();
  // const matchesMD = useMediaQuery(theme.breakpoints.up("md"));

  const [latest, setLatest] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    API.getLatest().then(res => {
      console.log(res.data);
      setLatest(res.data);
      setLoading(true);
    });
  }, []);

  return (
    <GalleryContainer detail={false}>
      <Fade in={loading}>
        <Grid container spacing={3} justify='center' alignContent='center'>
          <Grid item xs={12}>
            <Typography variant='h2' component='h3' className={classes.header}>
              Latest Work
            </Typography>
            <Divider />
          </Grid>
          <Grid item xs={12}>
            <Container maxWidth='md'>
              <Card square={true} elevation={0}>
                <CardMedia
                  component='img'
                  style={{
                    height: "auto",
                    maxWidth: "1000px",
                    maxHeight: "66vh",
                  }}
                  image={latest.path}
                  title={latest.title}
                />
              </Card>
              <Typography variant='subtitle1'>
                {latest.description}
                {/* Dolore ad aliqua exercitation consequat culpa qui in sunt aliquip
              veniam ex excepteur est. Deserunt adipisicing consequat nostrud
              quis commodo velit tempor incididunt est sint ea eiusmod. Elit
              pariatur ut consequat commodo do. */}
              </Typography>
            </Container>
          </Grid>
          <Grid item xs={12}>
            <Typography variant='h2' component='h3' className={classes.header}>
              Collections
            </Typography>
            <Divider />
          </Grid>
          <Grid container item xs={12} spacing={5}>
            {currentCollections.map((collection, index) => {
              return (
                <Grid key={index} item xs={12} sm={6}>
                  <CollectionCard collection={collection} />
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Fade>
    </GalleryContainer>
  );
};

export default Main;
