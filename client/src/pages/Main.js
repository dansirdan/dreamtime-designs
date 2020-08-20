import React from "react";
import GalleryContainer from "../components/GalleryContainer";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

const Main = () => {
  return (
    <GalleryContainer detail={false}>
      <Container maxWidth='lg'>
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <Card style={{ height: "80vh" }} square={true} elevation={0}>
              <h2>Latest Work: </h2>
              <CardMedia
                style={{ height: "100%" }}
                image='images/1.jpg'
                title='Stand In'
              />
            </Card>
          </Grid>
          <Grid item xs={12}>
            <h3>Collections: </h3>
            <Grid container>
              <Grid container item>
                <Grid item xs={4}>
                  <Card style={{ height: "80vh" }} square={true} elevation={0}>
                    <p>collection 1</p>
                    <CardMedia
                      style={{ height: "100%" }}
                      image='images/1.jpg'
                      title='Stand In'
                    />
                  </Card>
                </Grid>
                <Grid item xs={4}>
                  <Card style={{ height: "80vh" }} square={true} elevation={0}>
                    <p>collection 1</p>
                    <CardMedia
                      style={{ height: "100%" }}
                      image='images/1.jpg'
                      title='Stand In'
                    />
                  </Card>
                </Grid>
                <Grid item xs={4}>
                  <Card style={{ height: "80vh" }} square={true} elevation={0}>
                    <p>collection 1</p>
                    <CardMedia
                      style={{ height: "100%" }}
                      image='images/1.jpg'
                      title='Stand In'
                    />
                  </Card>
                </Grid>
              </Grid>
              <Grid container item>
                <Grid item xs={4}>
                  <Card style={{ height: "80vh" }} square={true} elevation={0}>
                    <p>collection 1</p>
                    <CardMedia
                      style={{ height: "100%" }}
                      image='images/1.jpg'
                      title='Stand In'
                    />
                  </Card>
                </Grid>
                <Grid item xs={4}>
                  <Card style={{ height: "80vh" }} square={true} elevation={0}>
                    <p>collection 1</p>
                    <CardMedia
                      style={{ height: "100%" }}
                      image='images/1.jpg'
                      title='Stand In'
                    />
                  </Card>
                </Grid>
                <Grid item xs={4}>
                  <Card style={{ height: "80vh" }} square={true} elevation={0}>
                    <p>collection 1</p>
                    <CardMedia
                      style={{ height: "100%" }}
                      image='images/1.jpg'
                      title='Stand In'
                    />
                  </Card>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </GalleryContainer>
  );
};

export default Main;
