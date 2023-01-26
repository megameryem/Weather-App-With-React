import React from "react";
import Days from "./components/Days";
import { WeatherProvider } from "./context/WeatherContext";


function App() {
  return (
    <div >
      
     <WeatherProvider>
        <Days/>
      </WeatherProvider>
    </div>
  );
}

export default App;
