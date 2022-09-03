import React, { useEffect, useState } from "react";
import "./App.css";

// MUI imports
import {
  Select,
  FormControl,
  MenuItem,
  Card,
  CardContent,
} from "@mui/material";
import InfoBox from "./components/InfoBox";
import Map from "./components/Map";

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("worldwide");

  useEffect(() => {
    const getCountriesData = () => {
      fetch("https://disease.sh/v3/covid-19/countries")
        .then((res) => res.json())
        .then((data) => {
          setCountries(
            data.map((item) => ({
              name: item.country,
              value: item.countryInfo.iso2,
            }))
          );
        });
    };
    getCountriesData();
  }, []);

  const onCountryChange = (e) => {
    setCountry(e.target.value);
  };

  return (
    <div className="app">
      {/* ============= App Left ============ */}
      <div className="app_left">
        <div className="app__header">
          <h1>Covid-19 TRACKER</h1>
          <FormControl className="app__dropdown">
            <Select
              variant="outlined"
              value={country}
              onChange={onCountryChange}
            >
              <MenuItem value={"worldwide"}>Worldwide</MenuItem>
              {countries.map((country, i) => (
                <MenuItem key={i} value={country.value}>
                  {country.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>

        <div className="app__stats">
          <InfoBox title="Coronavirus Cases" total={2000} cases={123} />
          <InfoBox title="Recovered" total={2000} cases={123} />
          <InfoBox title="Deaths" total={2000} cases={123} />
        </div>

        <Map />
      </div>

      {/* ============= App Right ============ */}
      <Card className="app__right">
        <CardContent>
          <h3>Live cases by country</h3>
          <h3>Worldwide new Cases</h3>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
