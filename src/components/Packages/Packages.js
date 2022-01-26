import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Package from '../Subitem/Package/Package';
import './Packages.css';

const Packages = () => {
  const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:7040/blogs`)
            .then(res => res.json())
            .then(data => {
                setProducts(data.items);
            });
    }, []);

    return (
        <>
          <div className="service-pack">
          <Container className="mb-5 mt-5">
            <Row>
              <h2 className="fw-bold mb-5">User Blog Forum</h2>
            {
              products.map(packageItem => <Package
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