import React, { useContext } from "react";
import DetailNav from "./DetailNav";
import Box from "@material-ui/core/Box";
import DetailContext from "../utils/DetailContext";

const Detail = () => {
  const { detail } = useContext(DetailContext);

  return (
    <div>
      {detail ? (
        <div>
          <img
            style={{ maxWidth: "100%", minWidth: "100%" }}
            src={detail.path}
            alt={detail.title}
          />
          <p>ID: {detail._id}</p>
          <Box border={2} display={{ xs: "block", md: "none" }}>
            <DetailNav />
          </Box>
        </div>
      ) : (
        "loading"
      )}
    </div>
  );
};

export default Detail;
