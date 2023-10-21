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
            <Navbar className='header' collapseOnSelect expand="lg" bg="" variant="dark" >
                <Container>
                    <Navbar.Brand className='flex' as={Link} to="/">
                        <img className='ml-5 mr-2' height={100} src={logo} alt="" />
                        <Nav.Link className='pl-0 font-extrabold' as={Link} to="/">E-Coaching</Nav.Link>
                    </Navbar.Brand>

                    <Navbar.Toggle className='bg-green-500' aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto ml-20">
                            <Nav.Link href="/">Home</Nav.Link>

                            <Nav.Link as={Link} to="/services">Services</Nav.Link>
                            <Nav.Link as={Link} to="/popular">Popular Courses</Nav.Link>
                            <Nav.Link as={Link} to="/topselling">Top Selling Courses</Nav.Link>
                            <Nav.Link as={Link} to="/allcourses">All Courses</Nav.Link>

                        </Nav>
                        <Nav>

                            <Link to="/"> <img className=' mr-2' height={100} src={cart} alt="" /></Link>
                            <button className='flex btn btn-link text-white text-decoration-none bg-green-500 text-xs hover:bg-slate-500' >
                                <img className=' mr-2 ' height={100} src={profileIcon} alt="" />
                                Signin/Register</button>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;