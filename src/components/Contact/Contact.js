import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-area">
            <Container>
          <Row>
            <h2 className="fw-bold text-center contact-h2" >Contact With Us</h2>
<Form>
                        <Row className="mb-3">
                                    <Form.Label>Your Name</Form.Label>
    <Form.Group as={Col} controlId="formGridEmail">

        <Form.Control placeholder="First name" />
    </Form.Group>
    <Form.Group as={Col} controlId="formGridEmail">
        <Form.Control placeholder="Last name" />
    </Form.Group>
    </Row>
    <Row className="mb-3">                      
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label> Your Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>
  </Row>

  <Form.Group className="mb-3" controlId="formGridAddress1">
    <Form.Label>State Address</Form.Label>
    <Form.Control placeholder="50th St Miami, Florida" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formGridAddress2">
    <Form.Label>Apartment, Studio, or Floor</Form.Label>
    <Form.Control placeholder="345 SF Industrial Building" />
  </Form.Group>

  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control placeholder="Miami Beach" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Zip Code</Form.Label>
      <Form.Control placeholder="33139" />
    </Form.Group>
  </Row>

  <Form.Group className="mb-3" id="formGridCheckbox">
    <Form.Check type="checkbox" label="All My Informations Are True." />
  </Form.Group>

  <Button variant="primary" type="submit">
    Submit Your Information
  </Button>
</Form>
</Row>
</Container>
</div>
    );
};

export default Contact;