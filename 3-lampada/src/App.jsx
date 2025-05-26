import { useState } from "react";
import LightbulbSvg from "./components/lampada";
import './App.css';

export default function App() {
  let [light, setLight] = useState(false);

  const handleLight = () => {
    setLight(!light);
  }

  const fillColor = light ? "yellow" : "black";

  return (
    <>
      <LightbulbSvg fillColor={fillColor} />
      <button onClick={handleLight}>{light ? "Off" : "On"}</button>
    </>
  );
}
