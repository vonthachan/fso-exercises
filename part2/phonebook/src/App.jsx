import { useState } from "react";
import Person from "./components/Person";

const App = () => {
  //Array of names in the phonebook
  const [persons, setPersons] = useState([
    { name: "Arto Hellas" },
    { name: "Hello" },
  ]);
  //The text of the input
  const [newName, setNewName] = useState("");

  //Handles adding the name to persons
  const addPerson = () => {
    console.log({ newName }, " add person");
  };

  //sets new name as the input whenever it is changed
  const handleNameChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
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
        <div>{newName}</div>
        <h2>Numbers</h2>
        <ul>{persons.map((person) => person.name)}</ul>
        <div>{persons[0].name}</div>
      </form>
      ...
    </div>
  );
};

export default App;
