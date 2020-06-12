import React from 'react';

import { Link, useParams } from "react-router-dom"

const Country = (props) => {
  const { countryName } = useParams();
  const country = props.countriesByName[countryName];

  return (
    <div>
      <Link to="/">Back</Link>
      <h1>{countryName}</h1>
      <p>Capital: {country.capital}</p>
    </div>
  );
};

export default Country;