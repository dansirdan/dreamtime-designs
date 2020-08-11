import React, { useState, useEffect } from "react";
import API from '../utils/API';

const Collection = ({ match, location, collection }) => {
  console.log("COLLECTION", collection, match, location)
  const [art, setArt] = useState([])

  useEffect(() => {
    loadArt()
  }, [])

  function loadArt() {
    API.getArt()
      .then(res => setArt(res.data))
      .catch(err => console.log(err))
  }

  return (
    <div>
      Collection
      <h1>CURRENT Collection: {collection}</h1>
    </div>
  );
};

export default Collection;
