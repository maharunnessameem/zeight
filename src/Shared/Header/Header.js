import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from "../../images/telegram-16.png";
import profileIcon from "../../images/profile.png";
import cart from "../../images/cart.png"

import "./Header.css"

const Header = () => {
    return (
        <>
            <Navbar className='header' collapseOnSelect expand="lg" sticky='top' bg="" variant="dark" >
                <Container>
                    <Navbar.Brand className='flex' as={Link} to="/">
                        <img className='ml-5 mr-2' height={100} src={logo} alt="" />
                        <Nav.Link className='pl-0 font-bold' as={Link} to="/">E-Coaching</Nav.Link>
                    </Navbar.Brand>
                    {/* <Nav.Link as={Link} to="/">E-Coaching</Nav.Link> */}
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto ml-20">
                            <Nav.Link href="/">Home</Nav.Link>
                            {/* <Nav.Link href="home#experts">Experts</Nav.Link> */}
                            <Nav.Link as={Link} to="services">Services</Nav.Link>
                            <Nav.Link as={Link} to="popular">Popular Courses</Nav.Link>
                            <Nav.Link as={Link} to="about">Top Selling Courses</Nav.Link>
                            <Nav.Link as={Link} to="about">All Courses</Nav.Link>
                            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown> */}
                        </Nav>
                        <Nav>
                            {/* <Nav.Link as={Link} to="about">About</Nav.Link> */}
                            <img className=' mr-2' height={100} src={cart} alt="" />
                            <button className='flex btn btn-link text-white text-decoration-none bg-green-600' >
                                <img className=' mr-2 ' height={100} src={profileIcon} alt="" />
                                Signin/Register</button>
                            {/* <button className='btn btn-link text-black text-decoration-none' >register</button> */}
                            {/* <Nav.Link as={Link} to="login">
                                register
                            </Nav.Link> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;