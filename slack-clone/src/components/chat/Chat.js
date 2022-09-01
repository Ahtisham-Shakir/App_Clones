import React from "react";
import "./Chat.css";

// react-router-dom imports
import { useParams } from "react-router-dom";

// MUI imports
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

// firebase imports
import db from "../../firebaseConfig";

export default function Chat() {
  const { roomId } = useParams();
  return (
    <div className="chat">
      <div className="chat__header">
        <div className="chat__headerLeft">
          <h4 className="chat__channelName">
            <strong>#General</strong>
            <StarBorderOutlinedIcon />
          </h4>
        </div>
        <div className="chat__headerRight">
          <p>
            <InfoOutlinedIcon />
            Details
          </p>
        </div>
      </div>
    </div>
  );
}
