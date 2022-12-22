import React from 'react';
import headerImg from '../../images/header.jpg';
import './Home.css';

const Home = () => {
   return (
      <section>
         <div className='home border-danger header mx-auto rounded-4 px-0 py-2  d-flex flex-lg-row flex-column justify-content-between  align-items-center ps-4 py-3 py-sm-0 header-bg'>

            <div>
               <img className='rounded-4' src={headerImg} alt="" width="280px" />
            </div>

            <div className='text-start home-info'>
               <h2>What to learn next?</h2>
               <small className='text-secondary'>Welcome to my <strong>Programming Path</strong> website. You can visit my website and chosse your favourite programming course which you like. Happy programming</small>
            </div>
         </div>
      </section>
   );
};

export default Home;