import React from "react";

const DetailNav = ({ detail, handleChangeDetail }) => {
  return (
    <React.Fragment>
      <p>Collection: {detail._id}</p>
      <p>Title: {detail.title}</p>
      <p>Description: {detail.description}</p>
      <p>Size:{detail.size}</p>
      <button onClick={handleChangeDetail} data-value={"next"}>
        NEXT
      </button>
      <button onClick={handleChangeDetail} data-value={"prev"}>
        BACK
      </button>
    </React.Fragment>
  );
};

export default DetailNav;
