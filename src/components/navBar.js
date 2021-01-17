import React, { Component } from 'react'
import {Nav, Navbar} from 'react-bootstrap'

class NavBar extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar className="nav_class" bg="dark" variant="dark" expand="sm" sticky="top" collapseOnSelect="true" >
                <Navbar.Brand href="/">BK</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">                   
                  <Nav className="mr-auto navbar-nav" id="nav_id">
                    <Nav.Link className="nav-item" href="#Intro_id">Home</Nav.Link>
                    <Nav.Link className="nav-item" href="#about_id">About</Nav.Link>
                    <Nav.Link className="nav-item" href="#skills_id">Skills</Nav.Link>
                    <Nav.Link className="nav-item" href="#workExperience_id">Work Experience</Nav.Link>
                    <Nav.Link className="nav-item" href="#certificate_id">Certificates</Nav.Link>
                    <Nav.Link className="nav-item" href="#projects_id">Projects</Nav.Link>
                    <Nav.Link className="nav-item" href="#contactAndResume_id">Contact</Nav.Link>
                    <Nav.Link className="nav-item" id="nav_resume" 
                    href="https://drive.google.com/file/d/1Z8q57R7AfF_hQ8h9dno7z839V6PkoH8C/view?usp=sharing">
                      Download Resume</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </React.Fragment>
        )
    }
}
export default NavBar

