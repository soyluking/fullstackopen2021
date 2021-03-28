import Person from './Person';

const Persons = ({ persons }) => {
  return (
    <div>
      {persons.map(person => (
        <Person key={person.name} name={person.name} />
      ))}
    </div>
  );
};

export default Persons;
