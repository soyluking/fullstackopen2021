import React, { useState } from 'react';

const Button = ({ handleClick, label }) => (
  <button onClick={handleClick}>{label}</button>
);

const Display = ({ label, counter }) => (
  <p>
    <strong>{label}:</strong> {counter}
  </p>
);

const Statistics = ({ statistics }) => {
  return (
    <div>
      <h2>Statistics</h2>
      {statistics.map(item => (
        <Display label={item.label} counter={item.value} key={item.label} />
      ))}
    </div>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClickGood = () => setGood(good + 1);
  const handleClickNeutral = () => setNeutral(neutral + 1);
  const handleClickBad = () => setBad(bad + 1);

  const all = good + neutral + bad;
  const average = (good * 1 + neutral * 0 + bad * -1) / all;
  const positive = (good * 100) / all;

  const statistics = [
    {
      label: 'Good',
      value: good,
    },
    {
      label: 'Neutral',
      value: neutral,
    },
    {
      label: 'Bad',
      value: bad,
    },
    {
      label: 'All',
      value: all,
    },
    {
      label: 'Average',
      value: average || 0,
    },
    {
      label: 'Positive',
      value: `${positive || 0}%`,
    },
  ];

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={handleClickGood} label='Good' />
      <Button handleClick={handleClickNeutral} label='Neutral' />
      <Button handleClick={handleClickBad} label='Bad' />
      <Statistics statistics={statistics} />
    </div>
  );
};

export default App;
