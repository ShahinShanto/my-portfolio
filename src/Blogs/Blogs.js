import React from 'react';

const Blogs = () => {
    return (
        <section class="container mt-lg-4 mt-2" id="blogs">
            <h1 class="name text-center mt-5">My Blogs</h1>
            <h6 className="text-center mb-5">Read Articles</h6>

            <div class="row row-cols-1 row-cols-lg-2 g-4">
                <div class="col" data-aos="zoom-in-up" data-aos-duration="1000">
                    <div class="card h-100">
                        <div class="row align-items-center ps-0 ps-lg-3">
                            <div class="col-lg-6 text-center py-4 ">
                                <img class="img-fluid px-4 px-lg-0" alt="" src="https://i.ytimg.com/vi/0198ceyTVtg/maxresdefault.jpg" />
                            </div>
                            <div class="col-lg-6 ">
                                <div class="card-body">
                                    <h5 className="card-title name">Create progress bar Using HTML, CSS </h5>

                                    <p className="card-text "><small className="text-muted">Last updated 2 days ago</small></p>
                                    <a href="/" type="button" class="btn1 py-2 px-3" >Read More</a>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col" data-aos="zoom-in-up" data-aos-duration="1000">
                    <div class="card h-100">
                        <div class="row align-items-center ps-0 ps-lg-3">
                            <div class="col-lg-6 text-center py-4 ">
                                <img class="img-fluid px-4 px-lg-0" alt="" src="https://i.ytimg.com/vi/ccO2B40zkv4/maxresdefault.jpg" />
                            </div>
                            <div class="col-lg-6">
                                <div class="card-body">
                                    <h5 className="card-title name">Create React Type Effect </h5>

                                    <p className="card-text "><small className="text-muted">Last updated 3 days ago</small></p>
                                    <a href="/" type="button" class="btn1 py-2 px-3" >Read More</a>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col" data-aos="zoom-in-up" data-aos-duration="1000">
                    <div class="card h-100">
                        <div class="row align-items-center ps-0 ps-lg-3">
                            <div class="col-lg-6 text-center py-4 ">
                                <img class="img-fluid px-4 px-lg-0" alt="" src="https://i.ytimg.com/vi/KFmEjQCyfMw/maxresdefault.jpg" />
                            </div>
                            <div class="col-lg-6">
                                <div class="card-body">
                                    <h5 className="card-title name">CSS Card Hover Effect </h5>

                                    <p className="card-text "><small className="text-muted">Last updated 5 days ago</small></p>
                                    <a href="/" type="button" class="btn1 py-2 px-3" >Read More</a>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col" data-aos="zoom-in-up" data-aos-duration="1000">
                    <div class="card h-100">
                        <div class="row align-items-center ps-0 ps-lg-3">
                            <div class="col-lg-6 text-center py-4 ">
                                <img class="img-fluid px-4 px-lg-0" alt="" src="https://i.morioh.com/200827/6b167dc9.webp" />
                            </div>
                            <div class="col-lg-6">
                                <div class="card-body">
                                    <h5 className="card-title name">How Css box model works? </h5>

                                    <p className="card-text "><small className="text-muted">Last updated 1 week ago</small></p>
                                    <a href="/" type="button" class="btn1 py-2 px-3" >Read More</a>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blogs;

