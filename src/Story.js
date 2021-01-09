import React from "react";
import "./Story.css";
import { Avatar } from '@material-ui/core';

function Story(props) {
  const { image, profileSrc, title } = props;

  return (
    <div style={{ backgroundImage: `url(${image})` }} className="story">
      <Avatar className="story__avatar" src={profileSrc} />
      <h4>{props.title}</h4>
    </div>
  );
}

export default Story;
