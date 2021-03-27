const Header = ({ course }) => {
  return <h1>{course}</h1>;
};

const Content = ({ name, exercises }) => {
  return (
    <p>
      {name}: {exercises}
    </p>
  );
};

const Total = ({ total }) => {
  return (
    <p>
      <strong>Number of exercises: {total}</strong>
    </p>
  );
};

const App = () => {
  const course = 'Half Stack application development';
  const part1 = 'Fundamentals of React';
  const exercises1 = 10;
  const part2 = 'Using props to pass data';
  const exercises2 = 7;
  const part3 = 'State of a component';
  const exercises3 = 14;

  return (
    <div>
      <Header course={course}></Header>
      <Content name={part1} exercises={exercises1}></Content>
      <Content name={part2} exercises={exercises2}></Content>
      <Content name={part3} exercises={exercises3}></Content>
      <Total total={exercises1 + exercises2 + exercises3} />
    </div>
  );
};

export default App;
