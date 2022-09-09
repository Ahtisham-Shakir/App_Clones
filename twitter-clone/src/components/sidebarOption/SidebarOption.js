import React from "react";
import "./SidebarOption.css";

export default function SidebarOption({ active, Icon, text }) {
  return (
    <div className={`sidebarOption ${active && "sidebarOption__active"}`}>
      <Icon />
      <h2>{text}</h2>
    </div>
  );
}
