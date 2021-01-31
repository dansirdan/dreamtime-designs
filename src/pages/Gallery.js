import React, { useEffect, useState } from "react";
import API from "../utils/API";
import { useParams } from "react-router-dom";
import Collection from "../components/Collection";
import DetailModal from "../components/DetailModal";

const Gallery = () => {
  const { collectionParam } = useParams();
  const [collections, setCollections] = useState([]);

  const [loading, setLoading] = useState(true);

  const [detail, setDetail] = useState({});
  const [detailIndex, setDetailIndex] = useState(0);
  const [showDetail, setShowDetail] = useState(false);

  useEffect(() => {
    const galleryArt = API.getAll(collectionParam);
    setCollections(galleryArt);
    setLoading(true);
  }, [collectionParam]);

  const nextDetail = (incomingIndex) => {
    if (incomingIndex >= collections.length) {
      incomingIndex = 0;
    }
    setDetail(collections[incomingIndex]);
    setDetailIndex(incomingIndex);
  };

  const previousDetail = (incomingIndex) => {
    if (incomingIndex < 0) {
      incomingIndex = collections.length - 1;
    }
    setDetail(collections[incomingIndex]);
    setDetailIndex(incomingIndex);
  };

  const handleChangeDetail = (direction) => {
    if (direction === "next") {
      const newDetailIndex = detailIndex + 1;
      nextDetail(newDetailIndex);
    } else {
      const newDetailIndex = detailIndex - 1;
      previousDetail(newDetailIndex);
    }
  };

  const handleToggleDetail = (event) => {
    const btnName = event.target.getAttribute("data-modal");
    if (btnName === "show") {
      const imgIndex = parseInt(event.target.getAttribute("data-index"));
      setDetailIndex(imgIndex);
      setDetail(collections[imgIndex]);
      setShowDetail(true);
    } else {
      setShowDetail(false);
    }
  };

  return (
    <React.Fragment>
      <Collection
        collection={collectionParam}
        handleToggleDetail={handleToggleDetail}
        collections={collections}
        loading={loading}
      />
      <DetailModal
        showDetail={showDetail}
        handleToggleDetail={handleToggleDetail}
        detail={detail}
        handleChangeDetail={handleChangeDetail}
      />
    </React.Fragment>
  );
};

export default Gallery;
