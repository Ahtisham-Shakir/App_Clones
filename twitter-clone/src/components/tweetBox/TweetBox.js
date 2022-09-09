import React from "react";
import "./TweetBox.css";

// MUI imports
import { Avatar, Button } from "@mui/material";

export default function TweetBox() {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar
            src="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png"
            alt="avatar"
          />
          <input type="text" placeholder="what's happening" />
        </div>
        <input
          className="tweetBox__imageInput"
          type="text"
          placeholder="Optional: Enter image URL"
        />
        <Button className="tweeBox__tweetBtn">Tweet</Button>
      </form>
    </div>
  );
}
