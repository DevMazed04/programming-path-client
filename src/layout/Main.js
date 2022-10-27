import React from 'react';
import './Main.module.css';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Header from '../Pages/Shared/Header/Header';
// import LeftSideNav from '../Pages/Shared/LeftSideNav/LeftSideNav';
// import RightSideNav from '../Pages/Shared/RightSideNav/RightSideNav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Main = () => {
   return (
      // <div className="text-center">
      //    <Header></Header>

      //    <div className="container mb-5">
      //       <div className="row">
      //          <div className="col col-lg-2 left-nav rounded-3 text-start">
      //             <LeftSideNav></LeftSideNav>
      //          </div>

      //          <div className="col col-lg-10 outlet rounded-3">
      //             <Outlet></Outlet>
      //          </div>

      //          {/* <div className="col col-lg-3 right-nav rounded-3">
      //             <RightSideNav></RightSideNav>
      //          </div> */}
      //       </div>
      //    </div>

      //    <Footer></Footer>
      // </div>

      <div>
         <Header></Header>
         <div>
            <Container>
               <Row>
                  {/* <Col lg="2" className='text-start left-nav rounded-2'>
                     <LeftSideNav></LeftSideNav>
                  </Col> */}

                  <Col lg="" className='outlet rounded-2 mb-5'>
                     <Outlet></Outlet>
                  </Col>

                  {/* <Col lg="3">
                     <RightSideNav></RightSideNav>
                  </Col> */}
               </Row>
            </Container>
         </div>
         <Footer></Footer>
      </div>
   );
};

export default Main;