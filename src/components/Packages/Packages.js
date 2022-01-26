import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import useBlogs from '../../hooks/useBlogs';
import Package from '../Subitem/Package/Package';
import './Packages.css';

const Packages = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(0);
    const [pageCount, setPageCount] = useState(0);
    const [displayProducts, setDisplayProducts] = useState([]);
    const size = 10;
    useEffect(() => {
        fetch(`http://localhost:7040/blogs?page=${page}&&size=${size}`)
            .then(res => res.json())
            .then(data => {
                setProducts(data.items);
                setDisplayProducts(data.items);
                const count = data.count;
                const pageNumber = Math.ceil(count / size);
                setPageCount(pageNumber);
            });
    }, [page]);

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