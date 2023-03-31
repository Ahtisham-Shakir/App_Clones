import React, { useState, useEffect } from "react";
import Login from "./components/Login";
import Player from "./components/Player";
import { getTokenFromUrl } from "./components/spotify";

function App() {
  const [token, setToken] = useState("");
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;
    if (_token) {
      setToken(_token);
    }
  }, []);

  return <div className="app">{token ? <Player /> : <Login />}</div>;
}

export default App;
