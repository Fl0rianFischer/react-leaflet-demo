import React from "react";
import "./App.css";
import Map from "./Map.js"

// 52° 8′ N , 11° 37′ O

export default function App() {
  const coordinates = [52.1205333, 11.6276237]
  return (
    <Map coordinates={coordinates} />
  );
}
