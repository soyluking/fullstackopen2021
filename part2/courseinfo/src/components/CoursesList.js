import Course from './Course';

const CoursesList = ({ title, courses }) => {
  return (
    <div>
      <h1>{title}</h1>
      {courses.map(course => (
        <Course course={course} key={course.id} />
      ))}
    </div>
  );
};

export default CoursesList;
