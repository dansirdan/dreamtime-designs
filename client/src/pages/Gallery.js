// import React, { useEffect, useState, createContext } from "react";
// import { Route, Switch, Redirect } from "react-router-dom";
// import Grid from "@material-ui/core/Grid";
// import Card from "@material-ui/core/Card";
// import Box from "@material-ui/core/Box";
// import Container from "@material-ui/core/Container";
// import { GalleryNavDetail } from "../components/NavDetails";
// import { Divider } from "@material-ui/core";
// import AtAGlance from "../components/AtAGlance";
// import Collection from "../components/Collection";
// import DetailNav from "../components/DetailNav";
// import Detail from "../components/Detail";
// import API from "../utils/API";

// const collections = ["cards", "watercolor", "pastels", "portraits", "other"];

// const Gallery = ({ match, location }) => {
//   const [galleryState, setGalleryState] = useState({
//     subPage: "",
//     galleryData: [],
//     collection: "",
//     collectionData: [],
//     detailIndex: 0,
//   });

//   // NO matter when someone requests a gallery route, load all the data only once and set it to the state
//   // object for all gallery data
//   useEffect(() => {
//     console.log("GALLERY: useEffect()");
//     console.log(location);
//     updateGallery();
//   }, []);

//   const updateGallery = () => {
//     if (galleryState.galleryData.length === 0) {
//       API.getAll().then(res => {
//         setGalleryState({
//           ...galleryState,
//           galleryData: res.data,
//         });
//       });
//     } else if ("") {
//     }
//   };

//   const filterCollection = collection => {
//     let updateCollection = galleryState.galleryData.filter(
//       art => art.medium === collection
//     );
//     setGalleryState({
//       ...galleryState,
//       collectionData: updateCollection,
//       collection,
//     });
//   };

//   const updateDetail = index => {
//     setGalleryState({
//       ...galleryState,
//       detailIndex: index,
//     });
//   };

//   return (
//     <Container maxWidth='xl'>
//       <Divider />
//       <Grid container spacing={0}>
//         <Grid item md={2}>
//           {/*  hide on screens smaller than md */}
//           <Box border={2} display={{ xs: "none", md: "block" }}>
//             <Card style={{ height: "100%" }} square={true} elevation={0}>
//               <GalleryNavDetail />
//               {location.pathname.split("/").length >= 4 ? <DetailNav /> : null}
//             </Card>
//           </Box>
//         </Grid>
//         <Grid item xs={12} md={10}>
//           <Box border={2}>
//             <Card style={{ height: "100%" }} square={true} elevation={0}>
//               <Switch>
//                 <Route
//                   exact
//                   path={`${match.path}/:collection/:id`}
//                   render={props => {
//                     return (
//                       <GalleryContext.Provider value={galleryState}>
//                         <Detail
//                           {...props}
//                           filterCollection={filterCollection}
//                           updateDetail={updateDetail}
//                         />
//                       </GalleryContext.Provider>
//                     );
//                   }}
//                 />
//                 <Route
//                   exact
//                   path={`${match.path}/:collection`}
//                   render={props => {
//                     let isCollection = collections.includes(
//                       props.match.params.collection
//                     );
//                     return isCollection ? (
//                       <GalleryContext.Provider value={galleryState}>
//                         <Collection
//                           updateDetail={updateDetail}
//                           filterCollection={filterCollection}
//                           {...props}
//                         />
//                       </GalleryContext.Provider>
//                     ) : (
//                       <Redirect to='/gallery' />
//                     );
//                   }}
//                 />
//                 <Route exact path={match.path} component={AtAGlance} />
//               </Switch>
//             </Card>
//           </Box>
//         </Grid>
//       </Grid>
//     </Container>
//   );
// };

// export default Gallery;
