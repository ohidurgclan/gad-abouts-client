import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Rating from "react-rating";
import { useParams } from "react-router";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import "./Order.css";

const Order = () => {
  const { packageid } = useParams();
  const [order, setOrder] = useState({});
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(`https://protected-crag-64613.herokuapp.com/blogs`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.items);
      });
  }, []);
  useEffect(() => {
    const orderItem = products.find((orderData) => orderData._id === packageid);
    setOrder(orderItem);
  }, [products, packageid]);

  return (
    <>
      <Header></Header>
      <Container className="mt-5 mb-5">
        <Row>
          <Col className="my-5" md={12}>
            <h2>{order?.title}</h2>
            <h5>Posted By : {order?.name}</h5>
          </Col>
          <Col lg={6} md={6} sm={12}>
            <div className="d-flex justify-content-between mb-5">
              <h5>Travel Package Cost : ${order?.cost}</h5>
              <Rating
                style={{ fontSize: "2.5vmin" }}
                initialRating={order?.star}
                emptySymbol="bi bi-star rate-color"
                fullSymbol="bi bi-star-fill rate-color"
              />
            </div>
            <p style={{ fontSize: "2.5vmin", fontWeight: "600" }}>
              {order?.detail}
            </p>
          </Col>
          <Col className="d-flex justify-content-center" lg={6} md={6} sm={12}>
            <img className="img img-fluid w-75" src={order?.img} alt="" />
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </>
  );
};

export default Order;
