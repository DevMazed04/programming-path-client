import React from 'react';
import { Link } from 'react-router-dom';
import './CourseCards.css';

const CourseCards = ({ course }) => {
  const { id, name, img_url } = course;

  return (
    <div className="col">
      <div className="card course-cards rounded-2 border-0 p-3 rounded-3 shadow-lg">
        <img src={img_url} className="card-img-top  bg-dark rounded-3" alt="topic-img" />
        <div className="card-body d-flex justify-content-between align-items-center px-0 pb-0">
          <h5 className="card-title m-0 name">{name}</h5>

          <Link to={`/course-details/${id}`}>
            <button className='btn btn-sm btn-outline-primary btn-width'>
              <span className='d-flex justify-content-between'>
                <div>Details</div>
                {/* <ChevronDoubleRightIcon className="icon-width" /> */}
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCards;