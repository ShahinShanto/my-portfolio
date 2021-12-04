import React from 'react';
import pic from '../image/About-01.png'
import './About.css'
const About = () => {
    return (
        <div class="bg mt-5 py-lg-1" id="about" >
            <div class="container mt-5 bg">
                <h1 className="text-white pt-4 text-center mt-4">About Me</h1>
                <h6 className="text-center ">My Introduction</h6>
                <div class="row justify-content-center align-items-center my-4 ">
                    <div class="col-lg-6 text-center" data-aos="fade-up"
                        data-aos-duration="800">
                        <img class="img-fluid " src={pic} alt="" style={{ width: '22rem' }} />
                    </div>
                    <div class="col-lg-6 d-flex " data-aos="fade-down"
                        data-aos-duration="800">
                        <div class="">
                            <p class="text-white">Hi, I'm Shahin Shanto. I am a Web Developer. Besides programming, I have experience in graphics design and video editing. I am working for last 2 years in this sector. Quality of work is the most important thing to me and I always provide it whether the project is big or small. I like to make sure that my clients are satisfied. </p>
                            <a href="#contact" type="button" class="btn2 py-2 px-4 mt-5 mb-4 fw-bold">Contact Me</a>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default About;