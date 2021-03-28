import React, { useState } from 'react';

const Button = ({ handleClick, label }) => (
  <button onClick={handleClick}>{label}</button>
);

const Display = ({ label, counter }) => (
  <p>
    <strong>{label}:</strong> {counter}
  </p>
);

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

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={handleClickGood} label='Good' />
      <Button handleClick={handleClickNeutral} label='Neutral' />
      <Button handleClick={handleClickBad} label='Bad' />
      <h2>Statistics</h2>
      <Display label='Good' counter={good} />
      <Display label='Neutral' counter={neutral} />
      <Display label='Bad' counter={bad} />
      <Display label='All' counter={all} />
      <Display label='Average' counter={average || 0} />
      <Display label='Positive' counter={`${positive || 0}%`} />
    </div>
  );
};

export default App;
