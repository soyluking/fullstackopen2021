import { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas' }]);
  const [newName, setNewName] = useState('');

  const handleAddPerson = event => {
    event.preventDefault();

    const personExistOnPhoneBook = persons.find(
      person => person.name === newName,
    );

    if (personExistOnPhoneBook)
      return alert(`${newName} is already added to phonebook`);

    const personAdded = {
      name: newName,
    };

    setPersons([...persons, personAdded]);
    setNewName('');
  };

  const handleNewName = ({ target }) => setNewName(target.value);

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleAddPerson}>
        <div>
          name: <input value={newName} onChange={handleNewName} />
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
