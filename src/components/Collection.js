import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Fade from "@material-ui/core/Fade";
import Divider from "@material-ui/core/Divider";
import GalleryContainer from "./GalleryContainer";
import LazyImage from "./LazyImage";

const useStyles = makeStyles((theme) => ({
  header: {
    marginTop: 20,
    textDecoration: "none",
    fontSize: "2rem",
    textAlign: "left",
    color: theme.palette.text.secondary,
  },
}));

const Collection = (props) => {
  const { loading, collection, collections, handleToggleDetail } = props;
  const classes = useStyles();
  let procCollection = collection.charAt(0).toUpperCase() + collection.slice(1);

  return (
    <GalleryContainer detail={false}>
      <Fade in={loading}>
        <Grid
          container
          justify="flex-start"
          alignItems="flex-start"
          spacing={5}
        >
          <Grid item xs={12}>
            <Typography variant="h2" component="h3" className={classes.header}>
              {procCollection.replace("Birds-of-prey", "Birds of Prey")}
            </Typography>
            <Divider />
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={5}>
              {collections.map((tile, index) => (
                <Grid
                  item
                  key={tile._id}
                  xs={12}
                  md={tile.cols || 4}
                  sm={tile.cols || 6}
                >
                  <LazyImage
                    src={tile.path}
                    alt={tile.title}
                    handleToggleDetail={handleToggleDetail}
                    index={index}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Fade>
    </GalleryContainer>
  );
};

export default Collection;
