import React, { useEffect } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "./Map.css";

export default function Map({ center, zoom }) {
  useEffect(() => {
    console.log("re-render");
  }, [center]);
  return (
    <div className="map">
      <MapContainer key={JSON.stringify(center)} center={center} zoom={zoom}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  );
}
