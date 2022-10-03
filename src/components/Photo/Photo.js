import React from "react";

const Photo = ({ photo }) => {
  const { title, thumbnailUrl } = photo;
  return (
    <div>
      <h2>{title}</h2>
      <img src={thumbnailUrl} alt="" />
    </div>
  );
};

export default Photo;
