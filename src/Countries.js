import React from 'react';

import { Link } from "react-router-dom"

const Countries = function(props) {
  return (
    <ul>
      {
        Object.keys(props.countriesByName).map((countryName, index) => (
          <li key={index}><Link to={`/country/${countryName}`}>{countryName}</Link></li>
        ))
      }
    </ul>
  )
};

export default Countries;
