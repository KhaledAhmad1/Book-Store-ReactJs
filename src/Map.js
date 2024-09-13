// src/Map.js
import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const FitBounds = ({ bounds }) => {
  const map = useMap();

  useEffect(() => {
    if (bounds) {
      map.fitBounds(bounds, { padding: [20, 20] });
    }
  }, [bounds, map]);

  return null;
};

const Map = () => {
  const facultyLocations = [
    { position: [27.1853, 31.1909], name: "Main Entrance" },
    { position: [27.1856, 31.1912], name: "FCI Labs Building" },
    { position: [27.185, 31.191], name: "Library" },
    { position: [27.1848, 31.1908], name: "Cafeteria" },
  ];

  const bounds = L.latLngBounds(
    facultyLocations.map((location) => location.position)
  );

  return (
    <MapContainer
      style={{ height: "500px", width: "100%" }}
      center={[27.1853, 31.1909]}
      zoom={19}
      scrollWheelZoom={false}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {facultyLocations.map((location, idx) => (
        <Marker key={idx} position={location.position}>
          <Popup>{location.name}</Popup>
        </Marker>
      ))}
      <FitBounds bounds={bounds} />
    </MapContainer>
  );
};

export default Map;
