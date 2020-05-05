import React, { useState } from "react"
import {Map, TileLayer, Marker} from "react-leaflet"
import {Icon} from "leaflet"

export const icon = new Icon({
   iconUrl: "/skateboarding.svg",
   iconSize: [25, 25]
 });

export default function MapContainer(props) {
  const [markers, setMarkers] = useState([]);
  console.log(markers, markers.length);

  function onMapClick(info) {
    const position = {
      lat: info.latlng.lat,
      lng: info.latlng.lng,
    };

    const newMarkers = markers.concat([ position ])
    setMarkers(newMarkers)
  }

  return (
    <Map onClick={onMapClick} center={props.coordinates} zoom={12}>
      <TileLayer
         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
         attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
       />

       {markers.map(function(position) {
         return (
          <Marker
            key={position.lat}
            position={[position.lat, position.lng]}
            icon={icon}
          />
         )
       })}
   </Map>
  );
}
