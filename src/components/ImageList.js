import "./ImagesList.css";
import React from "react";
import ImageCard from "./ImageCard";

const ImageList = (props) => {
  //Card Version
  const images = props.images.map((image) => {
    return <ImageCard key={image.id} image={image} />;
  });
  return <div className="image-list">{images}</div>;
};

export default ImageList;

// const images = props.images.map((image) => {
//     return (
//       <img key={image.id} src={image.urls.regular} alt={image.description} />
//     );

//destructed version
//  const images = props.images.map(({ id, urls, description }) => {
//     return <img key={id} src={urls.regular} alt={description} />;
//   });
