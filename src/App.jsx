import { useState, useEffect } from "react";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { Map } from "./Map";
import "./App.css";
import "leaflet/dist/leaflet.css";

function App() {
  const [focussedEarthquake, setFocussedEarthquake] = useState({});
  const [size, setSize] = useState(1);
  const [quakes, setQuakes] = useState({});
  const [magnitude, setMagnitude] = useState("4.5");
  const [period, setPeriod] = useState("week");

  const URL = `https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/${magnitude}_${period}.geojson`;
  // Die URLs der Feeds findest du auf dieser Webseite (rechte Seitenleiste):  https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php
  useEffect(() => {
    fetch(URL)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((res) => setQuakes(res))
      .catch((err) => console.error("Fetch failed:", err));
  }, [magnitude, period]);

  return (
    <div className="app">
      <Header
        magnitude={magnitude}
        setMagnitude={setMagnitude}
        periode={period}
        setPeriod={setPeriod}
      />
      <Sidebar earthquake={focussedEarthquake} size={size} setSize={setSize} />
      <div className="mainArea">
        <Map
          quakes={quakes}
          size={size}
          setSize={setSize}
          setFocussedEarthquake={setFocussedEarthquake}
        />
      </div>
    </div>
  );
}

export default App;
