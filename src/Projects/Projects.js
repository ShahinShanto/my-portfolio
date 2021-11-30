import React from 'react';
import project1 from '../image/moto.png';
import project2 from '../image/tour 1.png';
import project3 from '../image/medicare 1.png';
import project4 from '../image/edu 1.png';
import project5 from '../image/honda 1.png';
import project6 from '../image/football1.png';
import './Projects.css';
const Projects = () => {
    return (


        <div className="container">
            <h1 className="name text-center">My Projects</h1>
            <h6 className="text-center mb-5">Work I Have Recently Done</h6>
            <div className="d-flex justify-content-center">
                <div class="row row-cols-1 row-cols-lg-3 g-5 mb-5 justify-content-center">
                    <div class="col  d-flex justify-content-center">
                        <div class="cards card">
                            <div className="">
                                <img src={project1} class="card-img-top" alt="..." />
                            </div>
                            <div class="card-body info">
                                <h4 class="card-title text-center">Moto Shop</h4>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.</p>
                                <div className="d-flex">
                                    <div>
                                        <button type="button" class="btn btn-primary clr">Details</button>
                                    </div>
                                    <div>
                                        <button type="button" class="btn btn-primary clr">Details</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col  d-flex justify-content-center">
                        <div class="cards card">
                            <div className="">
                                <img src={project2} class="card-img-top" alt="..." />
                            </div>
                            <div class="card-body info">
                                <h5 class="card-title text-center">Tour Planner</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col  d-flex justify-content-center">
                        <div class="cards card">
                            <div className="">
                                <img src={project3} class="card-img-top" alt="..." />
                            </div>
                            <div class="card-body info">
                                <h5 class="card-title text-center">Medicare</h5>
                                <p class="card-text ">This is a longer card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col  d-flex justify-content-center">
                        <div class="cards card">
                            <div className="">
                                <img src={project4} class="card-img-top" alt="..." />
                            </div>
                            <div class="card-body info">
                                <h5 class="card-title text-center">Educen</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col d-flex justify-content-center ">
                        <div class="cards card">
                            <div className="">
                                <img src={project5} class="card-img-top" alt="..." />
                            </div>
                            <div class="card-body info">
                                <h5 class="card-title text-center">Honda CBR</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col d-flex justify-content-center ">
                        <div class="cards card">
                            <div className="">
                                <img src={project6} class="card-img-top" alt="..." />
                            </div>
                            <div class="card-body info">
                                <h5 class="card-title text-center">Soccer News</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Projects;