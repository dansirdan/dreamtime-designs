import React, { useEffect, useState, createContext, useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import { GalleryNavDetail } from "../components/NavDetails";
import { Divider } from "@material-ui/core";
import AtAGlance from "../components/AtAGlance";
import Collection from "../components/Collection";
import DetailNav from "../components/DetailNav";

const GalleryNew = ({ match, location }) => {
  const collections = ["cards", "watercolor", "pastels", "portraits", "other"];

  return (
    <Container maxWidth='xl'>
      <Divider />
      <Grid container spacing={0}>
        <Grid item md={2}>
          {/*  hide on screens smaller than md */}
          <Box border={2} display={{ xs: "none", md: "block" }}>
            <Card style={{ height: "100%" }} square={true} elevation={0}>
              <GalleryNavDetail />
              {location.pathname.split("/").length >= 4 ? <DetailNav /> : null}
            </Card>
          </Box>
        </Grid>
        <Grid item xs={12} md={10}>
          <Box border={2}>
            <Card style={{ height: "100%" }} square={true} elevation={0}>
              {/* TODO NESTED ROUTE */}
              <Route exact path={`${match.path}`} component={AtAGlance} />
              <Route
                exact
                path={`${match.path}/:collection`}
                render={(props)=> {
                  let isCollection = collections.includes(props.match.params.collection);
                  return isCollection ? <Collection {...props}/> : <Redirect to="/gallery"/>;
                }}
              />
              {/* DETAIL WILL BECOME A FULL SCREEN IMAGE */}
              {/* <Route
                    exact
                    path={`${match.path}/:collection/:id`}
                    component={Detail}
                  /> */}
              {/* <Box border={2} display={{ xs: "block", md: "none" }}>
                <Card style={{ height: "100%" }} square={true} elevation={0}>
                  {location.pathname.split("/").length >= 4 ? (
                    <DetailNav />
                  ) : null}
                </Card>
              </Box> */}
            </Card>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default GalleryNew;
