import React from "react";
import "./VideoHeader.css";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";

export default function VideoHeader() {
  return (
    <div className="videoHeader">
      <ArrowBackIosNewIcon />
      <h3>Reel</h3>
      <CameraAltOutlinedIcon />
    </div>
  );
}
