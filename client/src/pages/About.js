import React from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { Divider } from "@material-ui/core";

const About = () => {
  return (
    <Container
      maxWidth='lg'
      style={{ height: "100%", flexGrow: 1, padding: 20, alignItems: "center" }}>
      <Grid container spacing={4} style={{ marginTop: "20px" }}>
        <Grid item xs={12} md={6}>
          <Card square={true} elevation={0}>
            <CardMedia
              style={{ height: "50vh" }}
              image='images/0.jpg'
              title='Stand In'
            />
          </Card>
        </Grid>
        <Grid container item xs={12} md={6} spacing={4}>
          <Grid item xs={12}>
            <Typography variant='h5'>Statement</Typography>
            <Divider />
            <br />
            <Typography variant='body1'>
              Sit ea do minim minim cillum mollit do ea laboris eu ipsum
              pariatur. Et ipsum commodo quis culpa occaecat sint sit ullamco
              eiusmod quis pariatur. Cupidatat consectetur ipsum cupidatat
              commodo qui mollit ea nostrud tempor.
            </Typography>
            <br />
            <Typography variant='body1'>- Melony Mont-Eton</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant='h5' component='h6'>About the Artist</Typography>
            <Divider />
            <br />
            <Typography variant='body1'>
              Sit ea do minim minim cillum mollit do ea laboris eu ipsum
              pariatur. Et ipsum commodo quis culpa occaecat sint sit ullamco
              eiusmod quis pariatur. Cupidatat consectetur ipsum cupidatat
              commodo qui mollit ea nostrud tempor.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
