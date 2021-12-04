import React, { useState } from 'react';
import { Button, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import swal from 'sweetalert';

import './Contact.css';
const Contact = () => {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_lr06w8e', 'template_z9qy0xa', e.target, 'user_f1TYnZNRf5VmlQEEC3cRZ')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }

    const [email, setEmail] = useState();
    const handleInput2 = e => {
        setEmail(e.target.value);
    }

    const [name, setName] = useState();
    const handleInput3 = e => {
        setName(e.target.value);
    }

    const [message, setMessage] = useState();
    const handleInput4 = e => {
        setMessage(e.target.value);
    }

    const onSubmit = () => {
        if (email && name && message) {
            swal("Done!", "E-mail Successfully Sent.", "success");
        }
    };

    return (
        <div id="contact" className="color py-5 mt-5 overflow-hidden">
            <Container>
                <h1 className="text-white text-center">Contact Me</h1>
                <hr style={{ color: 'white' }} />
                <Row>
                    <Col data-aos="fade-right" className="text-start" xs={12} md={6}>
                        <h3 className="text-light">Contact Info</h3><br />
                        <h6 className="text-light"> <i className="fas fa-envelope-open-text text-light"> </i> shahinshanto90@gmail.com</h6>
                        <h6 className="text-light"> <i className="fas fa-mobile-alt text-light"></i> +880 1558920727</h6>
                        <h6 className="text-light"> <i className="fas fa-map-marker-alt text-light"></i> Agrabad, Chattogram, Bangladesh</h6><br />
                        <a href="https://www.linkedin.com/in/shahin-shanto-5a49aa197/"><i class="fab fa-linkedin fs-1 text-white pe-3"></i></a>
                        <a href="https://github.com/ShahinShanto"><i class="fab fa-github-square fs-1 text-white pe-3"></i></a>
                        <a href="https://www.facebook.com/shahinshantoo/"><i class="fab fa-facebook-square fs-1 text-white mb-4 mb-lg-0"></i></a>
                    </Col>
                    <Col data-aos="fade-left" className="text-start" xs={12} md={6}>
                        <Form onSubmit={sendEmail} >
                            <Form.Control onBlur={handleInput3} style={{ backgroundColor: 'white' }} className="w-80 mb-2 border-0 text-dark" placeholder="Your name" name="name" />
                            <Form.Control onBlur={handleInput2} style={{ backgroundColor: 'white' }} className="w-80 mb-2 border-0 text-dark" type="email" placeholder="Enter email" name="email" required />
                            <FloatingLabel controlId="floatingTextarea2" label="Your Comment">
                                <Form.Control
                                    onBlur={handleInput4}
                                    className="w-80 mb-2 border-0 "
                                    style={{ backgroundColor: 'white' }}
                                    as="textarea" name="message"
                                    placeholder="Leave a comment here"
                                    style={{ height: '100px' }}
                                />
                            </FloatingLabel>
                            <Button onClick={onSubmit} type="submit" className="rounded px-4 text-secondary" variant="light">send <i className="fas fa-paper-plane text-secondary"></i></Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
            <footer>
                <hr style={{ color: 'white' }} />
                <p className="text-white text-center m-0">All rights reserved © Shahin Shanto 2021 | Frontend Developer </p>
            </footer>
        </div>
    );
};

export default Contact;