import { React ,createContext, useContext, useState } from "react";
import datas from "../data/datas.json"; 

const WeatherContext = createContext(); 

export const WeatherProvider = ({ children }) => {
  const [weather, setWeather] = useState([]); 
  const [data, setData] = useState(
    datas.find((item) => item.id === 34)
  );

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]; 
  const value = { data, setData, datas, weather, setWeather, days }; 
  
  return (
    <WeatherContext.Provider value={value}>{children}</WeatherContext.Provider> 
  );
};


export const useWeather = () => useContext(WeatherContext); 
