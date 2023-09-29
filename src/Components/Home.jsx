import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../Asset/my-css/home.css";
import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import homePageImg from "../Asset/imgs/homepageimg.png";
import bitmap1 from "../Asset/imgs/Bitmap1.png";
import employee from "../Asset/imgs/employee-icon.png";
import silver from "../Asset/imgs/Silver.png";
import unsplash from "../Asset/imgs/unsplash.png";
import { FaBriefcase, FaPlusCircle, FaLink} from 'react-icons/fa';


const homepage = () => {
  return (
   <>
    <section className="heroSection"> 
    
    <header>
   <Navbar collapseOnSelect expand="lg">
     <Container className="">
       <Navbar.Brand href="#home">SiteLogoHere</Navbar.Brand>
       <Navbar.Toggle aria-controls="responsive-navbar-nav" />
       <Navbar.Collapse id="responsive-navbar-nav">
         <Nav className="me-auto ms-auto">
           <Nav.Link href="#howwework" className="navlink"><span>How We Work</span></Nav.Link>
           <Nav.Link href="#pricing" className="navlink"><span>Pricing</span></Nav.Link>
           <Nav.Link href="#download" className="navlink"><span>Download</span></Nav.Link>
           <Nav.Link href="#aboutus" className="navlink"><span>About Us</span></Nav.Link>
         </Nav>
         
         <Nav>
           <Nav.Link href="#postjob" className="btn"><span>Post Job</span></Nav.Link>
           <Nav.Link eventKey={2} href="#gethired" className=" btn mainBtn">
             <span>Get Hired</span>
           </Nav.Link>
         </Nav>
       </Navbar.Collapse>
     </Container>
   </Navbar>
   </header>

   <Container>
     <Row className="heroBanner">
       <Col className="heroLinks">
         <span>First 90 Days Free For Employers!</span>
         <h1>Connect. Merge. Work</h1>
         <Nav>
           <Nav.Link href="#postjob" className="btn"><span>Post Job</span></Nav.Link>
           <Nav.Link eventKey={2} href="#gethired" className=" btn mainBtn">
             <span>Get Hired</span>
           </Nav.Link>
         </Nav>
       </Col>
       <Col>
           <div>
             <img src={homePageImg} className="w-100"></img>
           </div>
       </Col>
     </Row>
   </Container>
   </section>

   <section>
     <Container>
      <Row className="section2 mt-5">
        <Col lg={4} md={4} sm={12}>
         <div className='mt-4'>
         <div>
         <FaLink className='icon mb-3'/>
           </div>
           <div>
            <h4>Connect</h4>
            <span>
              StaffMerge mission is to CONNECT Employers with job seekers in an effective and efficient platform making it easier for both. 
            </span>
           </div>
         </div>
        </Col>
        <Col lg={4} md={4} sm={12}>
         <div className='mt-4'>
         <div>
         <FaPlusCircle className='icon mb-3'/>
           </div>
           <div>
            <h4>Merge</h4>
            <span>
            Using Resumes, Video Introductions, Video Interviews, and Direct Messages, StaffMerge’s platform goal is to MERGE Employers and Job Seekers.</span>
           </div>
         </div>
        </Col>
        <Col lg={4} md={4} sm={12}>
         <div>
         <div className='mt-4'>
         <FaBriefcase className='icon mb-3'/>
           </div>
           <div>
            <h4>Work</h4>
            <span>
            After Employers and Job Seekers have connected and merged, now it is time to WORK, mutually benefiting both.</span>
           </div>
         </div>
        </Col>
      </Row>
     </Container>
   </section>
    <section>
      <Container>
        <Row className="section3">
          <Col>
          {/* video should be here */}

          <div className="video d-flex">
             <img src={homePageImg} className="w-50 videoImg"></img>
           </div>
          </Col>
        </Row>
      </Container>
    </section>

    <section>
      <Container>
        <Row className="d-flex section4">
          <Col className="applicantsWrap1 mb-4">
            <div className="applicantsTitle">
              <h4>Qualified Applicants</h4>
              <Nav.Link eventKey={2} href="#gethired" className="btn mainBtn">
             <span>Get Started</span>
           </Nav.Link>
            </div>
          </Col>

          <Col className="">
            <div className="StaffMergeContainer">
            <div className="d-flex staffMergeWrap">
            <Navbar.Brand href="#home">SiteLogoHere</Navbar.Brand>
            </div>
              <div className="wrap1 d-flex mt-5">
                <div className="imgWrap">
                <img src={bitmap1} className="section4Icon"></img>
                </div>
                <div className="w-100 chat1">
                  <div className="d-flex ">
                  <h4>Stanley Wilson</h4>
                  <img src={employee} className="  ChatIcon"></img>
                  </div>
                  <span>
                    Had 5 years working experience as design lead. Working for a reputed company.
                  </span>
                  <div className="d-flex mt-3">
                    <Col className="d-flex">
                    <span>Location-</span>
                    <h4>NY</h4>
                    </Col>
                    <Col className="d-flex">
                    <span>Type-</span>
                    <h4>Remote</h4>
                    </Col>
                  </div>
                </div>
              </div>
            </div>

            <div className="">
              <div className="wrap2 d-flex mt-5">
                <div className="imgWrap">
                <img src={bitmap1} className="section4Icon"></img>
                </div>
                <div className="w-100 chat2">
                  <div className="d-flex ">
                  <h4>Stanley Wilson</h4>
                  <img src={employee} className="  ChatIcon"></img>
                  </div>
                  <span>
                    Had 5 years working experience as design lead. Working for a reputed company.
                  </span>
                  <div className="d-flex mt-3">
                    <Col className="d-flex me-3">
                    <span>Location-</span>
                    <h4>NY</h4>
                    </Col>
                    <Col className="d-flex">
                    <span>Type-</span>
                    <h4>Remote</h4>
                    </Col>
                  </div>
                  <div className="chat2spans">
                <h4>Skills</h4>
                <a href="#" className="Active">Sketch</a>
                <a href="#">Indesign</a>
                <a href="#">Adobe Suite</a>
              </div>
                </div>
              </div>
              </div>


              <div className="StaffMergeContainer   StaffMergeContainerDown">
              <div className="wrap1 wrap1Down d-flex mt-5">
                <div className="imgWrap">
                <img src={bitmap1} className="section4Icon"></img>
                </div>
                <div className="w-100 chat1">
                  <div className="d-flex ">
                  <h4>Stanley Wilson</h4>
                  <img src={employee} className="  ChatIcon"></img>
                  </div>
                  <span>
                    Had 5 years working experience as design lead. Working for a reputed company.
                  </span>
                  <div className="d-flex mt-3">
                    <Col className="d-flex">
                    <span>Location-</span>
                    <h4>NY</h4>
                    </Col>
                    <Col className="d-flex">
                    <span>Type-</span>
                    <h4>Remote</h4>
                    </Col>
                  </div>
                  <div className="chat3spans">
                <h4>Skills</h4>
                <a href="#" className="Active">Sketch</a>
                <a href="#">Indesign</a>
                <a href="#">Adobe Suite</a>
              </div>
                </div>
              </div>
              </div>
          </Col>
        </Row>
      </Container>
    </section>

    <section>
      <Container>
        <div className="d-flex section5">
        <Col>
        <div className="imgWrap">
          <img src={silver} className=""></img>
         </div>


        <div className="imgWrap">
          <img src={unsplash} className=""></img>
          <h4>Video for Data Scientist Interview</h4>
         </div>


        </Col>
        <Col className="applicantsWrap1">
          <div className="applicantsTitle">
            <h4>Video Introductions</h4>
            <Nav.Link eventKey={2} href="#gethired" className="btn mainBtn">
             <span>Get Started</span>
           </Nav.Link>
          </div>
        </Col>
        </div>
      </Container>
    </section>
   </>
  )
}

export default homepage;