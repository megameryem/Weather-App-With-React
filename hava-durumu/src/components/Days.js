import { React, useEffect } from "react";
import axios from "axios";
import { useWeather } from "../context/WeatherContext";
import Card from 'react-bootstrap/Card';
function Days() {
  const { data, weather, setWeather, days } = useWeather();

  useEffect(() => {
    
    const getData = async () => {
      const res = axios(`https://api.weatherbit.io/v2.0/forecast/daily?city=${data.name},TR&key=e1ce7657976344e59768eda9ca897c94&lang=tr`
      );
      

      setWeather((await res).data.data.filter((day, index) => index < 7));
    };
    getData();
  }, [data, setWeather]);

  return (
    <Card className="card flex flex-row items-center justify-center" >
      {weather.map((item, index) => (
        <Card.Body
          key={index}
          >
          <Card.Title >{days[new Date(item.datetime).getDay()]}</Card.Title>
          <Card.Img variant="top" src={`https://www.weatherbit.io/static/img/icons/${item.weather.icon}.png`} />
          <Card.Text >
            {Math.round(item.app_min_temp)}°
            
            
            <Card.Text >{Math.round(item.app_max_temp)}°</Card.Text>
          </Card.Text>
        </Card.Body>

      ))
      }
    </Card>

  );
}

export default Days;
