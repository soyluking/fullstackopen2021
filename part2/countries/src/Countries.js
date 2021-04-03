import Country from './Country';

const Countries = ({ countries, onShowClick }) => {
  if (countries.length > 10)
    return <p>Too many matches, specify another filter</p>;

  if (countries.length === 1) {
    const { name, capital, population, languages, flag } = countries[0];

    return (
      <Country
        name={name}
        capital={capital}
        population={population}
        languages={languages}
        flag={flag}
      />
    );
  }

  return countries.map(({ alpha2Code, name }) => (
    <p key={alpha2Code}>
      {name} <button onClick={() => onShowClick(name)}>Show</button>
    </p>
  ));
};

export default Countries;
