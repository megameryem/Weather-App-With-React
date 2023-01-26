import { React, useEffect } from "react";
import axios from "axios";
import { useWeather } from "../context/WeatherContext";
import Card from 'react-bootstrap/Card';
function Days() {
  const { data, weather, setWeather, days } = useWeather();

  useEffect(() => {
    
    const getData = async () => {
      const res = axios(`https://api.weatherbit.io/v2.0/forecast/daily?city=${data.name},TR&key=6540fc89d653ddcf38cef14336301a5a&lang=tr`
      );
      

      setWeather((await res).data.data.filter((day, index) => index < 7));
    };
    getData();
  }, [data, setWeather]);

  return (
    <Card style={{ width: '18rem' }}>
      {weather.map((item, index) => (
        <Card.Body
          key={index}
          className="">
          <Card.Title className="">{days[new Date(item.datetime).getDay()]}</Card.Title>
          <Card.Img variant="top" src={`https://www.weatherbit.io/static/img/icons/${item.weather.icon}.png`} />
          <Card.Text className="">
            {Math.round(item.app_min_temp)}°
            <br />
            {Math.round(item.app_max_temp)}°
          </Card.Text>
        </Card.Body>

      ))
      }
    </Card>

  );
}

export default Days;
