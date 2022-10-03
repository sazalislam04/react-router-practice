import React from "react";
import { useLoaderData } from "react-router-dom";
import "./FriendDetail.css";
const FriendDetail = () => {
  const friend = useLoaderData();
  console.log(friend);
  const { address, email, name, phone } = friend;
  return (
    <div className="detail">
      <h2>{name}</h2>
      <p>Cell No: {phone}</p>
      <p>Email: {email}</p>
      <p>
        <small>
          Address: {address.city} {address.street} {address.suite}
        </small>
      </p>
    </div>
  );
};

export default FriendDetail;
