import { useState, useEffect } from 'react';
import axios from 'axios';
import AddPersonForm from './components/AddPersonForm';
import Filter from './components/Filter';
import Persons from './components/Persons';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [keyword, setKeyword] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(({ data }) => setPersons(data));
  }, []);

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
  const handleSetKeyword = ({ target }) => setKeyword(target.value);

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter keyword={keyword} changeKeyword={handleSetKeyword} />
      <h2>Contacts list</h2>
      <Persons persons={filteredPersons} />
      <hr />
      <h2>Add new contact</h2>
      <AddPersonForm
        submit={handleAddPerson}
        name={newName}
        changeName={handleNewName}
        number={newNumber}
        changeNumber={handleNewNumber}
      />
    </div>
  );
};

export default App;
