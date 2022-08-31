import React from "react";
import "./App.css";
import VideoCard from "./VideoCard";

function App() {
  return (
    <div className="app">
      <div className="app__top">
        <img
          className="app__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/1025px-Instagram-Icon.png"
          alt="Instagram"
        />
        <h1>Reels</h1>
      </div>
      <div className="app__videos">
        <VideoCard
          channel="Ahtisham Shakir"
          avatarSrc=""
          song="Mai tenu samjhanwa"
          url="https://v16-webapp.tiktok.com/342c8d7a6c6ddce8ce0ca5857d18444e/630e026e/video/tos/useast2a/tos-useast2a-pve-0037c001-aiso/029af6cf572b488abb0c2e2b0bf3f8e4/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=1632&bt=816&cs=0&ds=3&ft=eXd.6HKVMyq8ZIYS-he2NNrwml7Gb&mime_type=video_mp4&qs=0&rc=NWloOjw7PGdpZDk1ZGk6aEBpM3A7aTQ6Zmd4ZDMzZjczM0AyMzJhLWMvNWMxYjA2LzRhYSNhMzIwcjRfbzFgLS1kMWNzcw%3D%3D&l=202208300627590102451300941205D653&btag=80000"
          likes={950}
          shares={731}
        />
        <VideoCard />
        <VideoCard />
      </div>
    </div>
  );
}

export default App;
