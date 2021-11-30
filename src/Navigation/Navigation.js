import React from 'react';
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Header from '../Header/Header';
import logo from "../image/logo-01.png";
import Projects from '../Projects/Projects';
import './Navigation.css';

const Navigation = () => {
    return (
        <div>
            <div className="container-fluid px-5 mt-3">
                <Navbar sticky="top" bg="light" className="navbar-light" expand="lg">
                    <Container fluid>
                        <Navbar.Brand>
                            <NavLink className="" to="/">
                                <img
                                    src={logo}
                                    width="100%"
                                    height="35px"
                                    className="d-inline-block align-top"
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
                                <NavLink to="/home" className="nav-link hover-underline text-clr hover-underline ">
                                    Home
                                </NavLink>

                                <NavLink to="/about" className="nav-link hover-underline text-clr hover-underline ">
                                    About
                                </NavLink>

                                <NavLink to="/projects" className="nav-link hover-underline text-clr hover-underline ">
                                    Projects
                                </NavLink>

                                <NavLink to="/skills" className="nav-link hover-underline text-clr hover-underline ">
                                    Skills
                                </NavLink>

                                <NavLink to="/contact" className="nav-link hover-underline text-clr hover-underline ">
                                    Contact Me
                                </NavLink>
                            </Nav>

                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
            <div>
                <Header></Header>
            </div>
            <div>
                <Projects></Projects>
            </div>
        </div>

    );
};

export default Navigation;