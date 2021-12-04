import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import About from '../About/About';
import Blogs from '../Blogs/Blogs';
import Contact from '../Contact/Contact';
import Header from '../Header/Header';
import logo from "../image/logo-01.png";
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import WantService from '../WantService/WantService';
import './Navigation.css';

const Navigation = () => {
    return (
        <div>
            <div className="">

                <Navbar fixed="top" bg="dark" className="navbar-dark mb-5" expand="lg">
                    <Container fluid>
                        <Navbar.Brand>
                            <NavLink to="/">
                                <img
                                    src={logo}
                                    width="100%"
                                    height="40px"
                                    className="d-inline-block align-top "
                                    alt="React Bootstrap logo"
                                />
                            </NavLink>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="ms-auto my-2 my-lg-0"
                                style={{ maxHeight: "100px" }}
                                navbarScroll
                            >
                                <Nav.Link as={HashLink} to="#home" className="nav-link hover-underline text-white">
                                    Home
                                </Nav.Link>

                                <Nav.Link as={HashLink} to="#about" className="nav-link hover-underline text-white">
                                    About
                                </Nav.Link>

                                <Nav.Link as={HashLink} to="#projects" className="nav-link hover-underline text-white">
                                    Projects
                                </Nav.Link>

                                <Nav.Link as={HashLink} to="#skill" className="nav-link hover-underline text-white">
                                    Skills
                                </Nav.Link>

                                <Nav.Link as={HashLink} to="#blogs" className="nav-link hover-underline text-white">
                                    Blogs
                                </Nav.Link>

                                <Nav.Link as={HashLink} to="#contact" className="nav-link hover-underline text-white">
                                    Contact Me
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

            </div>
            <div className="pt-5">
                <Header></Header>
            </div>

            <div>
                <About></About>
            </div>

            <div>
                <Projects className="mt-5"></Projects>
            </div>

            <div>
                <WantService></WantService>
            </div>

            <div>
                <Skills></Skills>
            </div>

            <div>
                <Blogs></Blogs>
            </div>

            <div>
                <Contact></Contact>
            </div>


        </div>

    );
};

export default Navigation;