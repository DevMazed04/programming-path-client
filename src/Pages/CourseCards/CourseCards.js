import React from 'react';
import { Link } from 'react-router-dom';
import './CourseCards.css';

const CourseCards = ({ course }) => {
  const { id, name, price, img_url } = course;

  return (
    <div className="col">
      <div className="card course-cards rounded-2 border-0 p-3 rounded-3 shadow-lg">
        <img src={img_url} className="card-img-top  bg-dark rounded-3" alt="topic-img" height="150px" />
        <div className="card-body px-0 pb-0">
          <h5 className="card-title m-0 name text-start fw-bold">{name}</h5>

          <div className='d-flex justify-content-between mt-3 text-primary'>
            <h5 className='fw-bold'>${price}</h5>
            <div>
              <Link to={`/course-details/${id}`}>
                <button className='btn btn-sm btn-outline-primary btn-width'>
                  <span className='d-flex justify-content-between'>
                    <div>See Details</div>
                  </span>
                </button>
              </Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCards;