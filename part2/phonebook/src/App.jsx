import { useState } from "react";
import Person from "./components/Person";

//Goal add names to phonebook and display
const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const handleNameChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };

  const addPerson = (event) => {
    event.preventDefault();
    if (newName === "") return;
    console.log("add button clicked");
    const nameExist = persons.some((person) => person.name === newName);
    if (nameExist) {
      alert(`${newName} already exists in the phonebook`);
    } else {
      setPersons((prevPersons) => prevPersons.concat({ name: newName }));
      setNewName("");
    }
    console.log(persons);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {persons.map((person) => (
          <Person key={person.name} name={person.name} />
        ))}
      </ul>
      ...
    </div>
  );
};

export default App;
