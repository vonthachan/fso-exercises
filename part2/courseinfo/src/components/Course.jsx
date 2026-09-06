import Content from "./Content";
import Header from "./Header";

const Course = ({ course }) => {
  console.log("Course working");
  const parts = course.parts.map((parts) => parts);
  console.log(parts);
  return (
    <div>
      <Header course={course} />
      <Content />
    </div>
  );
};

export default Course;
