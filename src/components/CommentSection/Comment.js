import { Avatar } from "@material-ui/core";
import React from "react";
import "./Comment.css";
import MessageSender from "../MessageSender/MessageSender";

function CommentSection({ mainComment, comments = [], commentId, profilePic }) {
  return (
    <div>
      <div className="comment__container">
        <div className="message__header">
          <Avatar src={profilePic} />
          <span style={{ marginLeft: 10 }}>{mainComment}</span>
        </div>
        <hr style={{ margin: 15 }} />
        <div className="comments">
          {comments.length > 0 ? (
            comments.map((comment) => (
              <div
                className="message__header_comment"
                style={{ marginLeft: 40, marginTop: 20 }}
              >
                <Avatar src={comment.profilePic} />
                <span style={{ marginLeft: 10 }}>{comment.username} - </span>
                <span style={{ marginLeft: 10 }}>{comment.message}</span>
              </div>
            ))
          ) : (
            <h2
              style={{
                textAlign: "center",
                color: "lightslategray",
                opacity: 0.7,
                fontSize: "14px",
              }}
            >
              No Comments to be Shown
            </h2>
          )}
        </div>
        <div className="message__sender">
          <MessageSender
            hideActionBtns
            isComment
            commentId={commentId}
            prevComments={comments}
          />
        </div>
      </div>
    </div>
  );
}

export default CommentSection;
