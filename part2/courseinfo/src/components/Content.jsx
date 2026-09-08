import Part from "./Part";
const Content = ({ parts }) => {
  const total = parts.reduce((sum, part) => {
    return sum + part.exercises;
  }, 0);
  return (
    <div>
      {parts.map((part) => (
        <li key={part.id}>
          <Part name={part.name} exercises={part.exercises} />
        </li>
      ))}
      <li>total of {total} exercises</li>
    </div>
  );
};

export default Content;
