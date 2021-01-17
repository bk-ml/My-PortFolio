import React, { Component } from 'react'
import {NavDropdown, Form, FormControl, Button, Nav, Navbar} from 'react-bootstrap'

class NavBar extends Component {
  
    render() {
        return (
            <React.Fragment>
                <Navbar bg="dark" expand="sm" sticky="top" collapseOnSelect="true" >
                <Navbar.Brand href="#home">BK</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto navbar-nav">
                    <Nav.Link className="nav-item" href="#home">Home</Nav.Link>
                    <Nav.Link className="nav-item" href="#about_id">About</Nav.Link>
                    <Nav.Link className="nav-item" href="#skills_id">Skills</Nav.Link>
                    <Nav.Link className="nav-item" href="#workExperience_id">Work Experience</Nav.Link>
                    <Nav.Link className="nav-item" href="#certificate_id">Certificates</Nav.Link>
                    <Nav.Link className="nav-item" href="#projects_id">Projects</Nav.Link>
                    <Nav.Link className="nav-item" href="#contactAndResume_id">Contact</Nav.Link>
                    <Nav.Link className="nav-item" href="#contactAndResume_id">Resume</Nav.Link>
                  </Nav>
                  
                </Navbar.Collapse>
              </Navbar>
            </React.Fragment>
        )
    }
}
export default NavBar

