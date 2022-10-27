import React from 'react';
import './Courses.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useLoaderData } from 'react-router-dom';
import CourseCards from '../CourseCards/CourseCards';
import LeftSideNav from '../LeftSideNav/LeftSideNav';

const Courses = () => {
  const courses = useLoaderData();
  console.log('courses:', courses)

  return (
    <div className='text-center'>
      <Container>
        <Row>
          <Col lg="3" className='text-start left-nav rounded-2'>
            <LeftSideNav></LeftSideNav>
          </Col>

          <Col lg="9" className='rounded-2 mb-5'>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 course-detail mx-2 course-cards-container">

              {
                courses.map(course => <CourseCards
                  key={course.id}
                  course={course}>

                </CourseCards>)
              }
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Courses;