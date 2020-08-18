import React, { useContext } from "react";
import DetailContext from "../utils/DetailContext";

const DetailNav = () => {
  // const { collection, collectionData, detailIndex } = useContext(
  //   GalleryContext
  // );
  const {detail} = useContext(DetailContext);


  return (
    <div>
      { detail ? (
        <ul>
          <li>Collection: {detail.medium}</li>
          <li>Title: {detail.title}</li>
          <li>Description: {detail.description}</li>
          <li>Size:{detail.size}</li>
        </ul>
      ) : (
        "loading"
      )}
    </div>
  );
};

export default DetailNav;
