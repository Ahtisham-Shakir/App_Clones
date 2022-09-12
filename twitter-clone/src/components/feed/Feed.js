import React from "react";
import "./Feed.css";

//components imports
import Post from "../post/Post";
import TweetBox from "../tweetBox/TweetBox";

export default function Feed() {
  return (
    <div className="feed">
      {/* Header */}
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      {/* Feed Box */}
      <TweetBox />

      {/* Posts */}
      <Post />
    </div>
  );
}
