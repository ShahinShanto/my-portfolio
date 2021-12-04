import React from 'react';
import './Skills.css';

const Skills = () => {

    return (

        <div className="container pt-lg-5" id="skill">
            <h1 className="name text-center mt-4">My Skills</h1>
            <h6 className="text-center mb-5">Expertise Level</h6>
            <div class="row  my-5">
                <div class="col-lg-6 mt-3 " data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom" data-aos-duration="1000">
                    <h4 className="name ps-3 " > Web Skills</h4>
                    <div class="skills">
                        <div class="skill">
                            <div class="skillName">HTML</div>
                            <div class="skillbar">
                                <div class="skillPer text-white" per="90%" style={{ maxWidth: '90%' }}></div>
                            </div>
                        </div>
                        <div class="skill">
                            <div class="skillName">CSS</div>
                            <div class="skillbar">
                                <div class="skillPer text-white" per="90%" style={{ maxWidth: '90%' }}></div>
                            </div>
                        </div>
                        <div class="skill">
                            <div class="skillName">Bootstrap</div>
                            <div class="skillbar">
                                <div class="skillPer text-white" per="85%" style={{ maxWidth: '85%' }}></div>
                            </div>
                        </div>

                        <div class="skill">
                            <div class="skillName">Javascript</div>
                            <div class="skillbar">
                                <div class="skillPer text-white" per="60%" style={{ maxWidth: '60%' }}></div>
                            </div>
                        </div>
                        <div class="skill">
                            <div class="skillName">React</div>
                            <div class="skillbar">
                                <div class="skillPer text-white" per="55%" style={{ maxWidth: '55%' }}></div>
                            </div>
                        </div>
                        <div class="skill">
                            <div class="skillName">Firebase</div>
                            <div class="skillbar">
                                <div class="skillPer text-white" per="40%" style={{ maxWidth: '40%' }}></div>
                            </div>
                        </div>


                        <div class="skill">
                            <div class="skillName">NodeJs</div>
                            <div class="skillbar">
                                <div class="skillPer text-white" per="45%" style={{ maxWidth: '45%' }}></div>
                            </div>
                        </div>

                        <div class="skill">
                            <div class="skillName">MongoDB</div>
                            <div class="skillbar">
                                <div class="skillPer text-white" per="40%" style={{ maxWidth: '40%' }}></div>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="col-lg-6 mt-4 mt-lg-2 " data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom" data-aos-duration="1000">
                    <h4 className="name ps-3 " > Design Skills</h4>
                    <div class="skills" >
                        <div class="skill">
                            <div class="skillName">Adobe Photoshop</div>
                            <div class="skillbar">
                                <div class="skillPer text-white" per="85%" style={{ maxWidth: '85%' }}></div>
                            </div>
                        </div>


                        <div class="skill">
                            <div class="skillName">Adobe Illustrator</div>
                            <div class="skillbar">
                                <div class="skillPer text-white" per="90%" style={{ maxWidth: '90%' }}></div>
                            </div>
                        </div>

                        <div class="skill">
                            <div class="skillName">Adobe XD</div>
                            <div class="skillbar">
                                <div class="skillPer text-white" per="40%" style={{ maxWidth: '40%' }}></div>
                            </div>
                        </div>
                        <div class="skill">
                            <div class="skillName">Adobe Premiere Pro</div>
                            <div class="skillbar">
                                <div class="skillPer text-white" per="50%" style={{ maxWidth: '50%' }}></div>
                            </div>
                        </div>
                        <div class="skill">
                            <div class="skillName">Filmora</div>
                            <div class="skillbar">
                                <div class="skillPer text-white" per="60%" style={{ maxWidth: '60%' }}></div>
                            </div>
                        </div>

                        <div class="skill">
                            <div class="skillName">Figma</div>
                            <div class="skillbar">
                                <div class="skillPer text-white" per="45%" style={{ maxWidth: '45%' }}></div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;