import React from 'react';
import { Link } from 'react-router-dom';
import propic from '../image/Profile-01.png';
import './Header.css'
const Header = () => {
    return (

        <section class="container pb-5 mt-5">
            <div class="row justify-content-center align-items-center my-5">
                <div class="col-lg-6 order-first order-lg-last text-center">
                    <img class="img-fluid pb-5" src={propic} alt="" style={{ width: '25rem' }} />
                </div>
                <div class="col-lg-6 d-flex justify-content-center">
                    <div class="">
                        <h5 class="fw-light mb-4 text-secondary"> WELCOME TO MY WORLD</h5>
                        <h1 class="">
                            Hi, I’m<span class="name "> Shahin Shanto</span>
                        </h1>

                        <h4 class="mb-4">
                            Frontend Developer<span class="name "> | </span> Graphic Designer
                        </h4>
                        <p class="text-secondary mb-5">
                            Years of experience in Web Development & Graphic <br />Designing. I'm producing quality work. Customer satisfaction <br />is my only priority.
                        </p>
                        <a href="https://drive.google.com/file/d/18aYl_ZX9RpCFKx1uFKcjggieHkyoaWui/view?usp=sharing" type="button" class="btn1 text-center py-2 px-4">Download CV</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Header;