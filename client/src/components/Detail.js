import React from "react";

const Detail = ({detail}) => {

  return (
      <img
        style={{maxWidth: "100%", maxHeight: "80%"}}
        src={detail.path}
        alt={detail.title}
      />
  );
};

export default Detail;
