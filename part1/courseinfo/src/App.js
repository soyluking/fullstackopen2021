const Header = ({ course }) => {
  return <h1>{course}</h1>;
};

const Part = ({ part }) => {
  return (
    <p>
      {part.name}: {part.exercises}
    </p>
  );
};

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map(part => (
        <Part part={part} key={part.name} />
      ))}
    </div>
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
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10,
    },
    {
      name: 'Using props to pass data',
      exercises: 7,
    },
    {
      name: 'State of a component',
      exercises: 14,
    },
  ];
  const total = parts.reduce((prev, current) => prev + current.exercises, 0);

  return (
    <div>
      <Header course={course}></Header>
      <Content parts={parts}></Content>
      <Total total={total} />
    </div>
  );
};

export default App;
