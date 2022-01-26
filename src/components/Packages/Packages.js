import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Header from "../Shared/Header/Header";
import Footer from "../Shared/Footer/Footer";
import Package from "../Subitem/Package/Package";
import "./Packages.css";

const Packages = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(`https://protected-crag-64613.herokuapp.com/blogs`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.items);
      });
  }, []);

  return (
    <>
      <Header></Header>
      <div className="service-pack">
        <Container className="mb-5 mt-5">
          <Row>
            <h2 className="fw-bold mb-5">User Blog Forum</h2>
            {products.map((packageItem) => (
              <Package key={packageItem._id} package={packageItem}></Package>
            ))}
          </Row>
        </Container>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Packages;
