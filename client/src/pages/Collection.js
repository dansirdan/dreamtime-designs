import React, { useState, useEffect } from "react";
import { GalleryNavDetail } from '../components/NavDetails'
import API from '../utils/API';
import {
  createMuiTheme,
  ThemeProvider,
  useTheme,
} from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const CollectionContainer = ({collection}) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div>  
      Collection
      <h1>CURRENT Collection: {collection}</h1>
      {matches ? null : <GalleryNavDetail />}
    </div>
  );
}

const theme = createMuiTheme();


const Collection = ({ collection }) => {
  console.log("COLLECTION", collection)
  const [art, setArt] = useState([])

  useEffect(loadArt, [])

  function loadArt() {
    console.log(art);
    API.getArt()
      .then(res => setArt(res.data))
      .catch(err => console.log(err))
  }

  return (
    <ThemeProvider theme={theme}>
      <CollectionContainer collection></CollectionContainer>
    </ThemeProvider>
  );
};

export default Collection;
