import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
   return (
      <div className='footer fixed-bottom text-white text-center bg-white shadow-lg'>
         {/* <h5 className="mb-1 text-black fs-5">Programming Path</h5> */}
         <small className='text-black'>
            <Link to="/" className='text-decoration-none me-1'>
               <span className='footer-info'>Programming Path</span>
            </Link>
            ||  © 2022 - All Rights Reserved.</small>
      </div>
   );
};

export default Footer;