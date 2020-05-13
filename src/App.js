import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Main from './components/main';
import Projects from './components/projects';
import Landing from './components/landingpage';
import About from './components/aboutme';
import Contact from './components/contact';
import Pdf from './assets/RESUMEnnguyen.pdf'
// import Scroll from 'react-scroll'
// import { Link } from 'react-router-dom';
import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
function App() {
  return (
    <div className="demo-big-content">
    {/* <Container fluid>
      <Row>
        <Col> */}
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
    <Navbar.Brand href="../">NHI NGUYEN</Navbar.Brand>
    <Navbar.Toggle className="header-toggle" aria-controls="responsive-navbar-nav" bg="dark"/>
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav activeKey="../" className="ml-auto">
                {/* <Nav.Link href="/resume">Resume</Nav.Link> */}
                <Nav.Link href={Pdf}>Resume</Nav.Link>
                <Nav.Link><Link to="about" spy={true} smooth={true} offset={50} duration={500}>About Me</Link></Nav.Link>
                <Nav.Link><Link to="projects" spy={true} smooth={true} offset={50} duration={500}>Projects</Link></Nav.Link>
                <Nav.Link><Link to="contact" spy={true} smooth={true} offset={50} duration={500}>Contact</Link></Nav.Link>
                {/* <Nav.Link href="/contact">Contact</Nav.Link> */}
              </Nav>
    </Navbar.Collapse>
  </Navbar>
    <Landing/>
    <About/>
    <Projects/>
    <Contact/>


</div>
  );
}

export default App;
