import React, { useContext } from "react";
import DetailContext from "../utils/DetailContext";

const DetailNav = () => {
  // const { collection, collectionData, detailIndex } = useContext(
  //   GalleryContext
  // );
  const {detail, handleChangeDetail } = useContext(DetailContext);


  return (
    <div>
      { detail ? (
        <ul>
          <li>Collection: {detail.medium}</li>
          <li>Title: {detail.title}</li>
          <li>Description: {detail.description}</li>
          <li>Size:{detail.size}</li>
          <button onClick={handleChangeDetail} data-value={'next'}>
            NEXT
          </button>
          <button onClick={handleChangeDetail} className={'data-value-next'}>
            BACK
          </button>

        </ul>
      ) : (
        "loading"
      )}
    </div>
  );
};

export default DetailNav;
