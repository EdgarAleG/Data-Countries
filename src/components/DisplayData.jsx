import { useEffect, useState } from "react";
import countryServices from "../services/coutryServices";
const DisplayData = ({ item }) => {
  const [dataWeather, setDataWeather] = useState(null);
  useEffect(() => {
    countryServices
      .getWeather(item.capital[0])
      .then((response) => {
        setDataWeather(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [item.capital]);

  if (!dataWeather) {
    return <p>Loading weather data...</p>;
  }
  return (
    <div>
      <h2>{item.name.common}</h2>
      <p>capital: {item.capital[0]}</p>
      <p>area: {item.area}</p>
      <h3>Languages: </h3>
      <ul>
        {Object.values(item.languages).map((item, key) => (
          <li key={key}>{item}</li>
        ))}
      </ul>
      <img src={item.flags.png} alt={`Flag of ${item.name.common}`} />
      <h3>Weather in {item.capital[0]}</h3>
      <p>Temperature: {dataWeather.main.temp} °C</p>
      <img
        src={`https://openweathermap.org/img/wn/${dataWeather.weather[0].icon}@2x.png`}
        alt="wather icon"
      />
      <p>Wind: {dataWeather.wind.speed} m/s</p>
    </div>
  );
};

export default DisplayData;
