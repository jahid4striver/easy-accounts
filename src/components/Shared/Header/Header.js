import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import CustomLink from '../../../CustomLink/CustomLink';
import auth from '../../../Firebase/Firebase';
import './Header.css'

const Header = () => {
    const [user]= useAuthState(auth);

    const handleSignOut= ()=>{
        signOut(auth);
    }
    return (
        <Navbar  className='shadow-sm p-3 mb-5 bg-body rounded setmargin' collapseOnSelect expand="lg" bg="white" variant="light">
            <Container>
                <Navbar.Brand className='text-dark' href="#home"><h3>Easy Accounts</h3></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <CustomLink className='text-decoration-none ms-3 text-dark' to="/">Home</CustomLink>
                        <CustomLink className='text-decoration-none ms-3 text-dark' to="/blogs">Blogs</CustomLink>
                        <CustomLink className='text-decoration-none ms-3 text-dark' to="/about">About Me</CustomLink>
                        {
                            user?<button onClick={handleSignOut} style={{border:'0', backgroundColor: 'white'}} className='text-decoration-none ms-3 text-dark'>Sign Out</button> :<CustomLink className='text-decoration-none ms-3 text-dark' to="/login">Login</CustomLink>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;