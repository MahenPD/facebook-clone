/* eslint-disable jsx-a11y/img-redundant-alt */
import { Avatar } from "@material-ui/core";
import React from "react";
import "./Post.css";

function Post(props) {
  const { profilePic, image, username, timestamp, message } = props;

  return (
    <div className="post">
      <div class="post__top">
        <Avatar src={profilePic} />
      </div>

      <div class="post__topInfo">
        <h3>{username}</h3>
        {/* <p>
            {new Date(timestamp.toDate()).toUTCString}
        </p> */}
      </div>

      <div class="post__bottom">
        <p>{message}</p>
      </div>

      <div class="post__image">
        <img src={image} alt="post image" />
      </div>
    </div>
  );
}

export default Post;
