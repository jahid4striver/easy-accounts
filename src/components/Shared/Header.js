import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar className='shadow-sm p-3 mb-5 bg-body rounded' collapseOnSelect expand="lg" bg="white" variant="light">
            <Container>
                <Navbar.Brand className='text-dark' href="#home">Easy Accounts</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Link className='text-decoration-none ms-3 text-dark' to="/">Home</Link>
                        <Link className='text-decoration-none ms-3 text-dark' to="/services">Services</Link>
                        <Link className='text-decoration-none ms-3 text-dark' to="/about">About</Link>
                        <Link className='text-decoration-none ms-3 text-dark' to="/login">Login</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;