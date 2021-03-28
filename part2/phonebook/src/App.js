import { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' },
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [keyword, setKeyword] = useState('');

  const filteredPersons = !keyword
    ? persons
    : persons.filter(person =>
        person.name.toLocaleLowerCase().includes(keyword.toLocaleLowerCase()),
      );

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
  const handleSetKeyword = ({ target }) => {
    setKeyword(target.value);
  };

  return (
    <div>
      <h1>Phonebook</h1>
      Search contact: <input value={keyword} onChange={handleSetKeyword} />
      <h2>Contacts list</h2>
      {filteredPersons.map(person => (
        <p key={person.name}>{person.name}</p>
      ))}
      <hr />
      <h2>Add new contact</h2>
      <form onSubmit={handleAddPerson}>
        <div>
          Name: <input value={newName} onChange={handleNewName} />
          Number: <input value={newNumber} onChange={handleNewNumber} />
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
      </form>
    </div>
  );
};

export default App;
