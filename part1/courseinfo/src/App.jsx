const Header = ({ course }) => {
  console.log("Header function: ", course.name);
  return <h1>{course.name}</h1>;
};

const Content = ({ course }) => {
  console.log("Content Function", course.parts);
  course.parts.forEach((part) => {
    console.log(part.name, part.exercises);
  });

  return (
    <div>
      {course.parts.map((part) => (
        <Part key={part.name} part={part} exercises={part.exercises} />
      ))}
    </div>
  );
};

const Part = ({ part, exercises }) => {
  console.log("Part Function:", part.name);
  return (
    <div>
      {part.name} has: {exercises} exercises
    </div>
  );
};

const Total = ({ course }) => {
  let total = 0;
  course.parts.forEach((part) => (total += part.exercises));
  console.log("Total function: ", total);
  return (
    <div>
      Total exercises:
      {total}
    </div>
  );
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      { name: "Fundamentals of React", exercises: 10 },
      { name: "Using props to pass data", exercises: 7 },
      { name: "State of a component", exercises: 14 },
    ],
  };
  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  );
};

export default App;
