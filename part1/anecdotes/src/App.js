import { useState } from 'react';

const DisplayAnecdote = ({ anecdote }) => <div>{anecdote}</div>;

const Button = ({ handleClick }) => (
  <button onClick={handleClick}>Next anecdote</button>
);

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
  ];

  const [selected, setSelected] = useState(0);

  const handleRandomAnecdote = () =>
    setSelected(Math.floor(Math.random() * anecdotes.length));

  return (
    <div>
      <DisplayAnecdote anecdote={anecdotes[selected]} />
      <Button handleClick={handleRandomAnecdote} />
    </div>
  );
};

export default App;
