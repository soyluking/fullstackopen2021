const CountryWeather = ({ capital, weather }) => {
  if (Object.keys(weather).length === 0) return null;

  return (
    <div>
      <h3>Weather in {capital}</h3>
      <p>
        <strong>Temperature:</strong> {weather.temperature} Celcius
      </p>
      <img
        src={weather.weather_icons[0]}
        alt={weather.weather_descriptions[0]}
        style={{ maxWidth: '200px' }}
      />
      <p>
        <strong>Wind:</strong> {weather.wind_speed} mph direction{' '}
        {weather.wind_dir}
      </p>
    </div>
  );
};

export default CountryWeather;
