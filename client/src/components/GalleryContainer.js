import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import { GalleryNavDetail } from "../components/NavDetails";
import { Divider } from "@material-ui/core";

const GalleryContainer = props => {
  return (
    <Grid container spacing={0}>
      <Grid item md={2}>
        <Box border={2} display={{ xs: "none", md: "block" }}>
          <Card style={{ height: "100%" }} square={true} elevation={0}>
            <GalleryNavDetail />
          </Card>
        </Box>
      </Grid>
      <Grid item xs={12} md={10}>
        <Container maxWidth='xl'>
          <Divider />
          <Box border={2}>
            <Card style={{ height: "100%" }} square={true} elevation={0}>
              {props.children}
            </Card>
          </Box>
        </Container>
      </Grid>
    </Grid>
  );
};

export default GalleryContainer;
