import React from "react";
import TweetBox from "../tweetBox/TweetBox";
import "./Feed.css";

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
    </div>
  );
}
