import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import { GalleryNavDetail } from "../components/NavDetails";

const GalleryContainer = props => {
  return (
    <Grid container spacing={0}>
      <Grid item md={2}>
        <Box style={{height: "100%", backgroundColor:"white"}} display={{ xs: "none", md: "block" }}>
          <GalleryNavDetail />
        </Box>
      </Grid>
      <Grid item xs={12} md={10}>
        <Container maxWidth='xl'>{props.children}</Container>
      </Grid>
    </Grid>
  );
};

export default GalleryContainer;
