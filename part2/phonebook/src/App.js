import { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '+56993949422' },
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

  const handleAddPerson = event => {
    event.preventDefault();

    const personExistOnPhoneBook = persons.find(
      person => person.name === newName,
    );

    if (personExistOnPhoneBook)
      return alert(`${newName} is already added to phonebook`);

    const personAdded = {
      name: newName,
      number: newNumber,
    };

    setPersons([...persons, personAdded]);
    setNewName('');
    setNewNumber('');
  };

  const handleNewName = ({ target }) => setNewName(target.value);
  const handleNewNumber = ({ target }) => setNewNumber(target.value);

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleAddPerson}>
        <div>
          Name: <input value={newName} onChange={handleNewName} />
          Number: <input value={newNumber} onChange={handleNewNumber} />
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => (
        <p key={person.name}>{person.name}</p>
      ))}
    </div>
  );
};

export default App;
