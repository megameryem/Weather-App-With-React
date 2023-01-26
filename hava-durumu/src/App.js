import React from "react";
import Days from "./components/Days";
import Cities from "./components/Cities"
import { WeatherProvider } from "./context/WeatherContext";


function App() {
  return (
    <div >

      <WeatherProvider>
        <Cities />
        <Days />
      </WeatherProvider>
    </div>
  );
}

export default App;
