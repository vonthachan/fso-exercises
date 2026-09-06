import Header from "./Header";

const Course = ({ course }) => {
  console.log("Course working");

  return (
    <div>
      <Header title={course.name} />
    </div>
  );
};

export default Course;
