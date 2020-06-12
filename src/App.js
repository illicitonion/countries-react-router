import React, { useEffect, useState } from 'react';

import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

import Country from "./Country";
import Countries from "./Countries";

function App() {
  const [countriesByName, setCountriesByName] = useState(null);

  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then(resp => resp.json())
      .then(countries => {
        const newCountriesByName = {};
        countries.forEach(country => {
          newCountriesByName[country.name] = country;
        });
        setCountriesByName(newCountriesByName);
      });
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/country/:countryName">
            <Country countriesByName={countriesByName} />
          </Route>
          <Route exact path="/">
            {countriesByName === null ? "Loading..." : <Countries countriesByName={countriesByName} />}
          </Route>
        </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
