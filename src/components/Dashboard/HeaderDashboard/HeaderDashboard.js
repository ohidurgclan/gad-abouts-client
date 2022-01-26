import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './HeaderDashboard.css';

const HeaderDashboard = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar className="dashboard-header" collapseOnSelect expand="lg">
                <Container>
                <h2 className='fw-bolder'>Dashboard</h2>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end nav-bar">
                    <Nav.Link as={NavLink} to="/home" activeStyle={{ fontWeight: "bold", color: "#5c0a3f" }}>Home</Nav.Link>
                    <Nav.Link as={NavLink} to="/blogs" activeStyle={{ fontWeight: "bold", color: "#5c0a3f" }}>Blogs</Nav.Link>
                    <Button onClick={logOut} variant="light">Logout</Button>
                    <Navbar.Text className="ms-2 text-light">
                    {user?.displayName}
                    </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default HeaderDashboard;