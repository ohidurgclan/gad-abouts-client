import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer'
import './Notfound.css';

const Notfound = () => {
    return (
        <>
            <Header></Header>
            <Container>
                <Row>
                    <Col>
                        <div className="area404">
                        <div className="notfound">
                        <div className="notfound-404">
                            <h1>404</h1>
                        </div>
                        <h2>We are sorry, Page not found!</h2>
                        <p>The page you are looking for might have been removed had its name changed or unavailable.</p>
                        <NavLink exact to="/">Back to Home</NavLink>
                        </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </>
    );
};

export default Notfound;