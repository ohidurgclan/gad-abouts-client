import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useFirebase from '../../../hooks/useFirebase';
import useBlogs from '../../../hooks/useBlogs';
import './Order.css';


const Order = () => {    
  const { users } = useFirebase();
  console.log(users.email)
    const { packageKey } = useParams();
  const [blogs] = useBlogs();
  const [order, setOrder] = useState({});
  useEffect(() => {
      const orderItem = blogs.find(orderData => orderData.key === packageKey);
    setOrder(orderItem);
  }, [blogs])
  console.log(order)
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
        data.email = users?.email;
        data.orderName = order?.name;
        data.orderImg = order?.img;
        data.details = order?.details;
        data.orderPrice = order?.price;
        data.status = "Pending";
        axios
            .post("https://howling-citadel-94409.herokuapp.com/userpackage", data)
            .then((res) =>
            {
                if (res.data)
                {
                    alert("Successfully Registard");
                    reset();
                }
            });
    };

    return (
        <>
      <Container>
        <Row>
          <Col className="my-5" md={6}>
            <h3>Package Name : {order?.name}</h3>
              <img className="img img-fluid w-75 my-3" src={order?.img} alt="" />
              <h3>Rating : {order?.star}</h3>
              <h3> Price : {order?.price}</h3>
              <h4>Details</h4>
            <p>{order?.details}</p>
          </Col>
          <Col md={6} className="mt-5 d-flex">
            <div className="add-reg-form">
              <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="Name" {...register("Name", {})} />
                <input type="number" placeholder="Age" {...register("Age", {})} />
                <input type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
                <input type="number" placeholder="Mobile" {...register("Mobile", {})} />
                <input type="text" placeholder="Address" {...register("Address", {})} />
                <input className="appointment-btn" type="submit" />
              </form>
            </div>
          </Col>
        </Row>
      </Container>  
        </>
    );
};

export default Order;