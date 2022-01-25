import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './About.css';

const About = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col lg={6}>
                        <div className="offer-area">
                            <h2 className="fw-bold">About Us</h2>
                            <br />
                            <h3 className="fw-bold"><span></span>Tour-Jackpot</h3>
                            <p>‘Tour-Jackpot’ has different departments that are made out of blended age gatherings of clientss who are 2 through 50-year-olds and another departments of multi-year-olds, who figure out how to mind, enable, work, to play and collaborate with one another.
                                In the blended age amass words, clients gain from each other as they communicate in a Hotel setting. They figure out how to mind, enable, work, to play and coordinate with one another. Learning in a blended age aggregate animates a more prominent premium and supports participation.
                                The more youthful youngsters learn through perception of the more established clientss. The two and multi year old’s social and scholarly improvement is upgraded by this strategy for age gathering.
                                Blended age bunches upgrade both more youthful and more seasoned clientss’ inspiration and fearlessness. This inheritance of duty and helping other people is the point of convergence of the blended age-bunch setting.
                                This setting likewise makes a familial domain and reproduces what happens at home.</p>
                        </div>
                    </Col>
                    <Col lg={3} md={3} ex={3}>
                        <div className="offer-area">
                            <div className="info">
                            <h4>Safety First</h4>
                            <p>Client Safety First - First Aid for Emergency Petient, GRADE 1-3 ONLY (Just 2 Sessions Offered) 
                            For all grade 2 and 3 clients the First Aid for clients program is a Emergency workshop that known us</p>
                        </div>
                        <div className="info">
                            <h4>Managements Stuffs</h4>
                            <p>Stuff Certification Degrees is a Managements certification guide for individuals who want to learn how to become a Stuff or further their teaching career by earning an advanced degree.</p>
                        </div>
                        </div>
                    </Col>
                    <Col lg={3}> <div className="offer-area">
                            <div className="info">
                            <h4>Regular Check-Ups</h4>
                            <p>Students had to go into a regular class and wait for seven or eight months to see a Hotel psychologist to be retested.</p>
                        </div>
                        <div className="info">
                            <h4>Sufficient Resorts</h4>
                            <p>Every Hotel and Resorts will have air-conditioning, and there should be sufficient heat in Resorts Bed when it’s cold, but there should not be over-heating.</p>
                        </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default About;