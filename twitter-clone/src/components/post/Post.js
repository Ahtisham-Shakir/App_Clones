import React from "react";
import "./Post.css";

// MUI imports
import { Avatar } from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PublishIcon from "@mui/icons-material/Publish";

export default function Post({
  displayName,
  username,
  timestamp,
  verified,
  text,
  image,
  avatar,
}) {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png" />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              Ahtisham Shakir
              <span className="post__headerSpecial">
                <VerifiedIcon className="post__badge" />
                @shaam
              </span>
            </h3>
          </div>
          <div className="post__headerDesription">
            <p>I challenge you to that twitter clone with react</p>
          </div>
        </div>
        <img
          src="https://images.unsplash.com/photo-1532357325337-70eab733da87?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt=""
        />
        <div className="post__footer">
          <ChatBubbleOutlineIcon fontSize="small" />
          <RepeatIcon fontSize="small" />
          <FavoriteBorderIcon fontSize="small" />
          <PublishIcon fontSize="small" />
        </div>
      </div>
    </div>
  );
}
