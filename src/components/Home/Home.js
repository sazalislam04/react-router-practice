import React from "react";
import { useLoaderData } from "react-router-dom";
import Photo from "../Photo/Photo";

const Home = () => {
  const photos = useLoaderData();
  return (
    <div>
      <h1>Home page</h1>
      {photos.map((photo) => (
        <Photo key={photo.id} photo={photo} />
      ))}
    </div>
  );
};

export default Home;
