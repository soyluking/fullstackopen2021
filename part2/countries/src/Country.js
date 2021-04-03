const Country = ({ name, capital, population, languages, flag }) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>
        <strong>Capital:</strong> {capital}
      </p>
      <p>
        <strong>Population:</strong> {population}
      </p>
      <h2>Languages:</h2>
      <ul>
        {languages.map(({ iso639_1, name }) => (
          <li key={iso639_1}>{name}</li>
        ))}
      </ul>
      <img src={flag} alt='' style={{ maxWidth: '200px' }} />
    </div>
  );
};

export default Country;
