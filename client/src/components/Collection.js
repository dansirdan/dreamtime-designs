import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles(theme => ({
  header: {
    marginTop: 20,
    textDecoration: "none",
    fontSize: "2rem",
    textAlign: "left",
    color: theme.palette.text.secondary,
  },
}));

const Collection = props => {
  const { loading, collection, collections, handleToggleDetail } = props;
  const classes = useStyles();
  let procCollection = collection.charAt(0).toUpperCase() + collection.slice(1);

  return (
    <React.Fragment>
        <Fade in={loading}>
          <Grid
            container
            justify='flex-start'
            alignItems='flex-start'
            direction='column'
            >
            <Grid item xs={12}>
              <Typography
                variant='h2'
                component='h3'
                className={classes.header}>
                {procCollection}
              </Typography>
            </Grid>
            <Grid container spacing={3} item xs={12} md={10}>
              {collections.map((tile, index) => (
                <Grid
                  item
                  key={tile._id}
                  xs={12}
                  md={tile.cols || 4}
                  sm={tile.cols || 6}>
                  <Card square={true} elevation={0}>
                    {/* TODO: */}
                    {/* 
                  - place size height and width in image database
                  - render photos in responsive grid based on size and screensize
                  - for now just keep it like this. (@_@)7
                  */}
                    <CardMedia
                      component='img'
                      style={{
                        cursor: "pointer",
                        height: "auto",
                        maxWidth: "600px",
                        maxHeight: "60vh",
                      }}
                      image={tile.path}
                      alt={tile.title}
                      onClick={handleToggleDetail}
                      data-modal={"show"}
                      data-index={index}
                    />
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Fade>
    </React.Fragment>
  );
};

export default Collection;
