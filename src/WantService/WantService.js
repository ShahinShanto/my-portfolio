import React from 'react';
import pic2 from '../image/Service-01.png'
import './WantService.css'
const WantService = () => {
    return (
        <div class="bg flow"  >
            <section class="container mt-5 bg">
                <div class="row justify-content-center align-items-center my-4 py-3">
                    <div class="col-lg-6 d-flex " data-aos="fade-right" data-aos-duration="1000">
                        <div class="">
                            <h1 class="text-white ser">Want any of our <br />services?</h1>
                            <h5 class="text-white mt-3"> Contact me and get 20% discount on your first project.</h5>
                            <a href="#contact" type="button" class="btn2 py-2 px-4 mt-5 mb-4 fw-bold">Contact Me</a>
                        </div>
                    </div>
                    <div class="col-lg-6 order-first order-lg-last justify-content-center" data-aos="fade-left" data-aos-duration="1000">
                        <img class="img-fluid " src={pic2} alt="" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default WantService;