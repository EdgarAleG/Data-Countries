import { useEffect, useState } from "react";
import "./App.css";
import DisplayData from "./components/DisplayData";
import ShowCountries from "./components/ShowCountries";
import countryServices from "./services/coutryServices";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (searchValue !== "") {
      setLoading(true);
      countryServices
        .getAll()
        .then((allNames) => {
          const namesFiltered = allNames.filter((item) => {
            return item.name.common.toLowerCase().indexOf(searchValue) >= 0;
          });

          console.log("lo que hay en namesFiltered", namesFiltered);
          setLoading(false);

          if (namesFiltered.length > 10) {
            setSearchResult(<p>too many values, be more specific</p>);
          } else if (namesFiltered.length === 1) {
            const result = <DisplayData item={namesFiltered[0]} />;
            setSearchResult(result);
          } else {
            const result = <ShowCountries countries={namesFiltered} />;
            setSearchResult(result);
          }
        })
        .catch((err) => {
          console.error("Error: ", err);
        });
    }
  }, [searchValue]);

  const handleChange = (event) => {
    const valueToSearch = event.target.value.toLowerCase();
    setSearchValue(valueToSearch);
  };

  return (
    <>
      <h1>Country Data</h1>

      <h3>Find Countries: </h3>

      <input onChange={handleChange} value={searchValue} />

      {loading ? <p>Loanding...</p> : null}

      {searchResult ? searchResult : null}
    </>
  );
}

export default App;
