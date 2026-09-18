import { useState } from "react";
import Person from "./components/Person";

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
        prevPersons.concat({ name: newName, number: newNumber }),
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

  // Filtering
  // Steps get filter text> make a new array with matching filter persons > map the filtered people
  const filteredPersons = filter === "" ? persons : persons.filter((person) =>
    person.name.toLowerCase().includes(filter.toLowerCase())
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
      <div>
        filter shown with <input value={filter} onChange={handleFilter} />
      </div>
      <h2>add a new</h2>
      <form onSubmit={addPerson}>
        <div style={{ listStyle: "none", margin: 0, padding: 0 }}>
          <div>
            name: <input value={newName} onChange={handleNameChange} />
          </div>
          <div>
            number: <input value={newNumber} onChange={handleNumberChange} />
          </div>
          <div>
            <button type="submit">add</button>
          </div>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {filteredPersons.map((person) => (
          <Person key={person.name} name={person.name} number={person.number} />
        ))}
      </ul>
    </div>
  );
};

export default App;
