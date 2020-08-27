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
    API.getAll(collectionParam).then(res => {
      setCollections(res.data);
      setLoading(true);
    });
  }, [collectionParam]);

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
    const btnName = parseInt(event.target.getAttribute("data-value"));
    if (btnName === "next") {
      const newDetailIndex = detailIndex + 1;
      console.log(newDetailIndex);
      nextDetail(newDetailIndex);
    } else {
      const newDetailIndex = detailIndex - 1;
      previousDetail(newDetailIndex);
    }
  };

  const handleToggleDetail = event => {
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
