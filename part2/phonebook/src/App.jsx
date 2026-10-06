import { useEffect, useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import axios from "axios";

//Goal add names to phonebook and display
const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setNewFilter] = useState("");

  useEffect(() => {
    console.log("effect");

    //Retrieve data from server using axios
    axios.get("http://localhost:3001/persons").then((response) => {
      setPersons(response.data);
    });
  }, []);

  //Name Stuff
  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const addPerson = (event) => {
    event.preventDefault();
    const newPerson = { name: newName, number: newNumber };

    if (newName === "") {
      alert("Name required");
      return;
    }
    const nameExist = persons.some((person) => person.name === newName);
    if (nameExist) {
      alert(`${newName} already exists in the phonebook`);
    } else if (newNumber === "") {
      alert("Number required");
    } else {
      axios
        .post("http://localhost:3001/persons", newPerson)

        //response is the data the server returns(does whatever to newPerson and returns it with a generated id)
        .then((response) => {
          setPersons((prevPersons) => prevPersons.concat(response.data));
          setNewName("");
          setNewNumber("");
          console.log(response.data);
        });
    }
  };

  //Number Stuff
  const handleNumberChange = (event) => {
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
