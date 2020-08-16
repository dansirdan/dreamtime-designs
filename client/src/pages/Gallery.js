// import React, { useEffect } from "react";
// import Grid from "@material-ui/core/Grid";
// import Card from "@material-ui/core/Card";
// import Box from "@material-ui/core/Box";
// import Container from "@material-ui/core/Container";
// import Typography from "@material-ui/core/Typography";
// import { makeStyles } from "@material-ui/core/styles";
// import { GalleryNavDetail } from "../components/NavDetails";
// import { Divider } from "@material-ui/core";
// import API from "../utils/API";
// import AtAGlance from "../components/AtAGlance";
// import Collection from "../components/Collection";
// import Detail from "../components/Detail";
// import DetailNav from "../components/DetailNav";

// const useStyles = makeStyles(theme => ({
//   root: {
//     flexGrow: 1,
//   },
//   title: {
//     textDecoration: "none",
//     fontSize: "1rem",
//     padding: theme.spacing(2),
//   },
//   div: {
//     padding: theme.spacing(2),
//     textAlign: "center",
//     color: theme.palette.text.secondary,
//   },
// }));

// const Gallery = ({ request }) => {
//   const classes = useStyles();
//   const [state, dispatch] = useStoreContext();

//   useEffect(() => {
//     if (request.collection) {
//       dispatch({
//         type: SET_CURRENT_COLLECTION,
//         collection: request.collection,
//       });
//     }
//     API.getAll()
//       .then(res => dispatch({ type: UPDATE_ART, art: res.data }))
//       .catch(err => console.log(err));
//   }, [request.page, request.collection]);

//   let galleryPage;
//   switch (request.page) {
//     case "gallery":
//       galleryPage = <AtAGlance />;
//       break;
//     case "collection":
//       galleryPage = <Collection />;
//       break;
//     case "detail":
//       galleryPage = <Detail />;
//       break;
//     default:
//       galleryPage = <AtAGlance />;
//       break;
//   }

//   return (
//     <Container maxWidth='lg' className={classes.root}>
//       <Divider />
//       <Grid container spacing={0}>
//         <Grid item md={3}>
//           {/*  hide on screens smaller than md */}
//           <Box border={2} display={{ xs: "none", md: "block" }}>
//             <Card style={{ height: "100%" }} square={true} elevation={0}>
//               <GalleryNavDetail />
//             </Card>
//           </Box>
//         </Grid>
//         <Grid item xs={12} md={9}>
//           {/* hide on screens wider than md */}
//           <Box border={2}>
//             <Card style={{ height: "100%" }} square={true} elevation={0}>
//               <p>{request.detail ? "YES A DETAIL" : "No Details"}</p>
//               <p>
//                 {request.collection
//                   ? "YES A COLLECTION: " + request.collection
//                   : "No Collection"}
//               </p>
//               {request.page ? (
//                 <div>{galleryPage}</div>
//               ) : (
//                 <div>LOADING</div>
//               )}
//             </Card>
//           </Box>
//         </Grid>
//       </Grid>
//     </Container>
//   );
// };

// export default Gallery;
