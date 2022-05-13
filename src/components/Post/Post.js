/* eslint-disable jsx-a11y/img-redundant-alt */
import { Avatar } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import "./Post.css";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import NearMeIcon from "@material-ui/icons/NearMe";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import CommentSection from "../CommentSection/Comment";
import db from "../../firebase";

function Post(props) {
  const { profilePic, image, username, timestamp, message, postId } = props;
  const [postLiked, setPostLiked] = useState(false);
  const [openCommentSection, setOpenCommentSection] = useState(false);
  const [postComments, setPostComments] = useState([]);

  useEffect(() => {
    if (postId) {
      db.collection("posts")
        .doc(postId)
        .get()
        .then((res) => {
          const comments = res.data().comments;
          setPostComments(comments || []);
        });
    }
  }, [postId]);

  return (
    <>
      <div className="post">
        <div className="post__top">
          <Avatar className="post__avatar" src={profilePic} />
          <div className="post__topInfo">
            <h3>{username}</h3>
            <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
          </div>
        </div>

        <div className="post__bottom">
          <p>{message}</p>
        </div>

        <div className="post__image">
          <img src={image} alt="" />
        </div>

        <div className="post__options">
          <div
            className="post__option"
            onClick={() => setPostLiked(!postLiked)}
          >
            <ThumbUpIcon style={postLiked ? { color: "red" } : {}} />
            <p>Like</p>
          </div>
          <div
            className="post__option"
            onClick={() => setOpenCommentSection(!openCommentSection)}
          >
            <ChatBubbleOutlineIcon />
            <p>Comment</p>
          </div>
          <div className="post__option">
            <NearMeIcon />
            <p>Share</p>
          </div>
          <div className="post__option">
            <AccountCircleIcon />
            <ExpandMoreOutlinedIcon />
          </div>
        </div>
        {openCommentSection && (
          <CommentSection
            mainComment={message}
            commentId={postId}
            comments={postComments}
          />
        )}
      </div>
    </>
  );
}

export default Post;
