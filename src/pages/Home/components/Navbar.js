import React from "react";
import { ReactDOM} from "react";    
import { Component } from "react";
import { Container,Row,Col,Nav,Navbar } from "react-bootstrap";
import '../src/css/navbar.css'

class NavBar extends Component {
    render() {
        return (
        <div className="nvbar">
            <Container style={{paddingTop:'2%'}}>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="light" style={{color:'white'}}>
                    <Container>
                        <Navbar.Brand href="#home">
                            <img src={require('../src/img/logo.png')}
                                width="90"
                                height="30"
                                className="d-inline-block align-top"
                                alt="React Bootstrap logo"
                            />&nbsp;&nbsp;
                            St John <span style={{color:'#BAB866'}}>Evangelist</span> Church
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                        {/* <Nav className="me-auto">
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                            </NavDropdown>
                        </Nav> */}
                        <Nav>
                            <Nav.Link href="#deets" className='content'>Home</Nav.Link>
                            <Nav.Link href="#deets" className='content'>About Us</Nav.Link>
                            <Nav.Link href="#deets" className='content'>Worship</Nav.Link>
                            <Nav.Link href="#deets" className='content'>Giving</Nav.Link>
                            <Nav.Link href="#deets" className='content'>Support Us</Nav.Link>
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Container>
        </div>
        );
    }
}

export default NavBar;