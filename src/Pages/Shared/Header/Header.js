import React from 'react';
import { Col, Container, Nav, Navbar, NavLink, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark" collapseOnSelect expand="lg">
                <Container>


                    <Navbar.Brand href="#home" className='banner-logo justify-content-start'>
                        <img src='https://lh3.googleusercontent.com/proxy/q-LGYaiTt9dGgDZ7YBV1MbEapY6gvDHEFhNPkxcXSCJSWRrZDTScYoCSe4Qgsp396J7lhiuI_KK1iJx20tbeAjPW_cxONvA348wJaYI7sH3kxrkxiOTT9y7bzUTbnor4KxqxvYvj5gnc-SuGf_9S4TyPd4VQqQcBjzG25mNY_V6U-6wIMGjaz-9-pkJpAg' alt="" />
                    </Navbar.Brand>

                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={Link} to='/home'>Home</Nav.Link>
                        <Nav.Link as={Link} to='/about'>About</Nav.Link>
                        <Nav.Link as={Link} to='/services'>Services</Nav.Link>
                        <Nav.Link as={Link} to='/reviews'>Reviews</Nav.Link>
                        <Nav.Link as={Link} to='/login'>Reviews</Nav.Link>
                        <Navbar.Text>
                            Signed in as: <a href="#login">Mark Otto</a>
                        </Navbar.Text>
                    </Navbar.Collapse>




                </Container>
            </Navbar>


        </>
    );
};

export default Header;