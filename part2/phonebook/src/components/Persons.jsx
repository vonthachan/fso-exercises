import Person from "./Person";

const Persons = ({ filteredPersons, deleteHandler }) => (
  <ul style={{ listStyle: "none", padding: 0 }}>
    {filteredPersons.map((person) => (
      <Person key={person.id} person={person} deleteHandler={deleteHandler}/>
    ))}
  </ul>
);
export default Persons;
