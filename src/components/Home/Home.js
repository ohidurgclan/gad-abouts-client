import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import useBlogs from '../../hooks/useBlogs';
import Package from '../Subitem/Package/Package';
import Slider from '../Subitem/Slider/Slider';
import './Home.css';
const Home = () => {
    const [blogs] = useBlogs();
    return (
        <>
            <Slider></Slider>
            <Container className="mt-5 mb-5">
            <Row>
            <Col lg={9} md={9} sm={12} xs={12}>
                {
                  blogs.slice(0, 6).map(packageItem => <Package
                  key={packageItem._id}
                  package={packageItem}
                  ></Package>)
              }
            </Col>
            </Row>  
            </Container>
        </>
    );
};

export default Home;