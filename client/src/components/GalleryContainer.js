import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import { GalleryNavDetail } from "../components/NavDetails";

const GalleryContainer = props => {
  return (
    <Grid container spacing={0} style={{ height: "100%", flexGrow: 1 }}>
      <Grid item md={2} xs={false}>
        <Box
          style={{ height: "100%", backgroundColor: "white" }}
          display={{ xs: "none", md: "block" }}>
          <GalleryNavDetail />
        </Box>
      </Grid>
      <Grid item xs={12} md={10}>
        <Container maxWidth='xl' style={{ padding: "20px" }}>
          {props.children}
        </Container>
      </Grid>
    </Grid>
  );
};

export default GalleryContainer;
