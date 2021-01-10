import React, { useEffect, useState } from "react";
import "./Feed.css";
import MessageSender from "../MessageSender/MessageSender";
import Post from "../Post/Post";
import StoryReel from "../StoryReel/StoryReel";
import db from "../../firebase";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
  }, []);

  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />

      {posts.map((post) => (
        <Post
          key={post.id}
          profilePic={post.data.profilePic}
          message={post.data.message}
          timestamp={post.data.timestamp}
          username={post.data.username}
          image={post.data.username}
        />
      ))}

      {/* <Post
        profilePic={
          "https://cutewallpaper.org/21/anime-profile-pictures-boy/cartoon-and-anime-profile-pics-toon.pfps-Instagram-Profile-.jpg"
        }
        message="Wow this works"
        timeStamp={"2002"}
        username={"MahenDunsinghe"}
        image={"https://wallpapercave.com/wp/wp6575735.jpg"}
      />
      /> */}
    </div>
  );
}

export default Feed;
