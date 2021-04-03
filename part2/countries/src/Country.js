import { useEffect, useState } from 'react';
import axios from 'axios';
import CountryWeather from './CountryWeather';

const API_KEY = process.env.REACT_APP_WEATHERSTACK_KEY;

const Country = ({ name, capital, population, languages, flag }) => {
  const [weather, setWeather] = useState({});

  useEffect(() => {
    axios
      .get(
        `http://api.weatherstack.com/current?access_key=${API_KEY}&query=${capital}`,
      )
      .then(({ data }) => setWeather(data.current));
  }, [capital]);

  return (
    <div>
      <h1>{name}</h1>
      <p>
        <strong>Capital:</strong> {capital}
      </p>
      <p>
        <strong>Population:</strong> {population}
      </p>
      <h2>Spoken Languages:</h2>
      <ul>
        {languages.map(({ iso639_1, name }) => (
          <li key={iso639_1}>{name}</li>
        ))}
      </ul>
      <img src={flag} alt='' style={{ maxWidth: '200px' }} />
      <CountryWeather capita={capital} weather={weather} />
    </div>
  );
};

export default Country;
