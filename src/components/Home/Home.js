import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer'
import Package from '../Subitem/Package/Package';
import Slider from '../Subitem/Slider/Slider';
import './Home.css';
const Home = () => {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(0);
    const [pageCount, setPageCount] = useState(0);
    const size = 10;
    useEffect(() => {
        fetch(`http://localhost:7040/blogs?page=${page}&&size=${size}`)
            .then(res => res.json())
            .then(data => {
                setProducts(data.items);
                const count = data.count;
                const pageNumber = Math.ceil(count / size);
                setPageCount(pageNumber);
            });
    }, [page]);
    return (
        <>
            <Header></Header>
            <Slider></Slider>
            <Container className="mt-5 mb-5">
            <Row>
            <Col lg={9} md={9} sm={12} xs={12}>
              {
                  products?.map(packageItem => <Package
                  key={packageItem._id}
                  package={packageItem}
                  ></Package>)
              }
            </Col>
                <div className="pagination">
                        {
                            [...Array(pageCount).keys()]
                                .map(number => <Button
                                    className={number === page ? 'selected' : ''}
                                    key={number}
                                    onClick={() => setPage(number)}
                                >{number + 1}</Button>)
                        }
                </div>        
            </Row>  
            </Container>
        <Footer></Footer>
        </>
    );
};

export default Home;