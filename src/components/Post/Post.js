import React from "react";
import { Link } from "react-router-dom";
import "./Post.css";
const Post = ({ post }) => {
  const { body, title, id } = post;
  return (
    <div className="post">
      <h2>{title}</h2>
      <p>{body}</p>
      <Link to={`/friend/${id}`}>
        <button>Post Author</button>
      </Link>
    </div>
  );
};

export default Post;
