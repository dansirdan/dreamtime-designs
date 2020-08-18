import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import { GalleryNavDetail } from "../components/NavDetails";
import { Divider } from "@material-ui/core";
import AtAGlance from "../components/AtAGlance";
import Collection from "../components/Collection";
import DetailNav from "../components/DetailNav";
import Detail from "../components/Detail";
import API from "../utils/API";
import GalleryContext from "../utils/GalleryContext";
import CollectionContext from "../utils/CollectionContext";
import DetailContext from "../utils/DetailContext";

const currentCollections = [
  "cards",
  "watercolor",
  "pastels",
  "portraits",
  "other",
];

const Gallery = props => {
  const [gallery, setGallery] = useState([]);

  const [collections, setCollections] = useState([]);
  const [collection, setCollection] = useState("");

  const [showDetail, setShowDetail] = useState(false);
  const [detail, setDetail] = useState({});
  const [detailIndex, setDetailIndex] = useState(0);

  useEffect(() => {
    let pathArr = props.location.pathname.split("/");
    let reqCollection = pathArr[2] || null;
    let reqDetail = pathArr[3] || null;

    console.log(reqDetail || reqCollection || "gallery");
    setShowDetail(false);
    API.getAll().then(res => {
      setGallery(res.data);

      if (reqCollection && currentCollections.includes(reqCollection)) {
        setCollections([]);
        setCollection(reqCollection);
        const newCollections = res.data.filter(
          data => data.medium === reqCollection
        );
        setCollections(newCollections);
      }

      if (reqDetail) {
        API.getOne(reqDetail).then(res => {
          setDetail(res.data);
          setShowDetail(true);
        });
      }
    });
  }, [props.location]);

  const nextDetail = detailIndex => {
    if (detailIndex >= collections.length) {
      detailIndex = 0;
    }
    setDetail(collections[detailIndex]);
    setDetailIndex(detailIndex);
  };

  const previousDetail = detailIndex => {
    if (detailIndex < 0) {
      detailIndex = collections.length - 1;
    }
    setDetail(collections[detailIndex]);
    setDetailIndex(detailIndex);
  };

  const handleChangeDetail = event => {
    const btnName = event.target.getAttribute("data-value");
    if (btnName === "next") {
      const newDetailIndex = detailIndex + 1;
      nextDetail(newDetailIndex);
    } else {
      const newDetailIndex = detailIndex - 1;
      previousDetail(newDetailIndex);
    }
  };

  const handleChangeCollection = collection => {
    if (currentCollections.includes(collection)) {
      setCollection(collection);
      const newCollections = gallery.filter(data => data.medium === collection);
      setCollections(newCollections);
      console.log(newCollections);
    } else {
      return <Redirect to='/gallery' />;
    }
  };

  // const toggleDetail = () => {};
  // const renderContents = () => {};

  let pathArr = props.location.pathname.split("/");
  let isAtAGlance = pathArr.length === 2;
  let reqCollection = pathArr[2] || null;
  // let reqDetail = pathArr[3] || null;

  return (
    <GalleryContext.Provider value={{ gallery }}>
      <CollectionContext.Provider
        value={{ collection, collections, handleChangeCollection }}>
        <DetailContext.Provider value={{ detail, handleChangeDetail }}>
          <Container maxWidth='xl'>
            <Divider />
            <Grid container spacing={0}>
              <Grid item md={2}>
                {/*  hide on screens smaller than md */}
                <Box border={2} display={{ xs: "none", md: "block" }}>
                  <Card style={{ height: "100%" }} square={true} elevation={0}>
                    <GalleryNavDetail />
                    {showDetail ? <DetailNav /> : null}
                  </Card>
                </Box>
              </Grid>
              <Grid item xs={12} md={10}>
                <Box border={2}>
                  <Card style={{ height: "100%" }} square={true} elevation={0}>
                    {showDetail ? <Detail /> : <div></div>}
                    {reqCollection && !showDetail ? (
                      <Collection {...props} />
                    ) : isAtAGlance ? (
                      <AtAGlance />
                    ) : (
                      <div></div>
                    )}
                  </Card>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </DetailContext.Provider>
      </CollectionContext.Provider>
    </GalleryContext.Provider>
  );
};

export default Gallery;
