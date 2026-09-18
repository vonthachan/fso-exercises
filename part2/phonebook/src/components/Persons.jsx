import Person from "./Person";

const Persons = ({ filteredPersons }) => (
  <ul style={{ listStyle: "none", padding: 0 }}>
    {filteredPersons.map((person) => (
      <Person key={person.id} person={person} />
    ))}
  </ul>
);
export default Persons;
