import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


const Header = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="" className="header-title"><span className="fs-1">K</span>nowledge Of Accounting Center</Navbar.Brand>

                    <Navbar.Collapse id="basic-navbar-nav" className='nav'>
                        <Nav className="m-2 nav-text">
                            <NavLink className="list" to="/about">About</NavLink>
                            <NavLink className="list" to="/contact">Contact</NavLink>
                            <NavLink className="list" to="/blog">Blog</NavLink>
                            {/* <NavLink className="list" to="/about">About us</NavLink> */}

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;