const Header = ({ course }) => {
    console.log('Header component: ' ,course.name)
  return <h1>{course.name}</h1>;
};
export default Header;
