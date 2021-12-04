import React, { useState } from 'react';
import { useEffect } from 'react';

import project1 from '../image/1.png';
import project2 from '../image/2.png';
import project3 from '../image/4.png';
import project4 from '../image/3.png';
import project5 from '../image/6.png';
import project6 from '../image/5.png';

import m1 from '../image/moto/1.png';
import m2 from '../image/moto/2.png';
import m3 from '../image/moto/3.png';

import t1 from '../image/tour/1.png';
import t2 from '../image/tour/2.png';
import t3 from '../image/tour/3.png';

import me1 from '../image/medi/1.png';
import me2 from '../image/medi/1.png';
import me3 from '../image/medi/1.png';

import e1 from '../image/edu/1.png';
import e2 from '../image/edu/1.png';
import e3 from '../image/edu/1.png';

import c1 from '../image/cbr/1.png';
import c2 from '../image/cbr/2.png';
import c3 from '../image/cbr/3.png';

import f1 from '../image/Football/1.png';
import f2 from '../image/Football/2.png';
import f3 from '../image/Football/3.png';

import AOS from 'aos';
import 'aos/dist/aos.css'
import './Projects.css';
import { Modal, Button } from 'react-bootstrap';
const Projects = () => {
    useEffect(() => {
        AOS.init();
    });
    const [show1, setShow1] = useState(false);
    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true)
    const [show2, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true)
    const [show3, setShow3] = useState(false);
    const handleClose3 = () => setShow3(false);
    const handleShow3 = () => setShow3(true)
    const [show4, setShow4] = useState(false);
    const handleClose4 = () => setShow4(false);
    const handleShow4 = () => setShow4(true)
    const [show5, setShow5] = useState(false);
    const handleClose5 = () => setShow5(false);
    const handleShow5 = () => setShow5(true)
    const [show6, setShow6] = useState(false);
    const handleClose6 = () => setShow6(false);
    const handleShow6 = () => setShow6(true);
    return (


        <div className="container py-5 flow" id="projects">
            <h1 className="name text-center">My Projects</h1>
            <h6 className="text-center mb-5">Work I Have Recently Done</h6>

            <div className="d-flex justify-content-center">
                <div class="row row-cols-1 row-cols-lg-3 g-4 mb-5 justify-content-center">
                    <div class="col  d-flex justify-content-center " data-aos="fade-right"
                        data-aos-duration="1000">
                        <div class="cards card">
                            <div className="">
                                <img src={project1} class="card-img-top" alt="..." />
                            </div>
                            <div class="card-body info">
                                <h4 class="card-title text-center mb-3 name fw-bold">Moto Shop</h4>
                                <p class="card-text mt-4 text-center">An online bike selling shop. Click Details to know more about this project & Click on the Live Site button to see the site.</p>
                                <div className="d-flex justify-content-between mt-5">
                                    <div>
                                        <a onClick={handleShow1} type="button" class="btn clr fw-bold">Details</a>

                                        <Modal
                                            show={show1}
                                            onHide={handleClose1}
                                            backdrop="static"
                                            keyboard={false}
                                        >
                                            <Modal.Header closeButton >
                                                <Modal.Title >
                                                    MotoShop
                                                </Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>
                                                <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                                                    <div class="carousel-indicators">
                                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                                    </div>
                                                    <div class="carousel-inner">
                                                        <div class="carousel-item active">
                                                            <img src={m1} class="d-block w-100" alt="..." />
                                                        </div>
                                                        <div class="carousel-item">
                                                            <img src={m2} class="d-block w-100" alt="..." />
                                                        </div>
                                                        <div class="carousel-item">
                                                            <img src={m3} class="d-block w-100" alt="..." />
                                                        </div>
                                                    </div>
                                                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                        <span class="visually-hidden">Previous</span>
                                                    </button>
                                                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                        <span class="visually-hidden">Next</span>
                                                    </button>
                                                </div>
                                                <div>
                                                    <h5 className=" text-dark my-4 pb-1 fw-bold">Technology Used</h5>
                                                </div>
                                                <div className="d-flex flex-wrap">
                                                    <h6 className="btn1 px-3 mx-1 py-2 rounded-pill">HTML</h6>
                                                    <h6 className="btn1 px-3 mx-1 py-2 rounded-pill">CSS</h6>
                                                    <h6 className="btn1 px-3 mx-1 py-2 rounded-pill">Bootstrap</h6>
                                                    <h6 className="btn1 px-3 mx-1 py-2 rounded-pill">ReactJS</h6>
                                                    <h6 className="btn1 px-3 mx-1 py-2 rounded-pill">ExpressJS</h6>
                                                    <h6 className="btn1 px-3 mx-1 py-2 rounded-pill">Firebase</h6>
                                                    <h6 className="btn1 px-3 mx-1 py-2 rounded-pill">MongoDB</h6>
                                                </div>
                                                <div>
                                                    <h5 className="text-dark mt-4 pb-1 fw-bold">Project Overview</h5>
                                                </div>
                                                <div className="d-flex flex-wrap">
                                                    <h6 className="text-secondary">1. A bike selling website. <br /> 2. For both admin and users there is a dashboard. <br /> 3. Admin can
                                                        add/delete/approve products. <br /> 4.Users can order products & give reviews.</h6>

                                                </div>
                                            </Modal.Body>
                                            <Modal.Footer>
                                                <Button variant="secondary" onClick={handleClose1}>
                                                    Close
                                                </Button>

                                            </Modal.Footer>
                                        </Modal>

                                    </div>
                                    <div>
                                        <a href="https://motoshop-shahin.netlify.app/" type="button" class="btn clr fw-bold">Live Site</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col  d-flex justify-content-center " data-aos="fade-up"
                        data-aos-duration="1000">
                        <div class="cards card">
                            <div className="">
                                <img src={project2} class="card-img-top" alt="..." />
                            </div>
                            <div class="card-body info">
                                <h5 class="card-title text-center  mb-3 name  fw-bold">Tour Planner</h5>
                                <p class="card-text text-center">Online Tour Package Booking Service. Click Details to know more about this project & Click on the Live Site button to see the site.</p>
                                <div className="d-flex justify-content-between mt-5">
                                    <div>
                                        <a onClick={handleShow2} type="button" class="btn clr fw-bold">Details</a>

                                        <Modal
                                            show={show2}
                                            onHide={handleClose2}
                                            backdrop="static"
                                            keyboard={false}
                                        >
                                            <Modal.Header closeButton >
                                                <Modal.Title >
                                                    MotoShop
                                                </Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>
                                                <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                                                    <div class="carousel-indicators">
                                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                                    </div>
                                                    <div class="carousel-inner">
                                                        <div class="carousel-item active">
                                                            <img src={t1} class="d-block w-100" alt="..." />
                                                        </div>
                                                        <div class="carousel-item">
                                                            <img src={t2} class="d-block w-100" alt="..." />
                                                        </div>
                                                        <div class="carousel-item">
                                                            <img src={t3} class="d-block w-100" alt="..." />
                                                        </div>
                                                    </div>
                                                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                        <span class="visually-hidden">Previous</span>
                                                    </button>
                                                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                        <span class="visually-hidden">Next</span>
                                                    </button>
                                                </div>
                                                <div>
                                                    <h5 className=" text-dark my-4 pb-1 fw-bold">Technology Used</h5>
                                                </div>
                                                <div className="d-flex flex-wrap">
                                                    <h6 className="btn1 px-3 mx-1 py-2 rounded-pill">HTML</h6>
                                                    <h6 className="btn1 px-3 mx-1 py-2 rounded-pill">CSS</h6>
                                                    <h6 className="btn1 px-3 mx-1 py-2 rounded-pill">Bootstrap</h6>
                                                    <h6 className="btn1 px-3 mx-1 py-2 rounded-pill">ReactJS</h6>
                                                    <h6 className="btn1 px-3 mx-1 py-2 rounded-pill">ExpressJS</h6>
                                                    <h6 className="btn1 px-3 mx-1 py-2 rounded-pill">Firebase</h6>
                                                    <h6 className="btn1 px-3 mx-1 py-2 rounded-pill">MongoDB</h6>
                                                </div>
                                                <div>
                                                    <h5 className="text-dark mt-4 pb-1 fw-bold">Project Overview</h5>
                                                </div>
                                                <div className="d-flex flex-wrap">
                                                    <h6 className="text-secondary">1. An online travel package booking website. <br />Users can buy travel package & also can cancel the
                                                        order. <br /> 3. Admin can add a package and can update the order status. <br /> 4. Users can log in through both email and google.</h6>

                                                </div>
                                            </Modal.Body>
                                            <Modal.Footer>
                                                <Button variant="secondary" onClick={handleClose2}>
                                                    Close
                                                </Button>

                                            </Modal.Footer>
                                        </Modal>

                                    </div>
                                    <div>
                                        <a href="https://tour-planner-shahin.netlify.app/" type="button" class="btn clr fw-bold">Live Site</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col  d-flex justify-content-center" data-aos="fade-left"
                        data-aos-duration="1000">
                        <div class="cards card">
                            <div className="">
                                <img src={project3} class="card-img-top" alt="..." />
                            </div>
                            <div class="card-body info">
                                <h5 class="card-title text-center  mb-3 name  fw-bold">Medicare</h5>
                                <p class="card-text text-center">A health service website. Click Details to know more about this project & Click on the Live Site button to see the site.</p>
                                <div className="d-flex justify-content-between mt-5">
                                    <div>
                                        <a onClick={handleShow3} type="button" class="btn clr fw-bold">Details</a>

                                        <Modal
                                            show={show3}
                                            onHide={handleClose3}
                                            backdrop="static"
                                            keyboard={false}
                                        >
                                            <Modal.Header closeButton >
                                                <Modal.Title >
                                                    MotoShop
                                                </Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>
                                                <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                                                    <div class="carousel-indicators">
                                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                                    </div>
                                                    <div class="carousel-inner">
                                                        <div class="carousel-item active">
                                                            <img src={me1} class="d-block w-100" alt="..." />
                                                        </div>
                                                        <div class="carousel-item">
                                                            <img src={me2} class="d-block w-100" alt="..." />
                                                        </div>
                                                        <div class="carousel-item">
                                                            <img src={me3} class="d-block w-100" alt="..." />
                                                        </div>
                                                    </div>
                                                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                        <span class="visually-hidden">Previous</span>
                                                    </button>
                                                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                        <span class="visually-hidden">Next</span>
                                                    </button>
                                                </div>
                                                <div>
                                                    <h5 className=" text-dark my-4 pb-1 fw-bold">Technology Used</h5>
                                                </div>
                                                <div className="d-flex flex-wrap">
                                                    <h6 className="btn1 px-3 mx-1 py-2 rounded-pill">HTML</h6>
                                                    <h6 className="btn1 px-3 mx-1 py-2 rounded-pill">CSS</h6>
                                                    <h6 className="btn1 px-3 mx-1 py-2 rounded-pill">Bootstrap</h6>
                                                    <h6 className="btn1 px-3 mx-1 py-2 rounded-pill">ReactJS</h6>
                                                    <h6 className="btn1 px-3 mx-1 py-2 rounded-pill">Firebase</h6>

                                                </div>
                                                <div>
                                                    <h5 className="text-dark mt-4 pb-1 fw-bold">Project Overview</h5>
                                                </div>
                                                <div className="d-flex flex-wrap">
                                                    <h6 className="text-secondary">1. A Medical health care website. <br /> 2. Users can login & appoint any doctor & can see the information
                                                        of doctors.<br /> 3. Users can log in through both email and google.</h6>

                                                </div>
                                            </Modal.Body>
                                            <Modal.Footer>
                                                <Button variant="secondary" onClick={handleClose3}>
                                                    Close
                                                </Button>

                                            </Modal.Footer>
                                        </Modal>

                                    </div>
                                    <div>
                                        <a href="https://medicare-shahin.netlify.app/" type="button" class="btn clr fw-bold">Live Site</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col  d-flex justify-content-center" data-aos="fade-right"
                        data-aos-duration="1000" >
                        <div class="cards card">
                            <div className="">
                                <img src={project4} class="card-img-top" alt="..." />
                            </div>
                            <div class="card-body info">
                                <h5 class="card-title text-center  mb-3 name  fw-bold">Educen</h5>
                                <p class="card-text text-center">A website providing online course. Click Details to know more about this project & Click on the Live Site button to see the site.</p>
                                <div className="d-flex justify-content-between mt-5">
                                    <div>
                                        <a onClick={handleShow4} type="button" class="btn clr fw-bold">Details</a>

                                        <Modal
                                            show={show4}
                                            onHide={handleClose4}
                                            backdrop="static"
                                            keyboard={false}
                                        >
                                            <Modal.Header closeButton >
                                                <Modal.Title >
                                                    MotoShop
                                                </Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>
                                                <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                                                    <div class="carousel-indicators">
                                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                                    </div>
                                                    <div class="carousel-inner">
                                                        <div class="carousel-item active">
                                                            <img src={e1} class="d-block w-100" alt="..." />
                                                        </div>
                                                        <div class="carousel-item">
                                                            <img src={e2} class="d-block w-100" alt="..." />
                                                        </div>
                                                        <div class="carousel-item">
                                                            <img src={e3} class="d-block w-100" alt="..." />
                                                        </div>
                                                    </div>
                                                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                        <span class="visually-hidden">Previous</span>
                                                    </button>
                                                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                        <span class="visually-hidden">Next</span>
                                                    </button>
                                                </div>
                                                <div>
                                                    <h5 className=" text-dark my-4 pb-1 fw-bold">Technology Used</h5>
                                                </div>
                                                <div className="d-flex flex-wrap">
                                                    <h6 className="btn1 px-3 mx-1 py-2 rounded-pill">HTML</h6>
                                                    <h6 className="btn1 px-3 mx-1 py-2 rounded-pill">CSS</h6>
                                                    <h6 className="btn1 px-3 mx-1 py-2 rounded-pill">Bootstrap</h6>
                                                    <h6 className="btn1 px-3 mx-1 py-2 rounded-pill">Javascript</h6>
                                                </div>
                                                <div>
                                                    <h5 className="text-dark mt-4 pb-1 fw-bold">Project Overview</h5>
                                                </div>
                                                <div className="d-flex flex-wrap">
                                                    <h6 className="text-secondary">1. A website of Educational Courses. <br /> 2.Here you can buy courses of many topics. </h6>

                                                </div>
                                            </Modal.Body>
                                            <Modal.Footer>
                                                <Button variant="secondary" onClick={handleClose4}>
                                                    Close
                                                </Button>

                                            </Modal.Footer>
                                        </Modal>

                                    </div>
                                    <div>
                                        <a href="https://educen.netlify.app" type="button" class="btn clr fw-bold">Live Site</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col d-flex justify-content-center " data-aos="fade-up"
                        data-aos-duration="1000">
                        <div class="cards card">
                            <div className="">
                                <img src={project5} class="card-img-top" alt="..." />
                            </div>
                            <div class="card-body info">
                                <h5 class="card-title text-center  mb-3 name  fw-bold">Honda CBR</h5>
                                <p class="card-text text-center">A honda service site. Click Details to know more about this project & Click on the Live Site button to see the site.</p>
                                <div className="d-flex justify-content-between mt-5">
                                    <div>
                                        <a onClick={handleShow5} type="button" class="btn clr fw-bold">Details</a>

                                        <Modal
                                            show={show5}
                                            onHide={handleClose5}
                                            backdrop="static"
                                            keyboard={false}
                                        >
                                            <Modal.Header closeButton >
                                                <Modal.Title >
                                                    MotoShop
                                                </Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>
                                                <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                                                    <div class="carousel-indicators">
                                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                                    </div>
                                                    <div class="carousel-inner">
                                                        <div class="carousel-item active">
                                                            <img src={c1} class="d-block w-100" alt="..." />
                                                        </div>
                                                        <div class="carousel-item">
                                                            <img src={c2} class="d-block w-100" alt="..." />
                                                        </div>
                                                        <div class="carousel-item">
                                                            <img src={c3} class="d-block w-100" alt="..." />
                                                        </div>
                                                    </div>
                                                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                        <span class="visually-hidden">Previous</span>
                                                    </button>
                                                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                        <span class="visually-hidden">Next</span>
                                                    </button>
                                                </div>
                                                <div>
                                                    <h5 className=" text-dark my-4 pb-1 fw-bold">Technology Used</h5>
                                                </div>
                                                <div className="d-flex flex-wrap">
                                                    <h6 className="btn1 px-3 mx-1 py-2 rounded-pill">HTML</h6>
                                                    <h6 className="btn1 px-3 mx-1 py-2 rounded-pill">CSS</h6>
                                                    <h6 className="btn1 px-3 mx-1 py-2 rounded-pill">Bootstrap</h6>
                                                </div>
                                                <div>
                                                    <h5 className="text-dark mt-4 pb-1 fw-bold">Project Overview</h5>
                                                </div>
                                                <div className="d-flex flex-wrap">
                                                    <h6 className="text-secondary">1. A website of Honda CBR <br /> 2. Users can see the  collection of honda bikes here.<br /> 3. Users can watch blogs about bike.</h6>

                                                </div>
                                            </Modal.Body>
                                            <Modal.Footer>
                                                <Button variant="secondary" onClick={handleClose5}>
                                                    Close
                                                </Button>

                                            </Modal.Footer>
                                        </Modal>

                                    </div>
                                    <div>
                                        <a href="https://bikeshop-shahin.netlify.app" type="button" class="btn clr fw-bold">Live Site</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col d-flex justify-content-center " data-aos="fade-left"
                        data-aos-duration="1000">
                        <div class="cards card">
                            <div className="">
                                <img src={project6} class="card-img-top" alt="..." />
                            </div>
                            <div class="card-body info">
                                <h5 class="card-title text-center  mb-3 name  fw-bold">Soccer News</h5>
                                <p class="card-text text-center">A site that gives you news about soccer. Click Details to know more about this project & Click on the Live Site button to see the site.</p>
                                <div className="d-flex justify-content-between mt-5">
                                    <div>
                                        <a onClick={handleShow6} type="button" class="btn clr fw-bold">Details</a>

                                        <Modal
                                            show={show6}
                                            onHide={handleClose6}
                                            backdrop="static"
                                            keyboard={false}
                                        >
                                            <Modal.Header closeButton >
                                                <Modal.Title >
                                                    MotoShop
                                                </Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>
                                                <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                                                    <div class="carousel-indicators">
                                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                                    </div>
                                                    <div class="carousel-inner">
                                                        <div class="carousel-item active">
                                                            <img src={f1} class="d-block w-100" alt="..." />
                                                        </div>
                                                        <div class="carousel-item">
                                                            <img src={f2} class="d-block w-100" alt="..." />
                                                        </div>
                                                        <div class="carousel-item">
                                                            <img src={f3} class="d-block w-100" alt="..." />
                                                        </div>
                                                    </div>
                                                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                        <span class="visually-hidden">Previous</span>
                                                    </button>
                                                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                        <span class="visually-hidden">Next</span>
                                                    </button>
                                                </div>
                                                <div>
                                                    <h5 className=" text-dark my-4 pb-1 fw-bold">Technology Used</h5>
                                                </div>
                                                <div className="d-flex flex-wrap">
                                                    <h6 className="btn1 px-3 mx-1 py-2 rounded-pill">HTML</h6>
                                                    <h6 className="btn1 px-3 mx-1 py-2 rounded-pill">CSS</h6>
                                                    <h6 className="btn1 px-3 mx-1 py-2 rounded-pill">Bootstrap</h6>
                                                </div>
                                                <div>
                                                    <h5 className="text-dark mt-4 pb-1 fw-bold">Project Overview</h5>
                                                </div>
                                                <div className="d-flex flex-wrap">
                                                    <h6 className="text-secondary">1. A website of soccer news. <br /> 2. Users can get update about soccers.<br /> 3. Users can see match highlights here.</h6>

                                                </div>
                                            </Modal.Body>
                                            <Modal.Footer>
                                                <Button variant="secondary" onClick={handleClose6}>
                                                    Close
                                                </Button>

                                            </Modal.Footer>
                                        </Modal>

                                    </div>
                                    <div>
                                        <a href="https://football-shahin.netlify.app" type="button" class="btn clr fw-bold">Live Site</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Projects;