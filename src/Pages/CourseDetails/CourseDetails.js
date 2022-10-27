import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './CourseDetails.css';

const CourseDetails = () => {
  const courseDetails = useLoaderData();
  const { id, name, description, price, img_url } = courseDetails;
  console.log('courseDetails:', courseDetails);

  return (

    <div>
      <Container>
        <Row>
          <Col className='rounded-2 mb-5 course'>
            <div className="row row-cols-1 row-cols-md-2 g-4 course-details">
              <div className="col mx-auto">
                <div className="card p-4 pb-2 rounded-3 border border-0 shadow-lg">
                  <img src={img_url} className="card-img-top rounded-3" alt={name} height="300px" />
                  <div className="card-body">
                    <h4 className="card-title fw-bold mb-3">Name: {name}</h4>
                    <h5 className="card-text mb-3 "><b>Price:</b> <span className='fw-bold'>${price}</span></h5>
                    <p className="card-text">
                      <p className='text-decoration-underline mb-1 fw-bold'>Course Description:</p>
                      {description}</p>

                    <Link to={`/checkout-course/${id}`}>
                      <button className='btn btn-sm btn-outline-primary btn-width'>
                        <span className='d-flex justify-content-between'>
                          <div>Get premium access</div>
                        </span>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CourseDetails;