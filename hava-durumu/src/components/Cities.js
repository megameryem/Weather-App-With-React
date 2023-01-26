import React from "react";
import { useWeather } from "../context/WeatherContext";
import Dropdown from 'react-bootstrap/Dropdown';
import { Form } from "react-bootstrap";
function Cities() {
  const { data, datas, setData } = useWeather();
  const changeData = (e) => {
    datas.filter((item) => {
      if (item.name === e.target.value) {
        setData(item);
      }
      return item;
    });
  };

  return (


    <Form.Select className="select" onClick={changeData} aria-label="Default select example">
      <option>İstanbul</option>
      {datas.map((item, key) => {

        return (
          <option key={key} value={item.name}>{item.name}</option>
        );
      })}
    </Form.Select>
  );
}

export default Cities;
