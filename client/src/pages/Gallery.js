import React from "react";
import { GalleryNavDetail } from "../components/NavDetails";
import {
  createMuiTheme,
  ThemeProvider,
  useTheme,
} from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const GalleryContainer = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div>
      GALLERY
      {matches ? null : <GalleryNavDetail />}
    </div>
  );
};

const theme = createMuiTheme();

const Gallery = () => {
  return (
    <ThemeProvider theme={theme}>
      <GalleryContainer></GalleryContainer>
    </ThemeProvider>
  );
};

export default Gallery;
