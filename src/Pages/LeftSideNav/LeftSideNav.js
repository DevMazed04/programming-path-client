import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch('https://programming-path-server.vercel.app/courses')
      .then(res => res.json())
      .then(data => setCourses(data));
  }, [])
  return (
    <div>
      <h5>All Courses: {courses.length}</h5>
      <div>
        {
          courses.map(course =>
            <p key={course.id}>
              <Link to={`/course-details/${course.id}`}>{course.name}</Link>
            </p>
          )
        }
      </div>
    </div>
  );
};

export default LeftSideNav;