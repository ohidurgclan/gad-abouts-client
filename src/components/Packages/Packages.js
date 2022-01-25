import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useBlogs from '../../hooks/useBlogs';
import Package from '../Subitem/Package/Package';
import './Packages.css';

const Packages = () => {
      const [blogs] = useBlogs();
    return (
        <>
          <div className="service-pack">
          <Container className="mb-5 mt-5">
            <Row>
              <h2 className="fw-bold mb-5">User Blog Forum</h2>
            {
              blogs.map(packageItem => <Package
              key={packageItem._id}
              package={packageItem}
              ></Package>)
            }
            </Row>
          </Container>
          </div>
        </>
    );
};

export default Packages;