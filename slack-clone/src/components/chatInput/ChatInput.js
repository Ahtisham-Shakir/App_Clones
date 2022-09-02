import React, { useState } from "react";
import "./ChatInput.css";
import { useStateValue } from "../../StateProvider";

// firebase imports
import db from "../../firebaseConfig";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

export default function ChatInput({ channelName, channelId }) {
  const [input, setInput] = useState("");

  const [{ user }] = useStateValue();

  const sendMessage = (e) => {
    e.preventDefault();

    if (channelId) {
      console.log({
        message: input,
        timestamp: serverTimestamp(),
        user: user?.displayName,
        userImage: user?.photoURL,
      });
      const collectionRef = collection(db, "rooms", channelId, "messages");
      addDoc(collectionRef, {
        message: input,
        timestamp: serverTimestamp(),
        user: user?.displayName,
        userImage: user?.photoURL,
      });
    }
    setInput("");
  };

  return (
    <div className="chatInput">
      <form>
        <input
          type="text"
          value={input}
          placeholder={`Message #${channelName?.toLowerCase()}`}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" onClick={sendMessage}>
          send
        </button>
      </form>
    </div>
  );
}
