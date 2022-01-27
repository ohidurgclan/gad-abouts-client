import React from 'react';
import { Button, Container, Navbar } from 'react-bootstrap';
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