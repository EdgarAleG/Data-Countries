import axios from "axios";

const api_key = import.meta.env.VITE_SOME_KEY;
const baseUrlCountry = "https://restcountries.com/v3.1/all";

const getAll = () => {
  const request = axios.get(baseUrlCountry);
  return request.then((response) => response.data);
};

const getWeather = (nameCountry) => {
  const request = axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${nameCountry}&appid=${api_key}&units=metric`,
  );
  return request.then((response) => response.data);
};

export default { getAll, getWeather };
