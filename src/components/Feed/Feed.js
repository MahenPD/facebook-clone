import React from "react";
import "./Feed.css";
import MessageSender from "../MessageSender/MessageSender";
import Post from "../Post/Post";
import StoryReel from "../StoryReel/StoryReel";

function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />

      <Post profilePic={"https://cutewallpaper.org/21/anime-profile-pictures-boy/cartoon-and-anime-profile-pics-toon.pfps-Instagram-Profile-.jpg"} message="Wow this works"  timeStamp={"2002"} username={"MahenDunsinghe"} image={"https://wallpapercave.com/wp/wp6575735.jpg"}/>
      <Post message="SO this was fun.. Back to work"  timeStamp={"2002"} username={"Mahen Dunsinghe"} />
      <Post message="How Strange"  timeStamp={"2002"} username={"Mahen Dunsinghe"} />
    </div>
  );
}

export default Feed;
