import React from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

const About = () => {
  return (
    <Container maxWidth='lg'>
      <Grid container spacing={0} style={{marginTop: "20px"}}>
        <Grid item xs={12} md={6}>
          <Card style={{ height: "80vh" }} square={true} elevation={0}>
            <CardMedia
              style={{ height: "100%" }}
              image='images/1.jpg'
              title='Stand In'
            />
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <h2>ABOUT MELONY</h2>
          <p>
            Sit ea do minim minim cillum mollit do ea laboris eu ipsum pariatur.
            Et ipsum commodo quis culpa occaecat sint sit ullamco eiusmod quis
            pariatur. Cupidatat consectetur ipsum cupidatat commodo qui mollit
            ea nostrud tempor.
          </p>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
