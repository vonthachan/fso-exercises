import { useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
//Goal add names to phonebook and display
const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setNewFilter] = useState("");

  //Name Stuff
  const handleNameChange = (event) => {
    console.log("name: " + event.target.value);
    setNewName(event.target.value);
  };

  const addPerson = (event) => {
    event.preventDefault();
    if (newName === "") {
      alert("Name required");
      return;
    }

    console.log("add button clicked");
    const nameExist = persons.some((person) => person.name === newName);
    if (nameExist) {
      alert(`${newName} already exists in the phonebook`);
    } else if (newNumber === "") {
      alert("Number required");
    } else {
      setPersons((prevPersons) =>
        prevPersons.concat({
          id: crypto.randomUUID(),
          name: newName,
          number: newNumber,
        }),
      );
      setNewName("");
      setNewNumber("");
    }
    console.log(persons);
  };

  //Number Stuff
  const handleNumberChange = (event) => {
    console.log("number: " + event.target.value);
    setNewNumber(event.target.value);
  };

  // Filtering stuff

  // Steps get filter text> make a new array with matching filter persons > map the filtered people
  const filteredPersons =
    filter === ""
      ? persons
      : persons.filter((person) =>
          person.name.toLowerCase().includes(filter.toLowerCase()),
        );

  //Sets filter text
  const handleFilter = (event) => {
    console.log("Filter: " + event.target.value);
    // console.log("Filtered persons: " + filteredPersons)
    setNewFilter(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handleFilter={handleFilter} />
      <h2>add a new</h2>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        newNumber={newNumber}
      />
      <h2>Numbers</h2>
      <Persons filteredPersons={filteredPersons} />
    </div>
  );
};

export default App;
