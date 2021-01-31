import React from "react";
import styled, { keyframes } from "styled-components";
import LazyLoad from "react-lazyload";
import CardMedia from "@material-ui/core/CardMedia";
import Card from "@material-ui/core/Card";

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const loadingAnimation = keyframes`
  0% {
    background-color: #fff;
  }
  50% {
    background-color: #ccc;
  }
  100% {
    background-color: #fff;
  }
`;

const Placeholder = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  animation: ${loadingAnimation} 1s infinite;
`;

// const StyledImage = styled.img`
//   position: absolute;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
// `;

const LazyImage = ({ src, alt, handleToggleDetail, index }) => {
  const refPlaceholder = React.useRef();

  const removePlaceholder = () => {
    refPlaceholder.current.remove();
  };

  return (
    <ImageWrapper>
      <Placeholder ref={refPlaceholder} />
      <LazyLoad>
        <Card square={true} elevation={0}>
          <CardMedia
            component="img"
            onLoad={removePlaceholder}
            onError={removePlaceholder}
            style={{
              cursor: "pointer",
              height: "auto",
            }}
            image={src}
            alt={alt}
            onClick={handleToggleDetail}
            data-modal={"show"}
            data-index={index}
          />
        </Card>
      </LazyLoad>
    </ImageWrapper>
  );
};

export default LazyImage;
