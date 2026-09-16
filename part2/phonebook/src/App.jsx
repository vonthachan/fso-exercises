import { useState } from "react";
import Person from "./components/Person";

const App = () => {
  //Array of names in the phonebook
  const [persons, setPersons] = useState([
    { name: "Arto Hellas" },
    { name: "Hello" },
  ]);
  //The text of the input (controlling form input element)
  const [newName, setNewName] = useState("");

  //Handles adding the name to persons
  const handleSubmit = (event) => {
    event.preventDefault();

    if (persons.some((person) => person.name === newName)) return;
    setPersons(persons.concat({ name: newName }));
    setNewName("");
  };

  //sets new name as the input whenever it is changed
  const handleNameChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
        <div>{newName}</div>
        <h2>Numbers</h2>
        <ul style={{ margin: 0, padding: 0 }}>
          {persons.map((person) => (
            <li style={{ listStyle: "none", margin: 0, paddingLeft: 0 }}>
              <Person key={person.name} name={person.name} />
            </li>
          ))}
        </ul>
      </form>
      ...
    </div>
  );
};

export default App;
