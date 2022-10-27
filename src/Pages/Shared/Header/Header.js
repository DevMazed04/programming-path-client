import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {

  return (
    <nav className="navbar navbar-expand-lg nav-bg navbar-dark mb-5 sticky-top">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">Programming Path</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/courses">Courses</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/blog">FAQ</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/blog">Blog</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/login">Login</Link>
            </li>
          </ul>
          <span className="navbar-text">
            <Link className="navbar-brand ms-2 me-0" to="/">
              <img src="" alt="" width="30" height="28"
                className="d-inline-block align-text-top rounded-pill" />
            </Link>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Header;