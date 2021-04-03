import { useState, useEffect } from 'react';
import axios from 'axios';
import Countries from './Countries';

const App = () => {
  const [keyword, setKeyword] = useState('');
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(({ data }) => setCountries(data));
  }, []);

  const handleChangeKeyword = event =>
    setKeyword(event?.target?.value || event);

  const filteredCountries = !keyword
    ? countries
    : countries.filter(country =>
        country.name.toLocaleLowerCase().includes(keyword.toLocaleLowerCase()),
      );

  return (
    <div>
      <div>
        <label>Find countries: </label>
        <input type='text' value={keyword} onChange={handleChangeKeyword} />
      </div>
      <Countries
        countries={filteredCountries}
        onShowClick={handleChangeKeyword}
      />
    </div>
  );
};

export default App;
