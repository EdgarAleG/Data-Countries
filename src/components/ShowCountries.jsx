import { useState } from "react";
import DisplayData from "./DisplayData";
const Country = ({ country }) => {
  const [info, setInfo] = useState(false);
  return (
    <div>
      {country.name.common}{" "}
      <button onClick={() => setInfo(!info)}> {info ? "Hide" : "Show"} </button>
      {info ? <DisplayData item={country} /> : null}
    </div>
  );
};
const ShowCountries = ({ countries }) => {
  return (
    <>
      {countries.map((item, index) => (
        <Country key={index} country={item} />
      ))}
    </>
  );
};

export default ShowCountries;
