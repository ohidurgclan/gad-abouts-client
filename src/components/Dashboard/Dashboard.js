import React from 'react';
import { BrowserRouter as Router, Switch, NavLink, useRouteMatch } from "react-router-dom";
import { Col, Container, Row } from 'react-bootstrap';
import HeaderDashboard from './HeaderDashboard/HeaderDashboard';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
// import AdminRoute from '../PrivateRoute/AdminRoute';
import MyOrder from '../Private/MyOrder/MyOrder';
import AllPosts from '../AllPosts/AllPosts';
import useAuth from '../../hooks/useAuth';

const Dashboard = () => {
    const { admin } = useAuth();
    let { path, url } = useRouteMatch();
    return (
        <Router>
            <HeaderDashboard></HeaderDashboard>
            <Container fluid>
                <Row>
                  <Col className='p-5' style={{backgroundColor: '#218784', height: '100vh'}} lg={2} md={2} sm={3} xs={3}>
                     <NavLink to={ `${url}/allPosts` } style={{ fontWeight: '500', color: '#fff', fontSize: '3vmin', textDecoration: 'none' }} activeStyle={{ fontWeight: "600", color: "#ff5a3c" }}>All Postes</NavLink> 
                    {admin ? <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', lineHeight: '3rem' }}>
                    <NavLink to={ `${url}/makeAdmin` } style={{ fontWeight: '500', color: '#fff', fontSize: '1.5rem', textDecoration: 'none' }} activeStyle={{ fontWeight: "600", color: "#ff5a3c" }}>Make Admin</NavLink>
                    <NavLink to={`${url}/addProducts`} style={{ fontWeight: '500', color: '#fff', fontSize: '1.5rem', textDecoration: 'none' }} activeStyle={{ fontWeight: "600", color: "#ff5a3c" }}>Add Services</NavLink>
                    <NavLink to={ `${url}/manageProduct` } style={{ fontWeight: '500', color: '#fff', fontSize: '1.5rem', textDecoration: 'none' }} activeStyle={{ fontWeight: "600", color: "#ff5a3c" }}>Manage Product</NavLink> 
                    <NavLink to={`${url}/manageOrder`} style={{ fontWeight: '500', color: '#fff', fontSize: '1.5rem', textDecoration: 'none' }} activeStyle={{ fontWeight: "600", color: "#ff5a3c" }}>Manage Order</NavLink>
                    <NavLink to={`${url}/manageUserReview`} style={{ fontWeight: '500', color: '#fff', fontSize: '1.5rem', textDecoration: 'none' }} activeStyle={{ fontWeight: "600", color: "#ff5a3c" }}>Manage Review</NavLink>
                    <NavLink to={ `${url}/paymentProcess` } style={{ fontWeight: '500', color: '#fff', fontSize: '1.5rem', textDecoration: 'none' }} activeStyle={{ fontWeight: "600", color: "#ff5a3c" }}>Payment</NavLink> 
                  </div> :
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', lineHeight: '3rem' }}>
                    <NavLink to={ `${url}/myOrders` } style={{ fontWeight: '500', color: '#fff', fontSize: '1.5rem', textDecoration: 'none' }} activeStyle={{ fontWeight: "600", color: "#ff5a3c" }}>My Orders</NavLink> 
                    <NavLink to={ `${url}/myFeedback` } style={{ fontWeight: '500', color: '#fff', fontSize: '1.5rem', textDecoration: 'none' }} activeStyle={{ fontWeight: "600", color: "#ff5a3c" }}>My Review</NavLink>
                    <NavLink to={ `${url}/paymentProcess` } style={{ fontWeight: '500', color: '#fff', fontSize: '1.5rem', textDecoration: 'none' }} activeStyle={{ fontWeight: "600", color: "#ff5a3c" }}>Payment</NavLink>
                  </div>}  
                </Col>
                    <Col lg={10} md={10} sm={10} xs={10}>
                        <Switch>
                            <PrivateRoute exact path={`${path}/myOrders`}>
                            <MyOrder></MyOrder>
                            </PrivateRoute>    
                            <PrivateRoute exact path={`${path}/allPosts`}>
                            <AllPosts></AllPosts>
                            </PrivateRoute>
                        </Switch>
                  </Col>
              </Row>
            </Container>
        </Router>
    );
};

export default Dashboard;