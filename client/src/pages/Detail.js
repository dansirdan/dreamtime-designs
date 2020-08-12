import React from "react";
import { GalleryNavDetail } from '../components/NavDetails'
import {
  createMuiTheme,
  ThemeProvider,
  useTheme,
} from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

// PROPS
// collection = [ cards || watercolor || pastels || portraits || other ]
// id = the MongoDB id

// TODO: Use reducer to get state and filter for specific collection and id
const DetailContainer = ({collection, id}) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div>
      DETAIL
      <h1>CURRENT Detail: {id}</h1>
      {matches ? null : <GalleryNavDetail />}
    </div>
  );
};
const theme = createMuiTheme();

const Detail = ({ collection, id }) => {
  return (
    <ThemeProvider theme={theme}>
      <DetailContainer collection={collection} id={id} />
    </ThemeProvider>
  );
};

export default Detail;
