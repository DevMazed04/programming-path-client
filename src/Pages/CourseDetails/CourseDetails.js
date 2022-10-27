import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './CourseDetails.css';
// import LeftSideNav from '../LeftSideNav/LeftSideNav';

const CourseDetails = () => {
  const courseDetails = useLoaderData();
  const { name, description, price, img_url } = courseDetails;
  console.log('courseDetails:', courseDetails)
  return (

    <div>
      <Container>
        <Row>
          {/* <Col lg="2" className='text-start left-nav rounded-2'>
            <LeftSideNav></LeftSideNav>
          </Col> */}

          <Col className='rounded-2 mb-5 course'>
            <div className="row row-cols-1 row-cols-md-2 g-4 course-details">
              <div className="col mx-auto">
                <div className="card p-4 pb-2 rounded-3 border border-0 shadow-lg">
                  <img src={img_url} className="card-img-top" alt={name} height="300px" />
                  <div className="card-body">
                    <h5 className="card-title">Name: {name}</h5>
                    <p className="card-text"><b>Price:</b> ${price}</p>
                    <p className="card-text">{description}</p>

                    <Link to={'/checkout'}>
                      <button className='btn btn-sm btn-outline-primary btn-width'>
                        <span className='d-flex justify-content-between'>
                          <div>Get premium access</div>
                          {/* <ChevronDoubleRightIcon className="icon-width" /> */}
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