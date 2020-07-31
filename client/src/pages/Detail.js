import React, { useState } from "react";

const Detail = ({ match, location, collection, id }) => {
  console.log("COLLECTION", collection)
  console.log("ID", id)
  return (
    <div>
      Detail
      <h1>CURRENT Detail: {id}</h1>
    </div>
  );
};

export default Detail;
