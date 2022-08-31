import React, { useRef, useState } from "react";
import "./videoCard.css";
import VideoFooter from "./VideoFooter";
import VideoHeader from "./VideoHeader";

export default function VideoCard({
  url,
  likes,
  shares,
  channel,
  avatarSrc,
  song,
}) {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef(null);

  const onVideoPress = () => {
    if (isVideoPlaying) {
      videoRef.current.pause();
      setIsVideoPlaying(false);
    } else {
      videoRef.current.play();
      setIsVideoPlaying(true);
    }
  };

  return (
    <div className="videoCard">
      <VideoHeader />
      <video
        className="videoCard__player"
        src={url}
        alt="IG reel video"
        loop
        ref={videoRef}
        onClick={onVideoPress}
      />
      <VideoFooter
        channel={channel}
        likes={likes}
        shares={shares}
        avatarSrc={avatarSrc}
        song={song}
      />
    </div>
  );
}
