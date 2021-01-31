import React, { useEffect, useState } from "react";
import GalleryContainer from "../components/GalleryContainer";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import CollectionCard from "../components/CollectionCard";
import currentCollections from "../utils/currect_collections";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import API from "../utils/API";
import Fade from "@material-ui/core/Fade";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
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
  const history = useHistory();

  const [latest, setLatest] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLatest(API.getLatest());
    setLoading(true);
  }, []);

  return (
    <GalleryContainer detail={false}>
      <Fade in={loading}>
        <Grid
          container
          justify="center"
          spacing={5}
          alignContent="center"
          style={{ height: "100%" }}
        >
          <Grid item xs={12}>
            <Typography variant="h2" component="h3" className={classes.header}>
              Latest Work
            </Typography>
            <Divider />
          </Grid>
          <Grid item xs={12}>
            <Container maxWidth="md">
              <Card square={true} elevation={0}>
                <CardActionArea
                  onClick={() => history.push(`/gallery/${latest.medium[0]}`)}
                >
                  <CardMedia
                    component="img"
                    style={{
                      height: "auto",
                      maxWidth: "1000px",
                      maxHeight: "66vh",
                    }}
                    image={latest.path}
                    title={`latest work, click to go to ${latest.medium} gallery`}
                  />
                </CardActionArea>
              </Card>
              <Typography variant="overline">
                {latest.title} / {latest.medium} / {latest.size}
              </Typography>
            </Container>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h2" component="h3" className={classes.header}>
              Collections
            </Typography>
            <Divider />
          </Grid>
          <Grid container spacing={5} item xs={12}>
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
