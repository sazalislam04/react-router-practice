import React from "react";
import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";
import "./Posts.css";
const Posts = () => {
  const posts = useLoaderData();
  return (
    <div>
      <h1>All Posts: {posts.length}</h1>
      <div className="posts">
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Posts;
