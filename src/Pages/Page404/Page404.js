import React from 'react';
import { Link } from 'react-router-dom';
import './Page404.css';

const Page404 = () => {
   return (
      <div>
         <div className="notfound d-flex flex-column justify-content-center align-items-center">
            <div className="notfound-404">
               <h1>404</h1>
            </div>
            <h2>Oops! This Page Could Not Be Found</h2>
            <p>Sorry but the page you are looking for does not exist, have been removed. name changed or is temporarily unavailable</p>
            <div>
               <Link to="/">
                  <button className='btn btn-primary' >Go To Home Page</button>
               </Link>
            </div>
         </div>
      </div>
   );
};

export default Page404;