import React, { useState } from 'react';

const Button = ({ handleClick, label }) => (
  <button onClick={handleClick}>{label}</button>
);

const Display = ({ label, counter }) => (
  <p>
    {label}: {counter}
  </p>
);

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClickGood = () => setGood(good + 1);
  const handleClickNeutral = () => setNeutral(neutral + 1);
  const handleClickBad = () => setBad(bad + 1);

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
    </div>
  );
};

export default App;
