import React, { useState } from 'react';

const Button = ({ handleClick, label }) => (
  <button onClick={handleClick}>{label}</button>
);

const Statistic = ({ label, value }) => (
  <tr>
    <td>
      <strong>{label}:</strong>
    </td>
    <td>{value}</td>
  </tr>
);

const Statistics = ({ statistics }) => {
  if (statistics.all === 0) return <p>No feedback given</p>;
  return (
    <div>
      <h2>Statistics</h2>
      <table>
        <tbody>
          <Statistic label='Good' value={statistics.good} />
          <Statistic label='Neutral' value={statistics.neutral} />
          <Statistic label='Bad' value={statistics.bad} />
          <Statistic label='All' value={statistics.all} />
          <Statistic label='Average' value={statistics.average} />
          <Statistic label='Positive' value={`${statistics.positive}%`} />
        </tbody>
      </table>
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

  const statistics = {
    good,
    neutral,
    bad,
    all,
    average,
    positive,
  };

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
