import React, { useEffect, useState } from "react";
import "./Chat.css";

// react-router-dom imports
import { useParams } from "react-router-dom";

// MUI imports
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

// firebase imports
import db from "../../firebaseConfig";
import {
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import Message from "../message/Message";
import ChatInput from "../chatInput/ChatInput";

export default function Chat() {
  const [roomDetails, setRoomDetails] = useState("");
  const [messages, setMessages] = useState([]);

  const { roomId } = useParams();

  useEffect(() => {
    if (roomId) {
      const docRef = doc(db, "rooms", roomId);
      onSnapshot(docRef, (snapshot) => {
        setRoomDetails(snapshot.data());
      });
    }

    const collectionRef = collection(db, "rooms", roomId, "messages");
    const q = query(collectionRef, orderBy("timestamp", "asc"));
    onSnapshot(q, (snapshot) => {
      setMessages(snapshot.docs.map((doc) => doc.data()));
    });
  }, [roomId]);
  console.log(messages);

  return (
    <div className="chat">
      <div className="chat__header">
        <div className="chat__headerLeft">
          <h4 className="chat__channelName">
            <strong>#{roomDetails?.name}</strong>
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
      <div className="chat__messages">
        {messages.map(({ message, timestamp, user, userImage }, i) => (
          <Message
            key={i}
            message={message}
            timestamp={timestamp}
            user={user}
            userImage={userImage}
          />
        ))}
      </div>
      <ChatInput channelName={roomDetails?.name} channelId={roomId} />
    </div>
  );
}
