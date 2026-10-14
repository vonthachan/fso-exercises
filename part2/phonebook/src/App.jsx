import { useEffect, useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import personService from "./services/persons";
import "./index.css";
import Notification from "./components/Notification";

//Goal add names to phonebook and display
const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setNewFilter] = useState("");
  const [notification, setNotification] = useState(null);
  const [notificationType, setNotificationType] = useState(null);

  useEffect(() => {
    console.log("effect");

    //Retrieve data from server using axios
    personService.getAll().then((response) => {
      setPersons(response.data);
    });
  }, []);

  //Name Stuff
  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const showNotification = (message, type) => {
    setNotification(message);
    setNotificationType(type);

    setTimeout(() => {
      (setNotification(null), setNotificationType(null));
    }, 3000);
  };

  const addPerson = (event) => {
    event.preventDefault();
    const newPerson = {
      name: newName.trim(),
      number: newNumber.trim(),
    };

    if (newPerson.name === "") {
      showNotification(`Name required`, "error");
      return;
    }
    if (newPerson.number === "") {
      showNotification(`Number required`, "error");
      return;
    }

    const existingPerson = persons.find(
      (person) => person.name === newPerson.name,
    );
    if (existingPerson) {
      const replace = window.confirm(
        `${newPerson.name} already exists in the phonebook, replace the old number with the new number?`,
      );

      if (replace) {
        personService.update(existingPerson.id, newPerson).then((response) => {
          setPersons((currentPersons) =>
            currentPersons.map((person) =>
              person.id === existingPerson.id ? response.data : person,
            ),
          );
          showNotification(`Updated ${newPerson.name}`, "success");
          setNewName("");
          setNewNumber("");
        });
      }
    } else {
      personService
        .create(newPerson)
        //response is the data the server returns(does whatever to newPerson and returns it with a generated id)
        .then((response) => {
          setPersons((prevPersons) => prevPersons.concat(response.data));
          showNotification(`Added ${newPerson.name}`, "success");
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

  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Do you want to delete?");
    console.log(id);
    if (confirmDelete) {
      personService
        .remove(id)
        .then(() =>
          setPersons((previousPersons) =>
            previousPersons.filter((person) => person.id !== id),
          ),
        )
        .catch((error) => {
          console.log("Delete request failed", error);

          alert(`${id} not deleted`);
        });
    }
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <Notification message={notification} type={notificationType} />
      <Filter filter={filter} handleFilter={handleFilter} />
      <h1>add a new</h1>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        newNumber={newNumber}
      />
      <h1>Numbers</h1>
      <Persons filteredPersons={filteredPersons} deleteHandler={handleDelete} />
    </div>
  );
};

export default App;
