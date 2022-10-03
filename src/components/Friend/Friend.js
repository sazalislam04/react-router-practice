import React from "react";
import { Link } from "react-router-dom";
import "./Friend.css";
const Friend = ({ friend }) => {
  const { name, phone, username, id } = friend;

  return (
    <div className="friend">
      <h2>Name: {name}</h2>
      <p>Phone: {phone}</p>
      <p>
        username:
        <Link to={`/friend/${id}`}>
          <small> {username}</small>
        </Link>
      </p>
    </div>
  );
};

export default Friend;
