import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import "./MessageSender.css";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import { useStateValue } from "../StateProvider";
import db from "../../firebase";
import firebase from "firebase";
import { isHateSpeechPresent } from "../../services";

function MessageSender({ hideActionBtns, isComment, commentId, prevComments }) {
  const [{ user }, dispatch] = useStateValue();
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isHateSpeech = await isHateSpeechPresent(input);
    debugger;

    if (isHateSpeech) {
      alert(
        "Your message contains hate. Please refrain from spreading hate and change your way of vocabulary."
      );
    }

    if (isComment) {
      const newComments = [
        ...prevComments,
        {
          message: input,
          profilePic: user.photoURL,
          username: user.displayName,
          image: imageUrl,
        },
      ];
      db.collection("posts").doc(commentId).update({
        comments: newComments,
      });

      setImageUrl("");
      setInput("");
    } else {
      db.collection("posts").add({
        message: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        profilePic: user.photoURL,
        username: user.displayName,
        image: imageUrl,
      });

      setImageUrl("");
      setInput("");
    }
  };

  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar src={user.photoURL} />
        <form>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="messageSender__input"
            placeholder="What's on your mind?"
          />
          <input
            type="text"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="Image URL(optional)"
          />

          <button onClick={handleSubmit} type="submit">
            Hidden Submit
          </button>
        </form>
      </div>

      {!hideActionBtns && (
        <div className="messageSender__bottom">
          <div className="messageSender__option">
            <VideocamIcon style={{ color: "red" }} />
            <h3>Live Video</h3>
          </div>
          <div className="messageSender__option">
            <PhotoLibraryIcon style={{ color: "green" }} />
            <h3>Photo/Video</h3>
          </div>
          <div className="messageSender__option">
            <InsertEmoticonIcon style={{ color: "yellow" }} />
            <h3>Feeling/Activity</h3>
          </div>
        </div>
      )}
    </div>
  );
}

export default MessageSender;
