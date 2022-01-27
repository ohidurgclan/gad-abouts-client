import React from 'react';
import { BrowserRouter as Router, Switch, NavLink, useRouteMatch } from "react-router-dom";
import { Col, Container, Row } from 'react-bootstrap';
import HeaderDashboard from './HeaderDashboard/HeaderDashboard';
import AllPosts from './Admin/AllPosts/AllPosts';
import CreatePost from './Admin/CreatePost/CreatePost';
import NewPost from './User/NewPost/NewPost';
import CreateAdmin from './Admin/CreateAdmin/CreateAdmin';
import MyPosts from './User/MyPosts/MyPosts';
import useAuth from '../../hooks/useAuth';
import AdminRoute from '../PrivateRoute/AdminRoute';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

const Dashboard = () => {
  const { admin } = useAuth();
    let { path, url } = useRouteMatch();
    return (
        <Router>
            <HeaderDashboard></HeaderDashboard>
            <Container fluid>
                <Row>
                  <Col className='p-5' style={{backgroundColor: '#218784', height: '150vh'}} lg={2} md={2} sm={3} xs={3}> 
                    {admin ? <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', lineHeight: '3rem' }}>
                    <NavLink to={ `${url}/makeAdmin` } style={{ fontWeight: '500', color: '#fff', fontSize: '3vmin', textDecoration: 'none' }} activeStyle={{ fontWeight: "600", color: "#5c0a3f" }}>Make Admin</NavLink>
                    <NavLink to={ `${url}/allPosts` } style={{ fontWeight: '500', color: '#fff', fontSize: '3vmin', textDecoration: 'none' }} activeStyle={{ fontWeight: "600", color: "#5c0a3f" }}>All Postes</NavLink>
                    <NavLink to={`${url}/addposts`} style={{ fontWeight: '500', color: '#fff', fontSize: '3vmin', textDecoration: 'none' }} activeStyle={{ fontWeight: "600", color: "#5c0a3f" }}>New Post</NavLink>
                  </div> :
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', lineHeight: '3rem' }}>
                    <NavLink to={ `${url}/myPosts` } style={{ fontWeight: '500', color: '#fff', fontSize: '3vmin', textDecoration: 'none' }} activeStyle={{ fontWeight: "600", color: "#5c0a3f" }}>My Posts</NavLink> 
                    <NavLink to={ `${url}/myAddPosts` } style={{ fontWeight: '500', color: '#fff', fontSize: '3vmin', textDecoration: 'none' }} activeStyle={{ fontWeight: "600", color: "#5c0a3f" }}>Add New Post</NavLink>
                  </div>}
                </Col>
                    <Col lg={10} md={10} sm={10} xs={10}>
                      <Switch>
                        <AdminRoute path={`${path}/makeAdmin`}>
                          <CreateAdmin></CreateAdmin>
                        </AdminRoute>
                        <AdminRoute path={`${path}/addposts`}>
                          <CreatePost></CreatePost>
                        </AdminRoute>     
                        <AdminRoute path={`${path}/allPosts`}>
                          <AllPosts></AllPosts>
                        </AdminRoute>
                        <PrivateRoute path={`${path}/myPosts`}>
                          <MyPosts></MyPosts>
                        </PrivateRoute>
                        <PrivateRoute path={`${path}/myAddPosts`}>
                          <NewPost></NewPost>
                        </PrivateRoute>
                      </Switch>
                  </Col>
              </Row>
            </Container>
        </Router>
    );
};

export default Dashboard;