import { useState } from "react";
//Goal add names to phonebook and display
const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas" },
    { name: "asdasd" },
    { name: "ruby" },
  ]);
  const [newName, setNewName] = useState("");

  const handleNameChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };

  const addPerson = (event) => {
    event.preventDefault();
    console.log("add button clicked");
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
      <ul>
        {persons.map((person) => (
          <li>{person.name}</li>
        ))}
      </ul>
      ...
    </div>
  );
};

export default App;
