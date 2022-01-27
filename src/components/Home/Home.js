import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Header from "../Shared/Header/Header";
import Footer from "../Shared/Footer/Footer";
import Package from "../Subitem/Package/Package";
import Slider from "../Subitem/Slider/Slider";
import bannerOne from '../../images/widget/tour-banner-1.jpg';
import bannerTwo from '../../images/widget/tour-banner-2.jpg';
import bannerThree from '../../images/widget/tour-banner-3.jpg';
import "./Home.css";
const Home = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const size = 10;
  useEffect(() => {
    fetch(
      `https://protected-crag-64613.herokuapp.com/blogs?page=${page}&&size=${size}`
    )
      .then((res) => res.json())
      .then((data) => {
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
            {products?.map((packageItem) => (
              <Package key={packageItem._id} package={packageItem}></Package>
            ))}
          <div className="pagination">
            {[...Array(pageCount).keys()].map((number) => (
              <Button
                className={number === page ? "selected" : ""}
                key={number}
                onClick={() => setPage(number)}
              >
                {number + 1}
              </Button>
            ))}
          </div>
          </Col>
          <Col className="mt-5" lg={3} md={3} sm={12} xs={12}>
            <img className="img img-fluid mb-5" src={bannerOne} alt="" />
            <img className="img img-fluid mb-5" src={bannerTwo} alt="" />
            <img className="img img-fluid mb-5" src={bannerThree} alt="" />
            <img className="img img-fluid mb-5" src={bannerOne} alt="" />
            <img className="img img-fluid mb-5" src={bannerTwo} alt="" />
            <img className="img img-fluid mb-5" src={bannerThree} alt="" />
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </>
  );
};

export default Home;
