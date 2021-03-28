const Total = ({ parts }) => {
  const sum = parts.reduce((value, current) => value + current.exercises, 0);

  return (
    <p>
      <strong>Number of exercises {sum}</strong>
    </p>
  );
};

export default Total;
