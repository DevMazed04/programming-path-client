import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './LeftSideNav.css';

const LeftSideNav = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch('https://programming-path-server.vercel.app/courses')
      .then(res => res.json())
      .then(data => setCourses(data));
  }, [])
  return (
    <div>
      <h5 className='mb-4 text-center fw-bold'>All Courses: {courses.length}</h5>
      <div>
        {
          courses.map(course =>
            <p key={course.id}>
              <Link to={`/course-details/${course.id}`}>
                <span className='courses-title'>{course.name}</span>
              </Link>
            </p>
          )
        }
      </div>
    </div>
  );
};

export default LeftSideNav;