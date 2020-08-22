import React from "react";

const Detail = ({detail}) => {

  return (
      <img
        style={{width: "100%", height:'auto'}}
        src={detail.path}
        alt={detail.title}
      />
  );
};

export default Detail;
